// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as pulumi from "@pulumi/pulumi";
import { SqlDatabase } from "./sqlDatabase";

import * as appservice from "../appservice";
import * as core from "../core";
import * as util from "../util";
import { cosmosdb } from "..";

interface CosmosBindingDefinition extends appservice.BindingDefinition {
    /**
     * The name of the property in the context object to bind the actual items to.
     */
    name: string;

    /**
     * The type of a Cosmos DB binding. Must be 'cosmosDBTrigger'.
     */
    type: "cosmosDBTrigger";

    /**
     * The direction of the binding. We only support collection items being inputs to functions.
     */
    direction: "in";

    /**
     * The name of the database we are subscribing to.
     */
    databaseName: pulumi.Input<string>;

    /**
     * The name of the collection inside the database we are subscribing to.
     */
    collectionName: pulumi.Input<string>;

    /**
     * When set, it adds a prefix to the leases created in the Lease collection for this Function, effectively allowing 
     * two separate Azure Functions to share the same Lease collection by using different prefixes.
     */
    leaseCollectionPrefix: pulumi.Input<string>;

    /**
     * When set to true, the leases collection is automatically created when it doesn't already exist. 
     * The default value is false.
     */
    createLeaseCollectionIfNotExists: boolean;

    /**
     * The name of an app setting that contains the Cosmos DB connection string to use for this binding.
     */
    connectionStringSetting: pulumi.Input<string>;

    /**
     * When set, it customizes the maximum amount of items received per Function call.
     */
    maxItemsPerInvocation?: pulumi.Input<number>;

    /**
     * When set, it tells the Trigger to start reading changes from the beginning of the history of the collection instead of the current time. 
     * This only works the first time the Trigger starts, as in subsequent runs, the checkpoints are already stored. Setting this to true when 
     * there are leases already created has no effect.
     */
    startFromBeginning?: pulumi.Input<boolean>;
}

/**
 * Data that will be passed along in the context object to the CosmosCallback.
 */
export interface CosmosChangeFeedContext extends appservice.Context<void> {
    invocationId: string;
    executionContext: {
        invocationId: string;
        functionName: string;
        functionDirectory: string;
    };
    bindings: { items: any[] };
    bindingData: {
        sys: {
            methodName: string;
            utcNow: string;
        },
        invocationId: string;
    };
}

/**
 * Signature of the callback that can receive Cosmos Change Feed notifications.
 */
export type CosmosChangeFeedCallback = appservice.Callback<CosmosChangeFeedContext, any[], void>;

export type CosmosChangeFeedSubscriptionArgs = util.Overwrite<appservice.CallbackFunctionAppArgs<CosmosChangeFeedContext, any[], void>, {
    /**
     * The name of the collection inside the database we are subscribing to.
     */
    collectionName: pulumi.Input<string>;

    /**
     * When set, it customizes the maximum amount of items received per Function call.
     */
    maxItemsPerInvocation?: pulumi.Input<number>;

    /**
     * When set, it tells the Trigger to start reading changes from the beginning of the history of the collection instead of the current time. 
     * This only works the first time the Trigger starts, as in subsequent runs, the checkpoints are already stored. Setting this to true when 
     * there are leases already created has no effect.
     */
    startFromBeginning?: pulumi.Input<boolean>;

    /**
     * The resource group in which to create the event subscription.  If not supplied, the Topic's
     * resource group will be used.
     */
    resourceGroup?: core.ResourceGroup;

    /**
     * The name of the resource group in which to create the event subscription.  If not supplied,
     * the Topic's resource group will be used.
     */
    resourceGroupName?: pulumi.Input<string>;

    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new
     * resource to be created.  If not supplied, the location of the Topic's ResourceGroup will be
     * used.
     */
    location?: pulumi.Input<string>;
}>;

declare module "./sqlDatabase" {
    interface SqlDatabase {
        /**
         * Creates a new subscription to events fired from Cosmos DB Change Feed to the handler provided, along
         * with options to control the behavior of the subscription.
         */
        onChange(
            name: string, args: CosmosChangeFeedSubscriptionArgs, opts?: pulumi.ComponentResourceOptions): CosmosChangeFeedSubscription;
    }
}

