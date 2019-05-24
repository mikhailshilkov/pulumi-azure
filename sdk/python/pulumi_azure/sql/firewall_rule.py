# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class FirewallRule(pulumi.CustomResource):
    end_ip_address: pulumi.Output[str]
    """
    The ending IP address to allow through the firewall for this rule.
    """
    name: pulumi.Output[str]
    """
    The name of the firewall rule.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to
    create the sql server.
    """
    server_name: pulumi.Output[str]
    """
    The name of the SQL Server on which to create the Firewall Rule.
    """
    start_ip_address: pulumi.Output[str]
    """
    The starting IP address to allow through the firewall for this rule.
    """
    def __init__(__self__, resource_name, opts=None, end_ip_address=None, name=None, resource_group_name=None, server_name=None, start_ip_address=None, __name__=None, __opts__=None):
        """
        Allows you to manage an Azure SQL Firewall Rule
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] end_ip_address: The ending IP address to allow through the firewall for this rule.
        :param pulumi.Input[str] name: The name of the firewall rule.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to
               create the sql server.
        :param pulumi.Input[str] server_name: The name of the SQL Server on which to create the Firewall Rule.
        :param pulumi.Input[str] start_ip_address: The starting IP address to allow through the firewall for this rule.
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

        if end_ip_address is None:
            raise TypeError("Missing required property 'end_ip_address'")
        __props__['end_ip_address'] = end_ip_address

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if server_name is None:
            raise TypeError("Missing required property 'server_name'")
        __props__['server_name'] = server_name

        if start_ip_address is None:
            raise TypeError("Missing required property 'start_ip_address'")
        __props__['start_ip_address'] = start_ip_address

        super(FirewallRule, __self__).__init__(
            'azure:sql/firewallRule:FirewallRule',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

