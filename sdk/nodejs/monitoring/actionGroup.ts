// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an Action Group within Azure Monitor.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "monitoring-resources",
 * });
 * const testActionGroup = new azure.monitoring.ActionGroup("test", {
 *     emailReceivers: [
 *         {
 *             emailAddress: "admin@contoso.com",
 *             name: "sendtoadmin",
 *         },
 *         {
 *             emailAddress: "devops@contoso.com",
 *             name: "sendtodevops",
 *         },
 *     ],
 *     name: "CriticalAlertsAction",
 *     resourceGroupName: testResourceGroup.name,
 *     shortName: "p0action",
 *     smsReceivers: [{
 *         countryCode: "1",
 *         name: "oncallmsg",
 *         phoneNumber: "1231231234",
 *     }],
 *     webhookReceivers: [{
 *         name: "callmyapiaswell",
 *         serviceUri: "http://example.com/alert",
 *     }],
 * });
 * ```
 */
export class ActionGroup extends pulumi.CustomResource {
    /**
     * Get an existing ActionGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActionGroupState, opts?: pulumi.CustomResourceOptions): ActionGroup {
        return new ActionGroup(name, <any>state, { ...opts, id: id });
    }

    /**
     * One or more `email_receiver` blocks as defined below.
     */
    public readonly emailReceivers!: pulumi.Output<{ emailAddress: string, name: string }[] | undefined>;
    /**
     * Whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications. Defaults to `true`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the webhook receiver. Names must be unique (case-insensitive) across all receivers within an action group.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Action Group instance.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    public readonly shortName!: pulumi.Output<string>;
    /**
     * One or more `sms_receiver ` blocks as defined below.
     */
    public readonly smsReceivers!: pulumi.Output<{ countryCode: string, name: string, phoneNumber: string }[] | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;
    /**
     * One or more `webhook_receiver ` blocks as defined below.
     */
    public readonly webhookReceivers!: pulumi.Output<{ name: string, serviceUri: string }[] | undefined>;

    /**
     * Create a ActionGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActionGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ActionGroupArgs | ActionGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ActionGroupState | undefined;
            inputs["emailReceivers"] = state ? state.emailReceivers : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["shortName"] = state ? state.shortName : undefined;
            inputs["smsReceivers"] = state ? state.smsReceivers : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["webhookReceivers"] = state ? state.webhookReceivers : undefined;
        } else {
            const args = argsOrState as ActionGroupArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.shortName === undefined) {
                throw new Error("Missing required property 'shortName'");
            }
            inputs["emailReceivers"] = args ? args.emailReceivers : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["shortName"] = args ? args.shortName : undefined;
            inputs["smsReceivers"] = args ? args.smsReceivers : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["webhookReceivers"] = args ? args.webhookReceivers : undefined;
        }
        super("azure:monitoring/actionGroup:ActionGroup", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ActionGroup resources.
 */
export interface ActionGroupState {
    /**
     * One or more `email_receiver` blocks as defined below.
     */
    readonly emailReceivers?: pulumi.Input<pulumi.Input<{ emailAddress: pulumi.Input<string>, name: pulumi.Input<string> }>[]>;
    /**
     * Whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * The name of the webhook receiver. Names must be unique (case-insensitive) across all receivers within an action group.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Action Group instance.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    readonly shortName?: pulumi.Input<string>;
    /**
     * One or more `sms_receiver ` blocks as defined below.
     */
    readonly smsReceivers?: pulumi.Input<pulumi.Input<{ countryCode: pulumi.Input<string>, name: pulumi.Input<string>, phoneNumber: pulumi.Input<string> }>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * One or more `webhook_receiver ` blocks as defined below.
     */
    readonly webhookReceivers?: pulumi.Input<pulumi.Input<{ name: pulumi.Input<string>, serviceUri: pulumi.Input<string> }>[]>;
}

/**
 * The set of arguments for constructing a ActionGroup resource.
 */
export interface ActionGroupArgs {
    /**
     * One or more `email_receiver` blocks as defined below.
     */
    readonly emailReceivers?: pulumi.Input<pulumi.Input<{ emailAddress: pulumi.Input<string>, name: pulumi.Input<string> }>[]>;
    /**
     * Whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * The name of the webhook receiver. Names must be unique (case-insensitive) across all receivers within an action group.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Action Group instance.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    readonly shortName: pulumi.Input<string>;
    /**
     * One or more `sms_receiver ` blocks as defined below.
     */
    readonly smsReceivers?: pulumi.Input<pulumi.Input<{ countryCode: pulumi.Input<string>, name: pulumi.Input<string>, phoneNumber: pulumi.Input<string> }>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * One or more `webhook_receiver ` blocks as defined below.
     */
    readonly webhookReceivers?: pulumi.Input<pulumi.Input<{ name: pulumi.Input<string>, serviceUri: pulumi.Input<string> }>[]>;
}
