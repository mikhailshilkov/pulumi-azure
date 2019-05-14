// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a certificate in an Azure Batch account.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "westeurope",
 *     name: "testbatch",
 * });
 * const testStorageAccount = new azure.storage.Account("test", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: testResourceGroup.location,
 *     name: "teststorage",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testAccount = new azure.batch.Account("test", {
 *     location: testResourceGroup.location,
 *     name: "testbatchaccount",
 *     poolAllocationMode: "BatchService",
 *     resourceGroupName: testResourceGroup.name,
 *     storageAccountId: testStorageAccount.id,
 *     tags: {
 *         env: "test",
 *     },
 * });
 * const testCertificate = new azure.batch.Certificate("test", {
 *     accountName: testAccount.name,
 *     certificate: (() => {
 *         throw "tf2pulumi error: NYI: call to filebase64";
 *         return (() => { throw "NYI: call to filebase64"; })();
 *     })(),
 *     format: "Pfx",
 *     password: "terraform",
 *     resourceGroupName: testResourceGroup.name,
 *     thumbprint: "42C107874FD0E4A9583292A2F1098E8FE4B2EDDA",
 *     thumbprintAlgorithm: "SHA1",
 * });
 * ```
 */
export class Certificate extends pulumi.CustomResource {
    /**
     * Get an existing Certificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateState, opts?: pulumi.CustomResourceOptions): Certificate {
        return new Certificate(name, <any>state, { ...opts, id: id });
    }

    /**
     * Specifies the name of the Batch account. Changing this forces a new resource to be created.
     */
    public readonly accountName!: pulumi.Output<string>;
    /**
     * The base64-encoded contents of the certificate.
     */
    public readonly certificate!: pulumi.Output<string>;
    /**
     * The format of the certificate. Possible values are `Cer` or `Pfx`.
     */
    public readonly format!: pulumi.Output<string>;
    /**
     * The generated name of the certificate.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The password to access the certificate's private key. This must and can only be specified when `format` is `Pfx`.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * The public key of the certificate.
     */
    public /*out*/ readonly publicData!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The thumbprint of the certificate. At this time the only supported value is 'SHA1'.
     */
    public readonly thumbprint!: pulumi.Output<string>;
    public readonly thumbprintAlgorithm!: pulumi.Output<string>;

    /**
     * Create a Certificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertificateArgs | CertificateState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as CertificateState | undefined;
            inputs["accountName"] = state ? state.accountName : undefined;
            inputs["certificate"] = state ? state.certificate : undefined;
            inputs["format"] = state ? state.format : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["password"] = state ? state.password : undefined;
            inputs["publicData"] = state ? state.publicData : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["thumbprint"] = state ? state.thumbprint : undefined;
            inputs["thumbprintAlgorithm"] = state ? state.thumbprintAlgorithm : undefined;
        } else {
            const args = argsOrState as CertificateArgs | undefined;
            if (!args || args.accountName === undefined) {
                throw new Error("Missing required property 'accountName'");
            }
            if (!args || args.certificate === undefined) {
                throw new Error("Missing required property 'certificate'");
            }
            if (!args || args.format === undefined) {
                throw new Error("Missing required property 'format'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.thumbprint === undefined) {
                throw new Error("Missing required property 'thumbprint'");
            }
            if (!args || args.thumbprintAlgorithm === undefined) {
                throw new Error("Missing required property 'thumbprintAlgorithm'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["certificate"] = args ? args.certificate : undefined;
            inputs["format"] = args ? args.format : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["thumbprint"] = args ? args.thumbprint : undefined;
            inputs["thumbprintAlgorithm"] = args ? args.thumbprintAlgorithm : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["publicData"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super("azure:batch/certificate:Certificate", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Certificate resources.
 */
export interface CertificateState {
    /**
     * Specifies the name of the Batch account. Changing this forces a new resource to be created.
     */
    readonly accountName?: pulumi.Input<string>;
    /**
     * The base64-encoded contents of the certificate.
     */
    readonly certificate?: pulumi.Input<string>;
    /**
     * The format of the certificate. Possible values are `Cer` or `Pfx`.
     */
    readonly format?: pulumi.Input<string>;
    /**
     * The generated name of the certificate.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The password to access the certificate's private key. This must and can only be specified when `format` is `Pfx`.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The public key of the certificate.
     */
    readonly publicData?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The thumbprint of the certificate. At this time the only supported value is 'SHA1'.
     */
    readonly thumbprint?: pulumi.Input<string>;
    readonly thumbprintAlgorithm?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * Specifies the name of the Batch account. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The base64-encoded contents of the certificate.
     */
    readonly certificate: pulumi.Input<string>;
    /**
     * The format of the certificate. Possible values are `Cer` or `Pfx`.
     */
    readonly format: pulumi.Input<string>;
    /**
     * The password to access the certificate's private key. This must and can only be specified when `format` is `Pfx`.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The thumbprint of the certificate. At this time the only supported value is 'SHA1'.
     */
    readonly thumbprint: pulumi.Input<string>;
    readonly thumbprintAlgorithm: pulumi.Input<string>;
}
