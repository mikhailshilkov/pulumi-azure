# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class OutboundRule(pulumi.CustomResource):
    allocated_outbound_ports: pulumi.Output[float]
    """
    The number of outbound ports to be used for NAT.
    """
    backend_address_pool_id: pulumi.Output[str]
    """
    The ID of the Backend Address Pool. Outbound traffic is randomly load balanced across IPs in the backend IPs.
    """
    enable_tcp_reset: pulumi.Output[bool]
    """
    Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
    """
    frontend_ip_configurations: pulumi.Output[list]
    """
    One or more `frontend_ip_configuration` blocks as defined below.
    """
    idle_timeout_in_minutes: pulumi.Output[float]
    """
    The timeout for the TCP idle connection
    """
    loadbalancer_id: pulumi.Output[str]
    """
    The ID of the Load Balancer in which to create the Outbound Rule. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Outbound Rule. Changing this forces a new resource to be created.
    """
    protocol: pulumi.Output[str]
    """
    The transport protocol for the external endpoint. Possible values are `Udp`, `Tcp` or `All`.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, allocated_outbound_ports=None, backend_address_pool_id=None, enable_tcp_reset=None, frontend_ip_configurations=None, idle_timeout_in_minutes=None, loadbalancer_id=None, name=None, protocol=None, resource_group_name=None, __name__=None, __opts__=None):
        """
        Manages a Load Balancer Outbound Rule.
        
        > **NOTE** When using this resource, the Load Balancer needs to have a FrontEnd IP Configuration and a Backend Address Pool Attached.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[float] allocated_outbound_ports: The number of outbound ports to be used for NAT.
        :param pulumi.Input[str] backend_address_pool_id: The ID of the Backend Address Pool. Outbound traffic is randomly load balanced across IPs in the backend IPs.
        :param pulumi.Input[bool] enable_tcp_reset: Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
        :param pulumi.Input[list] frontend_ip_configurations: One or more `frontend_ip_configuration` blocks as defined below.
        :param pulumi.Input[float] idle_timeout_in_minutes: The timeout for the TCP idle connection
        :param pulumi.Input[str] loadbalancer_id: The ID of the Load Balancer in which to create the Outbound Rule. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Outbound Rule. Changing this forces a new resource to be created.
        :param pulumi.Input[str] protocol: The transport protocol for the external endpoint. Possible values are `Udp`, `Tcp` or `All`.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
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

        __props__['allocated_outbound_ports'] = allocated_outbound_ports

        if backend_address_pool_id is None:
            raise TypeError("Missing required property 'backend_address_pool_id'")
        __props__['backend_address_pool_id'] = backend_address_pool_id

        __props__['enable_tcp_reset'] = enable_tcp_reset

        __props__['frontend_ip_configurations'] = frontend_ip_configurations

        __props__['idle_timeout_in_minutes'] = idle_timeout_in_minutes

        if loadbalancer_id is None:
            raise TypeError("Missing required property 'loadbalancer_id'")
        __props__['loadbalancer_id'] = loadbalancer_id

        __props__['name'] = name

        if protocol is None:
            raise TypeError("Missing required property 'protocol'")
        __props__['protocol'] = protocol

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if opts is None:
            opts = pulumi.ResourceOptions()
        if opts.version is None:
            opts.version = utilities.get_version()
        super(OutboundRule, __self__).__init__(
            'azure:lb/outboundRule:OutboundRule',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

