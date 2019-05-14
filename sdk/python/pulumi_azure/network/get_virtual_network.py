# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetVirtualNetworkResult:
    """
    A collection of values returned by getVirtualNetwork.
    """
    def __init__(__self__, address_spaces=None, dns_servers=None, name=None, resource_group_name=None, subnets=None, vnet_peerings=None, id=None):
        if address_spaces and not isinstance(address_spaces, list):
            raise TypeError("Expected argument 'address_spaces' to be a list")
        __self__.address_spaces = address_spaces
        """
        The list of address spaces used by the virtual network.
        """
        if dns_servers and not isinstance(dns_servers, list):
            raise TypeError("Expected argument 'dns_servers' to be a list")
        __self__.dns_servers = dns_servers
        """
        The list of DNS servers used by the virtual network.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if subnets and not isinstance(subnets, list):
            raise TypeError("Expected argument 'subnets' to be a list")
        __self__.subnets = subnets
        """
        The list of name of the subnets that are attached to this virtual network.
        """
        if vnet_peerings and not isinstance(vnet_peerings, dict):
            raise TypeError("Expected argument 'vnet_peerings' to be a dict")
        __self__.vnet_peerings = vnet_peerings
        """
        A mapping of name - virtual network id of the virtual network peerings.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_virtual_network(name=None,resource_group_name=None,opts=None):
    """
    Use this data source to access information about an existing Virtual Network.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.ResourceOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = await pulumi.runtime.invoke('azure:network/getVirtualNetwork:getVirtualNetwork', __args__, opts=opts)

    return GetVirtualNetworkResult(
        address_spaces=__ret__.get('addressSpaces'),
        dns_servers=__ret__.get('dnsServers'),
        name=__ret__.get('name'),
        resource_group_name=__ret__.get('resourceGroupName'),
        subnets=__ret__.get('subnets'),
        vnet_peerings=__ret__.get('vnetPeerings'),
        id=__ret__.get('id'))
