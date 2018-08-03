// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Use this data source to access the properties of a Snapshot of an Disk.
 */
export function getSnapshot(args: GetSnapshotArgs): Promise<GetSnapshotResult> {
    return pulumi.runtime.invoke("azure:compute/getSnapshot:getSnapshot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    });
}

/**
 * A collection of arguments for invoking getSnapshot.
 */
export interface GetSnapshotArgs {
    /**
     * Specifies the name of the Snapshot.
     */
    readonly name: string;
    /**
     * Specifies the name of the resource group the Snapshot is located in.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getSnapshot.
 */
export interface GetSnapshotResult {
    readonly creationOption: string;
    /**
     * The size of the Snapshotted Disk in GB.
     */
    readonly diskSizeGb: string;
    readonly encryptionSettings: { diskEncryptionKeys: { secretUrl: string, sourceVaultId: string }[], enabled: boolean, keyEncryptionKeys: { keyUrl: string, sourceVaultId: string }[] }[];
    readonly osType: string;
    /**
     * The reference to an existing snapshot.
     */
    readonly sourceResourceId: string;
    /**
     * The URI to a Managed or Unmanaged Disk.
     */
    readonly sourceUri: string;
    /**
     * The ID of an storage account.
     */
    readonly storageAccountId: string;
    readonly timeCreated: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
