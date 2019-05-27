// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Enables you to manage DNS zones within Azure DNS. These zones are hosted on Azure's name servers to which you can delegate the zone from the parent domain.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "acceptanceTestResourceGroup1",
 * });
 * const testZone = new azure.dns.Zone("test", {
 *     name: "mydomain.com",
 *     resourceGroupName: testResourceGroup.name,
 *     zoneType: "Public",
 * });
 * const testPrivate = new azure.dns.Zone("test_private", {
 *     name: "mydomain.com",
 *     resourceGroupName: testResourceGroup.name,
 *     zoneType: "Private",
 * });
 * ```
 */
export class Zone extends pulumi.CustomResource {
    /**
     * Get an existing Zone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZoneState, opts?: pulumi.CustomResourceOptions): Zone {
        return new Zone(name, <any>state, { ...opts, id: id });
    }

    /**
     * (Optional) Maximum number of Records in the zone. Defaults to `1000`.
     */
    public /*out*/ readonly maxNumberOfRecordSets!: pulumi.Output<number>;
    /**
     * The name of the DNS Zone. Must be a valid domain name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * (Optional) A list of values that make up the NS record for the zone.
     */
    public /*out*/ readonly nameServers!: pulumi.Output<string[]>;
    /**
     * (Optional) The number of records already in the zone.
     */
    public /*out*/ readonly numberOfRecordSets!: pulumi.Output<number>;
    /**
     * A list of Virtual Network ID's that register hostnames in this DNS zone. This field can only be set when `zone_type` is set to `Private`.
     */
    public readonly registrationVirtualNetworkIds!: pulumi.Output<string[] | undefined>;
    /**
     * A list of Virtual Network ID's that resolve records in this DNS zone. This field can only be set when `zone_type` is set to `Private`.
     */
    public readonly resolutionVirtualNetworkIds!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;
    /**
     * Specifies the type of this DNS zone. Possible values are `Public` or `Private` (Defaults to `Public`).
     */
    public readonly zoneType!: pulumi.Output<string | undefined>;

    /**
     * Create a Zone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZoneArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZoneArgs | ZoneState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ZoneState | undefined;
            inputs["maxNumberOfRecordSets"] = state ? state.maxNumberOfRecordSets : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["nameServers"] = state ? state.nameServers : undefined;
            inputs["numberOfRecordSets"] = state ? state.numberOfRecordSets : undefined;
            inputs["registrationVirtualNetworkIds"] = state ? state.registrationVirtualNetworkIds : undefined;
            inputs["resolutionVirtualNetworkIds"] = state ? state.resolutionVirtualNetworkIds : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["zoneType"] = state ? state.zoneType : undefined;
        } else {
            const args = argsOrState as ZoneArgs | undefined;
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["registrationVirtualNetworkIds"] = args ? args.registrationVirtualNetworkIds : undefined;
            inputs["resolutionVirtualNetworkIds"] = args ? args.resolutionVirtualNetworkIds : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["zoneType"] = args ? args.zoneType : undefined;
            inputs["maxNumberOfRecordSets"] = undefined /*out*/;
            inputs["nameServers"] = undefined /*out*/;
            inputs["numberOfRecordSets"] = undefined /*out*/;
        }
        super("azure:dns/zone:Zone", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Zone resources.
 */
export interface ZoneState {
    /**
     * (Optional) Maximum number of Records in the zone. Defaults to `1000`.
     */
    readonly maxNumberOfRecordSets?: pulumi.Input<number>;
    /**
     * The name of the DNS Zone. Must be a valid domain name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * (Optional) A list of values that make up the NS record for the zone.
     */
    readonly nameServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (Optional) The number of records already in the zone.
     */
    readonly numberOfRecordSets?: pulumi.Input<number>;
    /**
     * A list of Virtual Network ID's that register hostnames in this DNS zone. This field can only be set when `zone_type` is set to `Private`.
     */
    readonly registrationVirtualNetworkIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of Virtual Network ID's that resolve records in this DNS zone. This field can only be set when `zone_type` is set to `Private`.
     */
    readonly resolutionVirtualNetworkIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the type of this DNS zone. Possible values are `Public` or `Private` (Defaults to `Public`).
     */
    readonly zoneType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Zone resource.
 */
export interface ZoneArgs {
    /**
     * The name of the DNS Zone. Must be a valid domain name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of Virtual Network ID's that register hostnames in this DNS zone. This field can only be set when `zone_type` is set to `Private`.
     */
    readonly registrationVirtualNetworkIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of Virtual Network ID's that resolve records in this DNS zone. This field can only be set when `zone_type` is set to `Private`.
     */
    readonly resolutionVirtualNetworkIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Specifies the type of this DNS zone. Possible values are `Public` or `Private` (Defaults to `Public`).
     */
    readonly zoneType?: pulumi.Input<string>;
}
