# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Subscription(pulumi.CustomResource):
    api_management_name: pulumi.Output[str]
    """
    The name of the API Management Service where this Subscription should be created. Changing this forces a new resource to be created.
    """
    display_name: pulumi.Output[str]
    """
    The display name of this Subscription.
    """
    primary_key: pulumi.Output[str]
    product_id: pulumi.Output[str]
    """
    The ID of the Product which should be assigned to this Subscription. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
    """
    secondary_key: pulumi.Output[str]
    state: pulumi.Output[str]
    """
    The state of this Subscription. Possible values are `Active`, `Cancelled`, `Expired`, `Rejected`, `Submitted` and `Suspended`. Defaults to `Submitted`.
    """
    subscription_id: pulumi.Output[str]
    """
    An Identifier which should used as the ID of this Subscription. If not specified a new Subscription ID will be generated. Changing this forces a new resource to be created.
    """
    user_id: pulumi.Output[str]
    """
    The ID of the User which should be assigned to this Subscription. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, api_management_name=None, display_name=None, primary_key=None, product_id=None, resource_group_name=None, secondary_key=None, state=None, subscription_id=None, user_id=None, __name__=None, __opts__=None):
        """
        Manages a Subscription within a API Management Service.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] api_management_name: The name of the API Management Service where this Subscription should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] display_name: The display name of this Subscription.
        :param pulumi.Input[str] product_id: The ID of the Product which should be assigned to this Subscription. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] state: The state of this Subscription. Possible values are `Active`, `Cancelled`, `Expired`, `Rejected`, `Submitted` and `Suspended`. Defaults to `Submitted`.
        :param pulumi.Input[str] subscription_id: An Identifier which should used as the ID of this Subscription. If not specified a new Subscription ID will be generated. Changing this forces a new resource to be created.
        :param pulumi.Input[str] user_id: The ID of the User which should be assigned to this Subscription. Changing this forces a new resource to be created.
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

        if api_management_name is None:
            raise TypeError("Missing required property 'api_management_name'")
        __props__['api_management_name'] = api_management_name

        if display_name is None:
            raise TypeError("Missing required property 'display_name'")
        __props__['display_name'] = display_name

        __props__['primary_key'] = primary_key

        if product_id is None:
            raise TypeError("Missing required property 'product_id'")
        __props__['product_id'] = product_id

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['secondary_key'] = secondary_key

        __props__['state'] = state

        __props__['subscription_id'] = subscription_id

        if user_id is None:
            raise TypeError("Missing required property 'user_id'")
        __props__['user_id'] = user_id

        if opts is None:
            opts = pulumi.ResourceOptions()
        if opts.version is None:
            opts.version = utilities.get_version()
        super(Subscription, __self__).__init__(
            'azure:apimanagement/subscription:Subscription',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

