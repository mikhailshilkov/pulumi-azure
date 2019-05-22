# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class AuthorizationRule(pulumi.CustomResource):
    listen: pulumi.Output[bool]
    """
    Does this Authorization Rule have Listen access to the Notification Hub? Defaults to `false`.
    """
    manage: pulumi.Output[bool]
    """
    Does this Authorization Rule have Manage access to the Notification Hub? Defaults to `false`.
    """
    name: pulumi.Output[str]
    """
    The name to use for this Authorization Rule. Changing this forces a new resource to be created.
    """
    namespace_name: pulumi.Output[str]
    """
    The name of the Notification Hub Namespace in which the Notification Hub exists. Changing this forces a new resource to be created.
    """
    notification_hub_name: pulumi.Output[str]
    """
    The name of the Notification Hub for which the Authorization Rule should be created. Changing this forces a new resource to be created.
    """
    primary_access_key: pulumi.Output[str]
    """
    The Primary Access Key associated with this Authorization Rule.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
    """
    secondary_access_key: pulumi.Output[str]
    """
    The Secondary Access Key associated with this Authorization Rule.
    """
    send: pulumi.Output[bool]
    """
    Does this Authorization Rule have Send access to the Notification Hub? Defaults to `false`.
    """
    def __init__(__self__, resource_name, opts=None, listen=None, manage=None, name=None, namespace_name=None, notification_hub_name=None, resource_group_name=None, send=None, __name__=None, __opts__=None):
        """
        Manages an Authorization Rule associated with a Notification Hub within a Notification Hub Namespace.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] listen: Does this Authorization Rule have Listen access to the Notification Hub? Defaults to `false`.
        :param pulumi.Input[bool] manage: Does this Authorization Rule have Manage access to the Notification Hub? Defaults to `false`.
        :param pulumi.Input[str] name: The name to use for this Authorization Rule. Changing this forces a new resource to be created.
        :param pulumi.Input[str] namespace_name: The name of the Notification Hub Namespace in which the Notification Hub exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] notification_hub_name: The name of the Notification Hub for which the Authorization Rule should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
        :param pulumi.Input[bool] send: Does this Authorization Rule have Send access to the Notification Hub? Defaults to `false`.
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

        __props__['listen'] = listen

        __props__['manage'] = manage

        __props__['name'] = name

        if namespace_name is None:
            raise TypeError("Missing required property 'namespace_name'")
        __props__['namespace_name'] = namespace_name

        if notification_hub_name is None:
            raise TypeError("Missing required property 'notification_hub_name'")
        __props__['notification_hub_name'] = notification_hub_name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['send'] = send

        __props__['primary_access_key'] = None
        __props__['secondary_access_key'] = None

        super(AuthorizationRule, __self__).__init__(
            'azure:notificationhub/authorizationRule:AuthorizationRule',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

