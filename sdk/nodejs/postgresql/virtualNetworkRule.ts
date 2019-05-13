// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a PostgreSQL Virtual Network Rule.
 * 
 * > **NOTE:** PostgreSQL Virtual Network Rules [can only be used with SKU Tiers of `GeneralPurpose` or `MemoryOptimized`](https://docs.microsoft.com/en-us/azure/postgresql/concepts-data-access-and-security-vnet)
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "example-resources",
 * });
 * const testServer = new azure.postgresql.Server("test", {
 *     administratorLogin: "psqladminun",
 *     administratorLoginPassword: "H@Sh1CoR3!",
 *     location: testResourceGroup.location,
 *     name: "postgresql-server-1",
 *     resourceGroupName: testResourceGroup.name,
 *     sku: {
 *         capacity: 2,
 *         family: "Gen5",
 *         name: "GP_Gen5_2",
 *         tier: "GeneralPurpose",
 *     },
 *     sslEnforcement: "Enabled",
 *     storageProfile: {
 *         backupRetentionDays: 7,
 *         geoRedundantBackup: "Disabled",
 *         storageMb: 5120,
 *     },
 *     version: "9.5",
 * });
 * const testVirtualNetwork = new azure.network.VirtualNetwork("test", {
 *     addressSpaces: ["10.7.29.0/29"],
 *     location: testResourceGroup.location,
 *     name: "example-vnet",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const internal = new azure.network.Subnet("internal", {
 *     addressPrefix: "10.7.29.0/29",
 *     name: "internal",
 *     resourceGroupName: testResourceGroup.name,
 *     serviceEndpoints: ["Microsoft.Sql"],
 *     virtualNetworkName: testVirtualNetwork.name,
 * });
 * const testVirtualNetworkRule = new azure.postgresql.VirtualNetworkRule("test", {
 *     ignoreMissingVnetServiceEndpoint: true,
 *     name: "postgresql-vnet-rule",
 *     resourceGroupName: testResourceGroup.name,
 *     serverName: testServer.name,
 *     subnetId: internal.id,
 * });
 * ```
 */
export class VirtualNetworkRule extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualNetworkRuleState, opts?: pulumi.CustomResourceOptions): VirtualNetworkRule {
        return new VirtualNetworkRule(name, <any>state, { ...opts, id: id });
    }

    /**
     * Should the Virtual Network Rule be created before the Subnet has the Virtual Network Service Endpoint enabled? Defaults to `false`.
     */
    public readonly ignoreMissingVnetServiceEndpoint!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the PostgreSQL virtual network rule. Cannot be empty and must only contain alphanumeric characters and hyphens. Cannot start with a number, and cannot start or end with a hyphen. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group where the PostgreSQL server resides. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The name of the SQL Server to which this PostgreSQL virtual network rule will be applied to. Changing this forces a new resource to be created.
     */
    public readonly serverName!: pulumi.Output<string>;
    /**
     * The ID of the subnet that the PostgreSQL server will be connected to.
     */
    public readonly subnetId!: pulumi.Output<string>;

    /**
     * Create a VirtualNetworkRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualNetworkRuleArgs | VirtualNetworkRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as VirtualNetworkRuleState | undefined;
            inputs["ignoreMissingVnetServiceEndpoint"] = state ? state.ignoreMissingVnetServiceEndpoint : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["serverName"] = state ? state.serverName : undefined;
            inputs["subnetId"] = state ? state.subnetId : undefined;
        } else {
            const args = argsOrState as VirtualNetworkRuleArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serverName === undefined) {
                throw new Error("Missing required property 'serverName'");
            }
            if (!args || args.subnetId === undefined) {
                throw new Error("Missing required property 'subnetId'");
            }
            inputs["ignoreMissingVnetServiceEndpoint"] = args ? args.ignoreMissingVnetServiceEndpoint : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["subnetId"] = args ? args.subnetId : undefined;
        }
        super("azure:postgresql/virtualNetworkRule:VirtualNetworkRule", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering VirtualNetworkRule resources.
 */
export interface VirtualNetworkRuleState {
    /**
     * Should the Virtual Network Rule be created before the Subnet has the Virtual Network Service Endpoint enabled? Defaults to `false`.
     */
    readonly ignoreMissingVnetServiceEndpoint?: pulumi.Input<boolean>;
    /**
     * The name of the PostgreSQL virtual network rule. Cannot be empty and must only contain alphanumeric characters and hyphens. Cannot start with a number, and cannot start or end with a hyphen. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group where the PostgreSQL server resides. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the SQL Server to which this PostgreSQL virtual network rule will be applied to. Changing this forces a new resource to be created.
     */
    readonly serverName?: pulumi.Input<string>;
    /**
     * The ID of the subnet that the PostgreSQL server will be connected to.
     */
    readonly subnetId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VirtualNetworkRule resource.
 */
export interface VirtualNetworkRuleArgs {
    /**
     * Should the Virtual Network Rule be created before the Subnet has the Virtual Network Service Endpoint enabled? Defaults to `false`.
     */
    readonly ignoreMissingVnetServiceEndpoint?: pulumi.Input<boolean>;
    /**
     * The name of the PostgreSQL virtual network rule. Cannot be empty and must only contain alphanumeric characters and hyphens. Cannot start with a number, and cannot start or end with a hyphen. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group where the PostgreSQL server resides. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SQL Server to which this PostgreSQL virtual network rule will be applied to. Changing this forces a new resource to be created.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * The ID of the subnet that the PostgreSQL server will be connected to.
     */
    readonly subnetId: pulumi.Input<string>;
}
