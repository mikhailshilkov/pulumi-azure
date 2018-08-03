// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Use this data source to access the properties of an Azure Virtual Network.
 */
export function getVirtualNetwork(args: GetVirtualNetworkArgs): Promise<GetVirtualNetworkResult> {
    return pulumi.runtime.invoke("azure:network/getVirtualNetwork:getVirtualNetwork", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    });
}

/**
 * A collection of arguments for invoking getVirtualNetwork.
 */
export interface GetVirtualNetworkArgs {
    /**
     * Specifies the name of the Virtual Network.
     */
    readonly name: string;
    /**
     * Specifies the name of the resource group the Virtual Network is located in.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getVirtualNetwork.
 */
export interface GetVirtualNetworkResult {
    /**
     * The list of address spaces used by the virtual network.
     */
    readonly addressSpaces: string[];
    /**
     * The list of DNS servers used by the virtual network.
     */
    readonly dnsServers: string[];
    /**
     * The list of name of the subnets that are attached to this virtual network.
     */
    readonly subnets: string[];
    /**
     * A mapping of name - virtual network id of the virtual network peerings.
     */
    readonly vnetPeerings: {[key: string]: any};
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
