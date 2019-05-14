# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class FirewallApplicationRuleCollection(pulumi.CustomResource):
    action: pulumi.Output[str]
    """
    Specifies the action the rule will apply to matching traffic. Possible values are `Allow` and `Deny`.
    """
    azure_firewall_name: pulumi.Output[str]
    """
    Specifies the name of the Firewall in which the Application Rule Collection should be created. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Application Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
    """
    priority: pulumi.Output[float]
    """
    Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
    """
    resource_group_name: pulumi.Output[str]
    """
    Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
    """
    rules: pulumi.Output[list]
    """
    One or more `rule` blocks as defined below.
    """
    def __init__(__self__, resource_name, opts=None, action=None, azure_firewall_name=None, name=None, priority=None, resource_group_name=None, rules=None, __name__=None, __opts__=None):
        """
        Manages an Application Rule Collection within an Azure Firewall.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] action: Specifies the action the rule will apply to matching traffic. Possible values are `Allow` and `Deny`.
        :param pulumi.Input[str] azure_firewall_name: Specifies the name of the Firewall in which the Application Rule Collection should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Application Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
        :param pulumi.Input[float] priority: Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
        :param pulumi.Input[str] resource_group_name: Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
        :param pulumi.Input[list] rules: One or more `rule` blocks as defined below.
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

        if action is None:
            raise TypeError("Missing required property 'action'")
        __props__['action'] = action

        if azure_firewall_name is None:
            raise TypeError("Missing required property 'azure_firewall_name'")
        __props__['azure_firewall_name'] = azure_firewall_name

        __props__['name'] = name

        if priority is None:
            raise TypeError("Missing required property 'priority'")
        __props__['priority'] = priority

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if rules is None:
            raise TypeError("Missing required property 'rules'")
        __props__['rules'] = rules

        if opts is None:
            opts = pulumi.ResourceOptions()
        if opts.version is None:
            opts.version = utilities.get_version()
        super(FirewallApplicationRuleCollection, __self__).__init__(
            'azure:network/firewallApplicationRuleCollection:FirewallApplicationRuleCollection',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

