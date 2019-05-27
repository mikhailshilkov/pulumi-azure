// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Managed Disk.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testVirtualNetwork = new azure.network.VirtualNetwork("test", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: "West US 2",
 *     name: "acctvn",
 *     resourceGroupName: "acctestRG",
 * });
 * const datasourcemd = pulumi.output(azure.compute.getManagedDisk({
 *     name: "testManagedDisk",
 *     resourceGroupName: "acctestRG",
 * }));
 * const testSubnet = new azure.network.Subnet("test", {
 *     addressPrefix: "10.0.2.0/24",
 *     name: "acctsub",
 *     resourceGroupName: "acctestRG",
 *     virtualNetworkName: testVirtualNetwork.name,
 * });
 * const testNetworkInterface = new azure.network.NetworkInterface("test", {
 *     ipConfigurations: [{
 *         name: "testconfiguration1",
 *         privateIpAddressAllocation: "Dynamic",
 *         subnetId: testSubnet.id,
 *     }],
 *     location: "West US 2",
 *     name: "acctni",
 *     resourceGroupName: "acctestRG",
 * });
 * const testVirtualMachine = new azure.compute.VirtualMachine("test", {
 *     location: "West US 2",
 *     name: "acctvm",
 *     networkInterfaceIds: [testNetworkInterface.id],
 *     osProfile: {
 *         adminPassword: "Password1234!",
 *         adminUsername: "testadmin",
 *         computerName: "hostname",
 *     },
 *     osProfileLinuxConfig: {
 *         disablePasswordAuthentication: false,
 *     },
 *     resourceGroupName: "acctestRG",
 *     storageDataDisks: [
 *         {
 *             createOption: "Empty",
 *             diskSizeGb: 1023,
 *             lun: 0,
 *             managedDiskType: "Standard_LRS",
 *             name: "datadisk_new",
 *         },
 *         {
 *             createOption: "Attach",
 *             diskSizeGb: datasourcemd.diskSizeGb,
 *             lun: 1,
 *             managedDiskId: datasourcemd.id,
 *             name: datasourcemd.name,
 *         },
 *     ],
 *     storageImageReference: {
 *         offer: "UbuntuServer",
 *         publisher: "Canonical",
 *         sku: "16.04-LTS",
 *         version: "latest",
 *     },
 *     storageOsDisk: {
 *         caching: "ReadWrite",
 *         createOption: "FromImage",
 *         managedDiskType: "Standard_LRS",
 *         name: "myosdisk1",
 *     },
 *     tags: {
 *         environment: "staging",
 *     },
 *     vmSize: "Standard_DS1_v2",
 * });
 * ```
 */
export function getManagedDisk(args: GetManagedDiskArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedDiskResult> {
    return pulumi.runtime.invoke("azure:compute/getManagedDisk:getManagedDisk", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "tags": args.tags,
        "zones": args.zones,
    }, opts);
}

/**
 * A collection of arguments for invoking getManagedDisk.
 */
export interface GetManagedDiskArgs {
    /**
     * Specifies the name of the Managed Disk.
     */
    readonly name: string;
    /**
     * Specifies the name of the resource group.
     */
    readonly resourceGroupName: string;
    readonly tags?: {[key: string]: any};
    readonly zones?: string[];
}

/**
 * A collection of values returned by getManagedDisk.
 */
export interface GetManagedDiskResult {
    readonly createOption: string;
    /**
     * The size of the managed disk in gigabytes.
     */
    readonly diskSizeGb: number;
    readonly name: string;
    /**
     * The operating system for managed disk. Valid values are `Linux` or `Windows`
     */
    readonly osType: string;
    readonly resourceGroupName: string;
    /**
     * ID of an existing managed disk that the current resource was created from.
     */
    readonly sourceResourceId: string;
    /**
     * The source URI for the managed disk
     */
    readonly sourceUri: string;
    /**
     * The storage account type for the managed disk.
     */
    readonly storageAccountType: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {[key: string]: any};
    /**
     * A collection containing the availability zone the managed disk is allocated in.
     */
    readonly zones: string[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
