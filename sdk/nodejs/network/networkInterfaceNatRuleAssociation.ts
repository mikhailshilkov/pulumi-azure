// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages the association between a Network Interface and a Load Balancer's NAT Rule.
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
 * const testPublicIp = new azure.network.PublicIp("test", {
 *     allocationMethod: "Static",
 *     location: testResourceGroup.location,
 *     name: "example-pip",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testLoadBalancer = new azure.lb.LoadBalancer("test", {
 *     frontendIpConfigurations: [{
 *         name: "primary",
 *         publicIpAddressId: testPublicIp.id,
 *     }],
 *     location: testResourceGroup.location,
 *     name: "example-lb",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testNatRule = new azure.lb.NatRule("test", {
 *     backendPort: 3389,
 *     frontendIpConfigurationName: "primary",
 *     frontendPort: 3389,
 *     loadbalancerId: testLoadBalancer.id,
 *     name: "RDPAccess",
 *     protocol: "Tcp",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testVirtualNetwork = new azure.network.VirtualNetwork("test", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: testResourceGroup.location,
 *     name: "example-network",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testSubnet = new azure.network.Subnet("test", {
 *     addressPrefix: "10.0.2.0/24",
 *     name: "internal",
 *     resourceGroupName: testResourceGroup.name,
 *     virtualNetworkName: testVirtualNetwork.name,
 * });
 * const testNetworkInterface = new azure.network.NetworkInterface("test", {
 *     ipConfigurations: [{
 *         name: "testconfiguration1",
 *         privateIpAddressAllocation: "Dynamic",
 *         subnetId: testSubnet.id,
 *     }],
 *     location: testResourceGroup.location,
 *     name: "example-nic",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testNetworkInterfaceNatRuleAssociation = new azure.network.NetworkInterfaceNatRuleAssociation("test", {
 *     ipConfigurationName: "testconfiguration1",
 *     natRuleId: testNatRule.id,
 *     networkInterfaceId: testNetworkInterface.id,
 * });
 * ```
 */
export class NetworkInterfaceNatRuleAssociation extends pulumi.CustomResource {
    /**
     * Get an existing NetworkInterfaceNatRuleAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkInterfaceNatRuleAssociationState, opts?: pulumi.CustomResourceOptions): NetworkInterfaceNatRuleAssociation {
        return new NetworkInterfaceNatRuleAssociation(name, <any>state, { ...opts, id: id });
    }

    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the NAT Rule. Changing this forces a new resource to be created.
     */
    public readonly ipConfigurationName!: pulumi.Output<string>;
    /**
     * The ID of the Load Balancer NAT Rule which this Network Interface which should be connected to. Changing this forces a new resource to be created.
     */
    public readonly natRuleId!: pulumi.Output<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    public readonly networkInterfaceId!: pulumi.Output<string>;

    /**
     * Create a NetworkInterfaceNatRuleAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceNatRuleAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkInterfaceNatRuleAssociationArgs | NetworkInterfaceNatRuleAssociationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as NetworkInterfaceNatRuleAssociationState | undefined;
            inputs["ipConfigurationName"] = state ? state.ipConfigurationName : undefined;
            inputs["natRuleId"] = state ? state.natRuleId : undefined;
            inputs["networkInterfaceId"] = state ? state.networkInterfaceId : undefined;
        } else {
            const args = argsOrState as NetworkInterfaceNatRuleAssociationArgs | undefined;
            if (!args || args.ipConfigurationName === undefined) {
                throw new Error("Missing required property 'ipConfigurationName'");
            }
            if (!args || args.natRuleId === undefined) {
                throw new Error("Missing required property 'natRuleId'");
            }
            if (!args || args.networkInterfaceId === undefined) {
                throw new Error("Missing required property 'networkInterfaceId'");
            }
            inputs["ipConfigurationName"] = args ? args.ipConfigurationName : undefined;
            inputs["natRuleId"] = args ? args.natRuleId : undefined;
            inputs["networkInterfaceId"] = args ? args.networkInterfaceId : undefined;
        }
        super("azure:network/networkInterfaceNatRuleAssociation:NetworkInterfaceNatRuleAssociation", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NetworkInterfaceNatRuleAssociation resources.
 */
export interface NetworkInterfaceNatRuleAssociationState {
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the NAT Rule. Changing this forces a new resource to be created.
     */
    readonly ipConfigurationName?: pulumi.Input<string>;
    /**
     * The ID of the Load Balancer NAT Rule which this Network Interface which should be connected to. Changing this forces a new resource to be created.
     */
    readonly natRuleId?: pulumi.Input<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    readonly networkInterfaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkInterfaceNatRuleAssociation resource.
 */
export interface NetworkInterfaceNatRuleAssociationArgs {
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the NAT Rule. Changing this forces a new resource to be created.
     */
    readonly ipConfigurationName: pulumi.Input<string>;
    /**
     * The ID of the Load Balancer NAT Rule which this Network Interface which should be connected to. Changing this forces a new resource to be created.
     */
    readonly natRuleId: pulumi.Input<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    readonly networkInterfaceId: pulumi.Input<string>;
}
