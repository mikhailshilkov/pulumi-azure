// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Disk Snapshot.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "snapshot-rg",
 * });
 * const testManagedDisk = new azure.compute.ManagedDisk("test", {
 *     createOption: "Empty",
 *     diskSizeGb: 10,
 *     location: testResourceGroup.location,
 *     name: "managed-disk",
 *     resourceGroupName: testResourceGroup.name,
 *     storageAccountType: "Standard_LRS",
 * });
 * const testSnapshot = new azure.compute.Snapshot("test", {
 *     createOption: "Copy",
 *     location: testResourceGroup.location,
 *     name: "snapshot",
 *     resourceGroupName: testResourceGroup.name,
 *     sourceUri: testManagedDisk.id,
 * });
 * ```
 */
export class Snapshot extends pulumi.CustomResource {
    /**
     * Get an existing Snapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnapshotState, opts?: pulumi.CustomResourceOptions): Snapshot {
        return new Snapshot(name, <any>state, { ...opts, id: id });
    }

    /**
     * Indicates how the snapshot is to be created. Possible values are `Copy` or `Import`. Changing this forces a new resource to be created.
     */
    public readonly createOption!: pulumi.Output<string>;
    /**
     * The size of the Snapshotted Disk in GB.
     */
    public readonly diskSizeGb!: pulumi.Output<number>;
    public readonly encryptionSettings!: pulumi.Output<{ diskEncryptionKey?: { secretUrl: string, sourceVaultId: string }, enabled: boolean, keyEncryptionKey?: { keyUrl: string, sourceVaultId: string } } | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name of the Snapshot resource. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Snapshot. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Specifies a reference to an existing snapshot, when `create_option` is `Copy`. Changing this forces a new resource to be created.
     */
    public readonly sourceResourceId!: pulumi.Output<string | undefined>;
    /**
     * Specifies the URI to a Managed or Unmanaged Disk. Changing this forces a new resource to be created.
     */
    public readonly sourceUri!: pulumi.Output<string | undefined>;
    /**
     * Specifies the ID of an storage account. Used with `source_uri` to allow authorization during import of unmanaged blobs from a different subscription. Changing this forces a new resource to be created.
     */
    public readonly storageAccountId!: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a Snapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnapshotArgs | SnapshotState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SnapshotState | undefined;
            inputs["createOption"] = state ? state.createOption : undefined;
            inputs["diskSizeGb"] = state ? state.diskSizeGb : undefined;
            inputs["encryptionSettings"] = state ? state.encryptionSettings : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sourceResourceId"] = state ? state.sourceResourceId : undefined;
            inputs["sourceUri"] = state ? state.sourceUri : undefined;
            inputs["storageAccountId"] = state ? state.storageAccountId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as SnapshotArgs | undefined;
            if (!args || args.createOption === undefined) {
                throw new Error("Missing required property 'createOption'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["createOption"] = args ? args.createOption : undefined;
            inputs["diskSizeGb"] = args ? args.diskSizeGb : undefined;
            inputs["encryptionSettings"] = args ? args.encryptionSettings : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sourceResourceId"] = args ? args.sourceResourceId : undefined;
            inputs["sourceUri"] = args ? args.sourceUri : undefined;
            inputs["storageAccountId"] = args ? args.storageAccountId : undefined;
            inputs["tags"] = args ? args.tags : undefined;
        }
        super("azure:compute/snapshot:Snapshot", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Snapshot resources.
 */
export interface SnapshotState {
    /**
     * Indicates how the snapshot is to be created. Possible values are `Copy` or `Import`. Changing this forces a new resource to be created.
     */
    readonly createOption?: pulumi.Input<string>;
    /**
     * The size of the Snapshotted Disk in GB.
     */
    readonly diskSizeGb?: pulumi.Input<number>;
    readonly encryptionSettings?: pulumi.Input<{ diskEncryptionKey?: pulumi.Input<{ secretUrl: pulumi.Input<string>, sourceVaultId: pulumi.Input<string> }>, enabled: pulumi.Input<boolean>, keyEncryptionKey?: pulumi.Input<{ keyUrl: pulumi.Input<string>, sourceVaultId: pulumi.Input<string> }> }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Snapshot resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Snapshot. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies a reference to an existing snapshot, when `create_option` is `Copy`. Changing this forces a new resource to be created.
     */
    readonly sourceResourceId?: pulumi.Input<string>;
    /**
     * Specifies the URI to a Managed or Unmanaged Disk. Changing this forces a new resource to be created.
     */
    readonly sourceUri?: pulumi.Input<string>;
    /**
     * Specifies the ID of an storage account. Used with `source_uri` to allow authorization during import of unmanaged blobs from a different subscription. Changing this forces a new resource to be created.
     */
    readonly storageAccountId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a Snapshot resource.
 */
export interface SnapshotArgs {
    /**
     * Indicates how the snapshot is to be created. Possible values are `Copy` or `Import`. Changing this forces a new resource to be created.
     */
    readonly createOption: pulumi.Input<string>;
    /**
     * The size of the Snapshotted Disk in GB.
     */
    readonly diskSizeGb?: pulumi.Input<number>;
    readonly encryptionSettings?: pulumi.Input<{ diskEncryptionKey?: pulumi.Input<{ secretUrl: pulumi.Input<string>, sourceVaultId: pulumi.Input<string> }>, enabled: pulumi.Input<boolean>, keyEncryptionKey?: pulumi.Input<{ keyUrl: pulumi.Input<string>, sourceVaultId: pulumi.Input<string> }> }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Snapshot resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Snapshot. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies a reference to an existing snapshot, when `create_option` is `Copy`. Changing this forces a new resource to be created.
     */
    readonly sourceResourceId?: pulumi.Input<string>;
    /**
     * Specifies the URI to a Managed or Unmanaged Disk. Changing this forces a new resource to be created.
     */
    readonly sourceUri?: pulumi.Input<string>;
    /**
     * Specifies the ID of an storage account. Used with `source_uri` to allow authorization during import of unmanaged blobs from a different subscription. Changing this forces a new resource to be created.
     */
    readonly storageAccountId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