SqlDatabase.prototype.onChange = function(this: cosmosdb.SqlDatabase, name, args, opts) {
    return new CosmosChangeFeedSubscription(name, this, args, opts);
}

export class CosmosChangeFeedSubscription extends appservice.EventSubscription<CosmosChangeFeedContext, any[], void> {
    readonly database: cosmosdb.SqlDatabase;

    constructor(
        name: string, database: cosmosdb.SqlDatabase,
        args: CosmosChangeFeedSubscriptionArgs, opts: pulumi.ComponentResourceOptions = {}) {

        opts = { parent: database, ...opts };

        const { resourceGroupName, location } = appservice.getResourceGroupNameAndLocation(args, database.resourceGroupName);

        const func = new CosmosChangeFeedFunction(name, {
            ...args,
            database
        });

        super("azure:eventhub:CosmosChangeFeedSubscription", name, func, {
            ...args,
            resourceGroupName,
            location,
        }, opts);

        this.database = database;

        this.registerOutputs();
    }
}

export type CosmosChangeFeedFunctionArgs = util.Overwrite<appservice.CallbackArgs<CosmosChangeFeedContext, any[], void>, {
    /**
     * The database we are subscribing to.
     */
    database: cosmosdb.SqlDatabase;

    /**
     * The name of the collection inside the database we are subscribing to.
     */
    collectionName: pulumi.Input<string>;

    /**
     * When set, it customizes the maximum amount of items received per Function call.
     */
    maxItemsPerInvocation?: pulumi.Input<number>;

    /**
     * When set, it tells the Trigger to start reading changes from the beginning of the history of the collection instead of the current time. 
     * This only works the first time the Trigger starts, as in subsequent runs, the checkpoints are already stored. Setting this to true when 
     * there are leases already created has no effect.
     */
    startFromBeginning?: pulumi.Input<boolean>;
}>;

/**
 * Azure Function triggered by a Cosmos DB Change Feed.
 */
export class CosmosChangeFeedFunction implements appservice.FunctionArgs {
    /**
     * Function name.
     */
    public readonly name: string;

    /**
     * An array of function binding definitions.
     */
    public readonly bindings: pulumi.Input<CosmosBindingDefinition[]>;

    /**
     * Serialized function callback.
     */
    public readonly body: Promise<pulumi.runtime.SerializedFunction>;

    /**
     * Application settings required by the function.
     */
    public readonly appSettings: pulumi.Input<{ [key: string]: string }>;

    constructor(name: string, args: CosmosChangeFeedFunctionArgs) {
        this.name = name;
        this.body = appservice.serializeFunctionCallback(args);

        args.database.accountName

        const bindingConnectionKey = pulumi.interpolate`${args.database.accountName}ConnectionStringKey`;
        this.bindings = [{
            name: "items",
            direction: "in",
            type: "cosmosDBTrigger",
            connectionStringSetting: bindingConnectionKey,
            databaseName: args.database.name,
            collectionName: args.collectionName,
            maxItemsPerInvocation: args.maxItemsPerInvocation,
            startFromBeginning: args.startFromBeginning,
            
            // We take an opiniated approach here: use the default "leases" collection as
            // a shared lease collection for all Cosmos DB triggered functions. With multiple
            // functions, this is both the simplest and the cheapest solution. The collection
            // will be auto-created if it doesn't exist yet.
            leaseCollectionPrefix: name,
            createLeaseCollectionIfNotExists: true,
        }];
    
        const account = pulumi.all([args.database.resourceGroupName, args.database.accountName])
                            .apply(([resourceGroupName, accountName]) =>
                                cosmosdb.getAccount({ resourceGroupName, name: accountName }));
    
        const connectionString =  pulumi.interpolate`AccountEndpoint=https://${args.database.accountName}.documents.azure.com:443/;AccountKey=${account.primaryMasterKey}`;
        this.appSettings = pulumi.all([bindingConnectionKey, connectionString]).apply(([key, value]) => ({ [key]: value }));
    }
}
