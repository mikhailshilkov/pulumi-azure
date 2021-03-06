# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Probe(pulumi.CustomResource):
    interval_in_seconds: pulumi.Output[float]
    """
    The interval, in seconds between probes to the backend endpoint for health status. The default value is 15, the minimum value is 5.
    """
    load_balancer_rules: pulumi.Output[list]
    loadbalancer_id: pulumi.Output[str]
    """
    The ID of the LoadBalancer in which to create the NAT Rule.
    """
    location: pulumi.Output[str]
    name: pulumi.Output[str]
    """
    Specifies the name of the Probe.
    """
    number_of_probes: pulumi.Output[float]
    """
    The number of failed probe attempts after which the backend endpoint is removed from rotation. The default value is 2. NumberOfProbes multiplied by intervalInSeconds value must be greater or equal to 10.Endpoints are returned to rotation when at least one probe is successful.
    """
    port: pulumi.Output[float]
    """
    Port on which the Probe queries the backend endpoint. Possible values range from 1 to 65535, inclusive.
    """
    protocol: pulumi.Output[str]
    """
    Specifies the protocol of the end point. Possible values are `Http`, `Https` or `Tcp`. If Tcp is specified, a received ACK is required for the probe to be successful. If Http is specified, a 200 OK response from the specified URI is required for the probe to be successful.
    """
    request_path: pulumi.Output[str]
    """
    The URI used for requesting health status from the backend endpoint. Required if protocol is set to Http. Otherwise, it is not allowed.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the resource.
    """
    def __init__(__self__, resource_name, opts=None, interval_in_seconds=None, loadbalancer_id=None, location=None, name=None, number_of_probes=None, port=None, protocol=None, request_path=None, resource_group_name=None, __name__=None, __opts__=None):
        """
        Manages a LoadBalancer Probe Resource.
        
        > **NOTE** When using this resource, the Load Balancer needs to have a FrontEnd IP Configuration Attached
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[float] interval_in_seconds: The interval, in seconds between probes to the backend endpoint for health status. The default value is 15, the minimum value is 5.
        :param pulumi.Input[str] loadbalancer_id: The ID of the LoadBalancer in which to create the NAT Rule.
        :param pulumi.Input[str] name: Specifies the name of the Probe.
        :param pulumi.Input[float] number_of_probes: The number of failed probe attempts after which the backend endpoint is removed from rotation. The default value is 2. NumberOfProbes multiplied by intervalInSeconds value must be greater or equal to 10.Endpoints are returned to rotation when at least one probe is successful.
        :param pulumi.Input[float] port: Port on which the Probe queries the backend endpoint. Possible values range from 1 to 65535, inclusive.
        :param pulumi.Input[str] protocol: Specifies the protocol of the end point. Possible values are `Http`, `Https` or `Tcp`. If Tcp is specified, a received ACK is required for the probe to be successful. If Http is specified, a 200 OK response from the specified URI is required for the probe to be successful.
        :param pulumi.Input[str] request_path: The URI used for requesting health status from the backend endpoint. Required if protocol is set to Http. Otherwise, it is not allowed.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/lb_probe.html.markdown.
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

        __props__['interval_in_seconds'] = interval_in_seconds

        if loadbalancer_id is None:
            raise TypeError("Missing required property 'loadbalancer_id'")
        __props__['loadbalancer_id'] = loadbalancer_id

        __props__['location'] = location

        __props__['name'] = name

        __props__['number_of_probes'] = number_of_probes

        if port is None:
            raise TypeError("Missing required property 'port'")
        __props__['port'] = port

        __props__['protocol'] = protocol

        __props__['request_path'] = request_path

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['load_balancer_rules'] = None

        super(Probe, __self__).__init__(
            'azure:lb/probe:Probe',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

