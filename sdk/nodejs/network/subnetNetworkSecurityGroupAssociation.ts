// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Associates a Network Security Group with a Subnet within a Virtual Network.
 * 
 * -> **NOTE:** Subnet `<->` Network Security Group associations currently need to be configured on both this resource and using the `network_security_group_id` field on the `azurerm_subnet` resource. The next major version of the AzureRM Provider (2.0) will remove the `network_security_group_id` field from the `azurerm_subnet` resource such that this resource is used to link resources in future.
 */
export class SubnetNetworkSecurityGroupAssociation extends pulumi.CustomResource {
    /**
     * Get an existing SubnetNetworkSecurityGroupAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubnetNetworkSecurityGroupAssociationState): SubnetNetworkSecurityGroupAssociation {
        return new SubnetNetworkSecurityGroupAssociation(name, <any>state, { id });
    }

    /**
     * The ID of the Network Security Group which should be associated with the Subnet. Changing this forces a new resource to be created.
     */
    public readonly networkSecurityGroupId: pulumi.Output<string>;
    /**
     * The ID of the Subnet. Changing this forces a new resource to be created.
     */
    public readonly subnetId: pulumi.Output<string>;

    /**
     * Create a SubnetNetworkSecurityGroupAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubnetNetworkSecurityGroupAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SubnetNetworkSecurityGroupAssociationArgs | SubnetNetworkSecurityGroupAssociationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SubnetNetworkSecurityGroupAssociationState = argsOrState as SubnetNetworkSecurityGroupAssociationState | undefined;
            inputs["networkSecurityGroupId"] = state ? state.networkSecurityGroupId : undefined;
            inputs["subnetId"] = state ? state.subnetId : undefined;
        } else {
            const args = argsOrState as SubnetNetworkSecurityGroupAssociationArgs | undefined;
            if (!args || args.networkSecurityGroupId === undefined) {
                throw new Error("Missing required property 'networkSecurityGroupId'");
            }
            if (!args || args.subnetId === undefined) {
                throw new Error("Missing required property 'subnetId'");
            }
            inputs["networkSecurityGroupId"] = args ? args.networkSecurityGroupId : undefined;
            inputs["subnetId"] = args ? args.subnetId : undefined;
        }
        super("azure:network/subnetNetworkSecurityGroupAssociation:SubnetNetworkSecurityGroupAssociation", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SubnetNetworkSecurityGroupAssociation resources.
 */
export interface SubnetNetworkSecurityGroupAssociationState {
    /**
     * The ID of the Network Security Group which should be associated with the Subnet. Changing this forces a new resource to be created.
     */
    readonly networkSecurityGroupId?: pulumi.Input<string>;
    /**
     * The ID of the Subnet. Changing this forces a new resource to be created.
     */
    readonly subnetId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SubnetNetworkSecurityGroupAssociation resource.
 */
export interface SubnetNetworkSecurityGroupAssociationArgs {
    /**
     * The ID of the Network Security Group which should be associated with the Subnet. Changing this forces a new resource to be created.
     */
    readonly networkSecurityGroupId: pulumi.Input<string>;
    /**
     * The ID of the Subnet. Changing this forces a new resource to be created.
     */
    readonly subnetId: pulumi.Input<string>;
}