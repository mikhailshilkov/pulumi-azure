// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages the association between a Network Interface and a Application Security Group.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "example-resources",
 * });
 * const testApplicationSecurityGroup = new azure.network.ApplicationSecurityGroup("test", {
 *     location: testResourceGroup.location,
 *     name: "example-asg",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testVirtualNetwork = new azure.network.VirtualNetwork("test", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: testResourceGroup.location,
 *     name: "example-network",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testSubnet = new azure.network.Subnet("test", {
 *     addressPrefix: "10.0.1.0/24",
 *     name: "internal",
 *     resourceGroupName: testResourceGroup.name,
 *     virtualNetworkName: testVirtualNetwork.name,
 * });
 * const testNetworkInterface = new azure.network.NetworkInterface("test", {
 *     ipConfigurations: [{
 *         applicationSecurityGroupIds: [testApplicationSecurityGroup.id],
 *         name: "testconfiguration1",
 *         privateIpAddressAllocation: "Dynamic",
 *         subnetId: testSubnet.id,
 *     }],
 *     location: testResourceGroup.location,
 *     name: "example-nic",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testNetworkInterfaceApplicationSecurityGroupAssociation = new azure.network.NetworkInterfaceApplicationSecurityGroupAssociation("test", {
 *     applicationSecurityGroupId: testApplicationSecurityGroup.id,
 *     ipConfigurationName: "testconfiguration1",
 *     networkInterfaceId: testNetworkInterface.id,
 * });
 * ```
 */
export class NetworkInterfaceApplicationSecurityGroupAssociation extends pulumi.CustomResource {
    /**
     * Get an existing NetworkInterfaceApplicationSecurityGroupAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkInterfaceApplicationSecurityGroupAssociationState, opts?: pulumi.CustomResourceOptions): NetworkInterfaceApplicationSecurityGroupAssociation {
        return new NetworkInterfaceApplicationSecurityGroupAssociation(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ID of the Application Security Group which this Network Interface which should be connected to. Changing this forces a new resource to be created.
     */
    public readonly applicationSecurityGroupId!: pulumi.Output<string>;
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the Application Security Group. Changing this forces a new resource to be created.
     */
    public readonly ipConfigurationName!: pulumi.Output<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    public readonly networkInterfaceId!: pulumi.Output<string>;

    /**
     * Create a NetworkInterfaceApplicationSecurityGroupAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceApplicationSecurityGroupAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkInterfaceApplicationSecurityGroupAssociationArgs | NetworkInterfaceApplicationSecurityGroupAssociationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as NetworkInterfaceApplicationSecurityGroupAssociationState | undefined;
            inputs["applicationSecurityGroupId"] = state ? state.applicationSecurityGroupId : undefined;
            inputs["ipConfigurationName"] = state ? state.ipConfigurationName : undefined;
            inputs["networkInterfaceId"] = state ? state.networkInterfaceId : undefined;
        } else {
            const args = argsOrState as NetworkInterfaceApplicationSecurityGroupAssociationArgs | undefined;
            if (!args || args.applicationSecurityGroupId === undefined) {
                throw new Error("Missing required property 'applicationSecurityGroupId'");
            }
            if (!args || args.ipConfigurationName === undefined) {
                throw new Error("Missing required property 'ipConfigurationName'");
            }
            if (!args || args.networkInterfaceId === undefined) {
                throw new Error("Missing required property 'networkInterfaceId'");
            }
            inputs["applicationSecurityGroupId"] = args ? args.applicationSecurityGroupId : undefined;
            inputs["ipConfigurationName"] = args ? args.ipConfigurationName : undefined;
            inputs["networkInterfaceId"] = args ? args.networkInterfaceId : undefined;
        }
        super("azure:network/networkInterfaceApplicationSecurityGroupAssociation:NetworkInterfaceApplicationSecurityGroupAssociation", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NetworkInterfaceApplicationSecurityGroupAssociation resources.
 */
export interface NetworkInterfaceApplicationSecurityGroupAssociationState {
    /**
     * The ID of the Application Security Group which this Network Interface which should be connected to. Changing this forces a new resource to be created.
     */
    readonly applicationSecurityGroupId?: pulumi.Input<string>;
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the Application Security Group. Changing this forces a new resource to be created.
     */
    readonly ipConfigurationName?: pulumi.Input<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    readonly networkInterfaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkInterfaceApplicationSecurityGroupAssociation resource.
 */
export interface NetworkInterfaceApplicationSecurityGroupAssociationArgs {
    /**
     * The ID of the Application Security Group which this Network Interface which should be connected to. Changing this forces a new resource to be created.
     */
    readonly applicationSecurityGroupId: pulumi.Input<string>;
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the Application Security Group. Changing this forces a new resource to be created.
     */
    readonly ipConfigurationName: pulumi.Input<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    readonly networkInterfaceId: pulumi.Input<string>;
}
