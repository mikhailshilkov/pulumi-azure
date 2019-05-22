// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Event Hubs authorization Rule within an Event Hub.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "resourceGroup1",
 * });
 * const testEventHubNamespace = new azure.eventhub.EventHubNamespace("test", {
 *     capacity: 2,
 *     location: "West US",
 *     name: "acceptanceTestEventHubNamespace",
 *     resourceGroupName: testResourceGroup.name,
 *     sku: "Basic",
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * const testEventHub = new azure.eventhub.EventHub("test", {
 *     messageRetention: 2,
 *     name: "acceptanceTestEventHub",
 *     namespaceName: testEventHubNamespace.name,
 *     partitionCount: 2,
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testEventHubAuthorizationRule = new azure.eventhub.EventHubAuthorizationRule("test", {
 *     eventhubName: testEventHub.name,
 *     listen: true,
 *     manage: false,
 *     name: "navi",
 *     namespaceName: testEventHubNamespace.name,
 *     resourceGroupName: testResourceGroup.name,
 *     send: false,
 * });
 * ```
 */
export class EventHubAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing EventHubAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventHubAuthorizationRuleState, opts?: pulumi.CustomResourceOptions): EventHubAuthorizationRule {
        return new EventHubAuthorizationRule(name, <any>state, { ...opts, id: id });
    }

    /**
     * Specifies the name of the EventHub. Changing this forces a new resource to be created.
     */
    public readonly eventhubName!: pulumi.Output<string>;
    /**
     * Does this Authorization Rule have permissions to Listen to the Event Hub? Defaults to `false`.
     */
    public readonly listen!: pulumi.Output<boolean | undefined>;
    public readonly location!: pulumi.Output<string>;
    /**
     * Does this Authorization Rule have permissions to Manage to the Event Hub? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    public readonly manage!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the name of the EventHub Authorization Rule resource. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
     */
    public readonly namespaceName!: pulumi.Output<string>;
    /**
     * The Primary Connection String for the Event Hubs authorization Rule.
     */
    public /*out*/ readonly primaryConnectionString!: pulumi.Output<string>;
    /**
     * The Primary Key for the Event Hubs authorization Rule.
     */
    public /*out*/ readonly primaryKey!: pulumi.Output<string>;
    /**
     * The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The Secondary Connection String for the Event Hubs authorization Rule.
     */
    public /*out*/ readonly secondaryConnectionString!: pulumi.Output<string>;
    /**
     * The Secondary Key for the Event Hubs authorization Rule.
     */
    public /*out*/ readonly secondaryKey!: pulumi.Output<string>;
    /**
     * Does this Authorization Rule have permissions to Send to the Event Hub? Defaults to `false`.
     */
    public readonly send!: pulumi.Output<boolean | undefined>;

    /**
     * Create a EventHubAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventHubAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventHubAuthorizationRuleArgs | EventHubAuthorizationRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EventHubAuthorizationRuleState | undefined;
            inputs["eventhubName"] = state ? state.eventhubName : undefined;
            inputs["listen"] = state ? state.listen : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["manage"] = state ? state.manage : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namespaceName"] = state ? state.namespaceName : undefined;
            inputs["primaryConnectionString"] = state ? state.primaryConnectionString : undefined;
            inputs["primaryKey"] = state ? state.primaryKey : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["secondaryConnectionString"] = state ? state.secondaryConnectionString : undefined;
            inputs["secondaryKey"] = state ? state.secondaryKey : undefined;
            inputs["send"] = state ? state.send : undefined;
        } else {
            const args = argsOrState as EventHubAuthorizationRuleArgs | undefined;
            if (!args || args.eventhubName === undefined) {
                throw new Error("Missing required property 'eventhubName'");
            }
            if (!args || args.namespaceName === undefined) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["eventhubName"] = args ? args.eventhubName : undefined;
            inputs["listen"] = args ? args.listen : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["manage"] = args ? args.manage : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["send"] = args ? args.send : undefined;
            inputs["primaryConnectionString"] = undefined /*out*/;
            inputs["primaryKey"] = undefined /*out*/;
            inputs["secondaryConnectionString"] = undefined /*out*/;
            inputs["secondaryKey"] = undefined /*out*/;
        }
        super("azure:eventhub/eventHubAuthorizationRule:EventHubAuthorizationRule", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EventHubAuthorizationRule resources.
 */
export interface EventHubAuthorizationRuleState {
    /**
     * Specifies the name of the EventHub. Changing this forces a new resource to be created.
     */
    readonly eventhubName?: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have permissions to Listen to the Event Hub? Defaults to `false`.
     */
    readonly listen?: pulumi.Input<boolean>;
    readonly location?: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have permissions to Manage to the Event Hub? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    readonly manage?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the EventHub Authorization Rule resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
     */
    readonly namespaceName?: pulumi.Input<string>;
    /**
     * The Primary Connection String for the Event Hubs authorization Rule.
     */
    readonly primaryConnectionString?: pulumi.Input<string>;
    /**
     * The Primary Key for the Event Hubs authorization Rule.
     */
    readonly primaryKey?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The Secondary Connection String for the Event Hubs authorization Rule.
     */
    readonly secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The Secondary Key for the Event Hubs authorization Rule.
     */
    readonly secondaryKey?: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have permissions to Send to the Event Hub? Defaults to `false`.
     */
    readonly send?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a EventHubAuthorizationRule resource.
 */
export interface EventHubAuthorizationRuleArgs {
    /**
     * Specifies the name of the EventHub. Changing this forces a new resource to be created.
     */
    readonly eventhubName: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have permissions to Listen to the Event Hub? Defaults to `false`.
     */
    readonly listen?: pulumi.Input<boolean>;
    readonly location?: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have permissions to Manage to the Event Hub? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    readonly manage?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the EventHub Authorization Rule resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have permissions to Send to the Event Hub? Defaults to `false`.
     */
    readonly send?: pulumi.Input<boolean>;
}
