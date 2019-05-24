// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a resource group on Azure.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "testResourceGroup1",
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * ```
 */
export class ResourceGroup extends pulumi.CustomResource {
    /**
     * Get an existing ResourceGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResourceGroupState, opts?: pulumi.CustomResourceOptions): ResourceGroup {
        return new ResourceGroup(name, <any>state, { ...opts, id: id });
    }

    /**
     * The location where the resource group should be created.
     * For a list of all Azure locations, please consult [this link](http://azure.microsoft.com/en-us/regions/) or run `az account list-locations --output table`.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource group. Must be unique on your
     * Azure subscription.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a ResourceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ResourceGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ResourceGroupArgs | ResourceGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ResourceGroupState | undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ResourceGroupArgs | undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["tags"] = args ? args.tags : undefined;
        }
        super("azure:core/resourceGroup:ResourceGroup", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ResourceGroup resources.
 */
export interface ResourceGroupState {
    /**
     * The location where the resource group should be created.
     * For a list of all Azure locations, please consult [this link](http://azure.microsoft.com/en-us/regions/) or run `az account list-locations --output table`.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group. Must be unique on your
     * Azure subscription.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a ResourceGroup resource.
 */
export interface ResourceGroupArgs {
    /**
     * The location where the resource group should be created.
     * For a list of all Azure locations, please consult [this link](http://azure.microsoft.com/en-us/regions/) or run `az account list-locations --output table`.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group. Must be unique on your
     * Azure subscription.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
