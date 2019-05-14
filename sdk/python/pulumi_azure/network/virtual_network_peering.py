# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class VirtualNetworkPeering(pulumi.CustomResource):
    allow_forwarded_traffic: pulumi.Output[bool]
    """
    Controls if forwarded traffic from  VMs
    in the remote virtual network is allowed. Defaults to false.
    """
    allow_gateway_transit: pulumi.Output[bool]
    """
    Controls gatewayLinks can be used in the
    remote virtual network’s link to the local virtual network.
    """
    allow_virtual_network_access: pulumi.Output[bool]
    """
    Controls if the VMs in the remote
    virtual network can access VMs in the local virtual network. Defaults to
    false.
    """
    name: pulumi.Output[str]
    """
    The name of the virtual network peering. Changing this
    forces a new resource to be created.
    """
    remote_virtual_network_id: pulumi.Output[str]
    """
    The full Azure resource ID of the
    remote virtual network.  Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to
    create the virtual network. Changing this forces a new resource to be
    created.
    """
    use_remote_gateways: pulumi.Output[bool]
    """
    Controls if remote gateways can be used on
    the local virtual network. If the flag is set to `true`, and
    `allow_gateway_transit` on the remote peering is also `true`, virtual network will
    use gateways of remote virtual network for transit. Only one peering can
    have this flag set to `true`. This flag cannot be set if virtual network
    already has a gateway. Defaults to `false`.
    """
    virtual_network_name: pulumi.Output[str]
    """
    The name of the virtual network. Changing
    this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, allow_forwarded_traffic=None, allow_gateway_transit=None, allow_virtual_network_access=None, name=None, remote_virtual_network_id=None, resource_group_name=None, use_remote_gateways=None, virtual_network_name=None, __name__=None, __opts__=None):
        """
        Manages a virtual network peering which allows resources to access other
        resources in the linked virtual network.
        
        ## Note
        
        Virtual Network peerings cannot be created, updated or deleted concurrently.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] allow_forwarded_traffic: Controls if forwarded traffic from  VMs
               in the remote virtual network is allowed. Defaults to false.
        :param pulumi.Input[bool] allow_gateway_transit: Controls gatewayLinks can be used in the
               remote virtual network’s link to the local virtual network.
        :param pulumi.Input[bool] allow_virtual_network_access: Controls if the VMs in the remote
               virtual network can access VMs in the local virtual network. Defaults to
               false.
        :param pulumi.Input[str] name: The name of the virtual network peering. Changing this
               forces a new resource to be created.
        :param pulumi.Input[str] remote_virtual_network_id: The full Azure resource ID of the
               remote virtual network.  Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to
               create the virtual network. Changing this forces a new resource to be
               created.
        :param pulumi.Input[bool] use_remote_gateways: Controls if remote gateways can be used on
               the local virtual network. If the flag is set to `true`, and
               `allow_gateway_transit` on the remote peering is also `true`, virtual network will
               use gateways of remote virtual network for transit. Only one peering can
               have this flag set to `true`. This flag cannot be set if virtual network
               already has a gateway. Defaults to `false`.
        :param pulumi.Input[str] virtual_network_name: The name of the virtual network. Changing
               this forces a new resource to be created.
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

        __props__['allow_forwarded_traffic'] = allow_forwarded_traffic

        __props__['allow_gateway_transit'] = allow_gateway_transit

        __props__['allow_virtual_network_access'] = allow_virtual_network_access

        __props__['name'] = name

        if remote_virtual_network_id is None:
            raise TypeError("Missing required property 'remote_virtual_network_id'")
        __props__['remote_virtual_network_id'] = remote_virtual_network_id

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['use_remote_gateways'] = use_remote_gateways

        if virtual_network_name is None:
            raise TypeError("Missing required property 'virtual_network_name'")
        __props__['virtual_network_name'] = virtual_network_name

        if opts is None:
            opts = pulumi.ResourceOptions()
        if opts.version is None:
            opts.version = utilities.get_version()
        super(VirtualNetworkPeering, __self__).__init__(
            'azure:network/virtualNetworkPeering:VirtualNetworkPeering',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

