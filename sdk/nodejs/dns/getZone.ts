// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing DNS Zone.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = pulumi.output(azure.dns.getZone({
 *     name: "search-eventhubns",
 *     resourceGroupName: "search-service",
 * }));
 * 
 * export const dnsZoneId = test.apply(test => test.id);
 * ```
 */
export function getZone(args: GetZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetZoneResult> {
    return pulumi.runtime.invoke("azure:dns/getZone:getZone", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

/**
 * A collection of arguments for invoking getZone.
 */
export interface GetZoneArgs {
    /**
     * The name of the DNS Zone.
     */
    readonly name: string;
    /**
     * The Name of the Resource Group where the DNS Zone exists.
     * If the Name of the Resource Group is not provided, the first DNS Zone from the list of DNS Zones
     * in your subscription that matches `name` will be returned.
     */
    readonly resourceGroupName?: string;
}

/**
 * A collection of values returned by getZone.
 */
export interface GetZoneResult {
    /**
     * Maximum number of Records in the zone.
     */
    readonly maxNumberOfRecordSets: number;
    readonly name: string;
    /**
     * A list of values that make up the NS record for the zone.
     */
    readonly nameServers: string[];
    /**
     * The number of records already in the zone.
     */
    readonly numberOfRecordSets: number;
    /**
     * A list of Virtual Network ID's that register hostnames in this DNS zone.
     */
    readonly registrationVirtualNetworkIds: string[];
    /**
     * A list of Virtual Network ID's that resolve records in this DNS zone.
     */
    readonly resolutionVirtualNetworkIds: string[];
    readonly resourceGroupName: string;
    /**
     * A mapping of tags to assign to the EventHub Namespace.
     */
    readonly tags: {[key: string]: any};
    /**
     * The type of this DNS zone, such as `Public` or `Private`.
     */
    readonly zoneType: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
