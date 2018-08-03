// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Use this data source to access the properties of an Azure Subnet located within a Virtual Network.
 */
export function getSubnet(args: GetSubnetArgs): Promise<GetSubnetResult> {
    return pulumi.runtime.invoke("azure:network/getSubnet:getSubnet", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkName": args.virtualNetworkName,
    });
}

/**
 * A collection of arguments for invoking getSubnet.
 */
export interface GetSubnetArgs {
    /**
     * Specifies the name of the Subnet.
     */
    readonly name: string;
    /**
     * Specifies the name of the resource group the Virtual Network is located in.
     */
    readonly resourceGroupName: string;
    /**
     * Specifies the name of the Virtual Network this Subnet is located within.
     */
    readonly virtualNetworkName: string;
}

/**
 * A collection of values returned by getSubnet.
 */
export interface GetSubnetResult {
    /**
     * The address prefix used for the subnet.
     */
    readonly addressPrefix: string;
    /**
     * The collection of IP Configurations with IPs within this subnet.
     */
    readonly ipConfigurations: string[];
    /**
     * The ID of the Network Security Group associated with the subnet.
     */
    readonly networkSecurityGroupId: string;
    /**
     * The ID of the Route Table associated with this subnet.
     */
    readonly routeTableId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
