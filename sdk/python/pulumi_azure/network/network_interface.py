# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class NetworkInterface(pulumi.CustomResource):
    applied_dns_servers: pulumi.Output[list]
    """
    If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set
    """
    dns_servers: pulumi.Output[list]
    """
    List of DNS servers IP addresses to use for this NIC, overrides the VNet-level server list
    """
    enable_accelerated_networking: pulumi.Output[bool]
    """
    Enables Azure Accelerated Networking using SR-IOV. Only certain VM instance sizes are supported. Refer to [Create a Virtual Machine with Accelerated Networking](https://docs.microsoft.com/en-us/azure/virtual-network/create-vm-accelerated-networking-cli). Defaults to `false`.
    """
    enable_ip_forwarding: pulumi.Output[bool]
    """
    Enables IP Forwarding on the NIC. Defaults to `false`.
    """
    internal_dns_name_label: pulumi.Output[str]
    """
    Relative DNS name for this NIC used for internal communications between VMs in the same VNet
    """
    internal_fqdn: pulumi.Output[str]
    ip_configurations: pulumi.Output[list]
    """
    One or more `ip_configuration` associated with this NIC as documented below.
    """
    location: pulumi.Output[str]
    """
    The location/region where the network interface is created. Changing this forces a new resource to be created.
    """
    mac_address: pulumi.Output[str]
    """
    The media access control (MAC) address of the network interface.
    """
    name: pulumi.Output[str]
    """
    The name of the network interface. Changing this forces a new resource to be created.
    """
    network_security_group_id: pulumi.Output[str]
    """
    The ID of the Network Security Group to associate with the network interface.
    """
    private_ip_address: pulumi.Output[str]
    """
    The first private IP address of the network interface.
    """
    private_ip_addresses: pulumi.Output[list]
    """
    The private IP addresses of the network interface.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the network interface. Changing this forces a new resource to be created.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    virtual_machine_id: pulumi.Output[str]
    """
    Reference to a VM with which this NIC has been associated.
    """
    def __init__(__self__, resource_name, opts=None, applied_dns_servers=None, dns_servers=None, enable_accelerated_networking=None, enable_ip_forwarding=None, internal_dns_name_label=None, internal_fqdn=None, ip_configurations=None, location=None, mac_address=None, name=None, network_security_group_id=None, resource_group_name=None, tags=None, virtual_machine_id=None, __name__=None, __opts__=None):
        """
        Manages a Network Interface located in a Virtual Network, usually attached to a Virtual Machine.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] applied_dns_servers: If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set
        :param pulumi.Input[list] dns_servers: List of DNS servers IP addresses to use for this NIC, overrides the VNet-level server list
        :param pulumi.Input[bool] enable_accelerated_networking: Enables Azure Accelerated Networking using SR-IOV. Only certain VM instance sizes are supported. Refer to [Create a Virtual Machine with Accelerated Networking](https://docs.microsoft.com/en-us/azure/virtual-network/create-vm-accelerated-networking-cli). Defaults to `false`.
        :param pulumi.Input[bool] enable_ip_forwarding: Enables IP Forwarding on the NIC. Defaults to `false`.
        :param pulumi.Input[str] internal_dns_name_label: Relative DNS name for this NIC used for internal communications between VMs in the same VNet
        :param pulumi.Input[list] ip_configurations: One or more `ip_configuration` associated with this NIC as documented below.
        :param pulumi.Input[str] location: The location/region where the network interface is created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] mac_address: The media access control (MAC) address of the network interface.
        :param pulumi.Input[str] name: The name of the network interface. Changing this forces a new resource to be created.
        :param pulumi.Input[str] network_security_group_id: The ID of the Network Security Group to associate with the network interface.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the network interface. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] virtual_machine_id: Reference to a VM with which this NIC has been associated.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['applied_dns_servers'] = applied_dns_servers

        __props__['dns_servers'] = dns_servers

        __props__['enable_accelerated_networking'] = enable_accelerated_networking

        __props__['enable_ip_forwarding'] = enable_ip_forwarding

        __props__['internal_dns_name_label'] = internal_dns_name_label

        __props__['internal_fqdn'] = internal_fqdn

        if ip_configurations is None:
            raise TypeError("Missing required property 'ip_configurations'")
        __props__['ip_configurations'] = ip_configurations

        __props__['location'] = location

        __props__['mac_address'] = mac_address

        __props__['name'] = name

        __props__['network_security_group_id'] = network_security_group_id

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['tags'] = tags

        __props__['virtual_machine_id'] = virtual_machine_id

        __props__['private_ip_address'] = None
        __props__['private_ip_addresses'] = None

        super(NetworkInterface, __self__).__init__(
            'azure:network/networkInterface:NetworkInterface',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

