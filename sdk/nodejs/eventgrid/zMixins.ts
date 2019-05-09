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
import { EventGridEventSubscription, EventGridTopic } from "../eventhub";

import * as appservice from "../appservice";
import * as core from "../core";
import * as util from "../util";

interface EventGridBindingDefinition extends appservice.BindingDefinition {
    /**
     * The name of the property in the context object to bind the actual message to.
     */
    name: string;

    /**
     * The type of a event grid binding.  Must be 'serviceBusTrigger'.
     */
    type: "eventGridTrigger";

    /**
     * The direction of the binding.  We only support events being inputs to functions.
     */
    direction: "in";
}

/**
 * Data that will be passed along in the context object to the EventGridCallback.
 */
export interface EventGridContext extends appservice.Context<void> {
    invocationId: string;
    executionContext: {
        invocationId: string;
        functionName: string;
        functionDirectory: string;
    };
    bindings: { topic: string };
    bindingData: {
        // TODO
        sys: {
            methodName: string;
            utcNow: string;
        },
        invocationId: string;
    };
}

/**
 * Signature of the callback that can receive blob notifications.
 */
export type EventGridCallback = appservice.Callback<EventGridContext, string, void>;

export type EventGridSubscriptionArgs = util.Overwrite<appservice.CallbackFunctionAppArgs<EventGridContext, any, void>, {
    /**
     * The Subscription to subscribe the FunctionApp to.  If not present, a new Subscription
     * resource will be created.
     */
    subscription?: EventGridEventSubscription;

    //TODO

    /**
     * The resource group in which to create the event grid subscription. If not supplied, the Event Grid's
     * resource group will be used.
     */
    resourceGroup?: core.ResourceGroup;

    /**
     * The name of the resource group in which to create the event grid subscription. If not supplied,
     * the Event Grid's resource group will be used.
     */
    resourceGroupName?: pulumi.Input<string>;

    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new
     * resource to be created.  If not supplied, the location of the Event Grid's ResourceGroup will be
     * used.
     */
    location?: pulumi.Input<string>;
}>;

declare module "../eventhub/eventGridTopic" {
    interface EventGridTopic {
        /**
         * Creates a new subscription to events fired from this Topic to the handler provided, along
         * with options to control the behavior of the subscription.
         */
        onEvent(
            name: string, args: EventGridCallback | EventGridSubscriptionArgs, opts?: pulumi.ComponentResourceOptions): EventGridSubscription;
    }
}

EventGridTopic.prototype.onEvent = function(this: EventGridTopic, name, args, opts) {
    const functionArgs = args instanceof Function
        ? <EventGridSubscriptionArgs>{ callback: args }
        : args;

    return new EventGridSubscription(name, this, functionArgs, opts);
}

export class EventGridSubscription extends appservice.EventSubscription<EventGridContext, string, void> {
    readonly topic: EventGridTopic;
    readonly subscription: EventGridEventSubscription;

    constructor(
        name: string, topic: EventGridTopic,
        args: EventGridSubscriptionArgs, opts: pulumi.ComponentResourceOptions = {}) {

        opts = { parent: topic, ...opts };

        const { resourceGroupName, location } = appservice.getResourceGroupNameAndLocation(args, topic.resourceGroupName);

        const bindings: EventGridBindingDefinition[] = [{
            name: "eventGrid",
            direction: "in",
            type: "eventGridTrigger",
        }];

        const appSettings = args.appSettings;

        super("azure:eventhub:TopicEventSubscription", name, bindings, {
            ...args,
            resourceGroupName,
            location,
            appSettings
        }, opts);

        const webhook = pulumi.all([this.functionApp.name, this.functionApp]).apply(
            ([appSettings, connectionString]) => ({ ...appSettings, [bindingConnectionKey]: connectionString }));
        
        const subscription = args.subscription || new EventGridEventSubscription(name, {
            topicName: topic.name,
            webhookEndpoint: {
                url: `https://{functionappname}.azurewebsites.net/runtime/webhooks/eventgrid?functionName={functionname}&code={systemkey}`
            },
            scope: ""//TODO
        }, opts);

        this.topic = topic;
        this.subscription = subscription;

        this.registerOutputs();
    }
}
