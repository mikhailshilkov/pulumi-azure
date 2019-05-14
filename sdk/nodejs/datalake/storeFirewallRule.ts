// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manage a Azure Data Lake Store Firewall Rule.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "northeurope",
 *     name: "example",
 * });
 * const exampleStore = new azure.datalake.Store("example", {
 *     location: exampleResourceGroup.location,
 *     name: "consumptiondatalake",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleStoreFirewallRule = new azure.datalake.StoreFirewallRule("example", {
 *     accountName: exampleStore.name,
 *     endIpAddress: "2.3.4.5",
 *     name: "office-ip-range",
 *     resourceGroupName: exampleResourceGroup.name,
 *     startIpAddress: "1.2.3.4",
 * });
 * ```
 */
export class StoreFirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing StoreFirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StoreFirewallRuleState, opts?: pulumi.CustomResourceOptions): StoreFirewallRule {
        return new StoreFirewallRule(name, <any>state, { ...opts, id: id });
    }

    /**
     * Specifies the name of the Data Lake Store for which the Firewall Rule should take effect.
     */
    public readonly accountName!: pulumi.Output<string>;
    /**
     * The End IP Address for the firewall rule.
     */
    public readonly endIpAddress!: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The Start IP address for the firewall rule.
     */
    public readonly startIpAddress!: pulumi.Output<string>;

    /**
     * Create a StoreFirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StoreFirewallRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StoreFirewallRuleArgs | StoreFirewallRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as StoreFirewallRuleState | undefined;
            inputs["accountName"] = state ? state.accountName : undefined;
            inputs["endIpAddress"] = state ? state.endIpAddress : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["startIpAddress"] = state ? state.startIpAddress : undefined;
        } else {
            const args = argsOrState as StoreFirewallRuleArgs | undefined;
            if (!args || args.accountName === undefined) {
                throw new Error("Missing required property 'accountName'");
            }
            if (!args || args.endIpAddress === undefined) {
                throw new Error("Missing required property 'endIpAddress'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.startIpAddress === undefined) {
                throw new Error("Missing required property 'startIpAddress'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["endIpAddress"] = args ? args.endIpAddress : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["startIpAddress"] = args ? args.startIpAddress : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super("azure:datalake/storeFirewallRule:StoreFirewallRule", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering StoreFirewallRule resources.
 */
export interface StoreFirewallRuleState {
    /**
     * Specifies the name of the Data Lake Store for which the Firewall Rule should take effect.
     */
    readonly accountName?: pulumi.Input<string>;
    /**
     * The End IP Address for the firewall rule.
     */
    readonly endIpAddress?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The Start IP address for the firewall rule.
     */
    readonly startIpAddress?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a StoreFirewallRule resource.
 */
export interface StoreFirewallRuleArgs {
    /**
     * Specifies the name of the Data Lake Store for which the Firewall Rule should take effect.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The End IP Address for the firewall rule.
     */
    readonly endIpAddress: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The Start IP address for the firewall rule.
     */
    readonly startIpAddress: pulumi.Input<string>;
}
