# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class AnalyticsAccount(pulumi.CustomResource):
    default_store_account_name: pulumi.Output[str]
    """
    Specifies the data lake store to use by default. Changing this forces a new resource to be created.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Data Lake Analytics Account. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the Data Lake Analytics Account.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    tier: pulumi.Output[str]
    """
    The monthly commitment tier for Data Lake Analytics Account. Accepted values are `Consumption`, `Commitment_100000AUHours`, `Commitment_10000AUHours`, `Commitment_1000AUHours`, `Commitment_100AUHours`, `Commitment_500000AUHours`, `Commitment_50000AUHours`, `Commitment_5000AUHours`, or `Commitment_500AUHours`.
    """
    def __init__(__self__, resource_name, opts=None, default_store_account_name=None, location=None, name=None, resource_group_name=None, tags=None, tier=None, __name__=None, __opts__=None):
        """
        Manage an Azure Data Lake Analytics Account.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] default_store_account_name: Specifies the data lake store to use by default. Changing this forces a new resource to be created.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Data Lake Analytics Account. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Data Lake Analytics Account.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] tier: The monthly commitment tier for Data Lake Analytics Account. Accepted values are `Consumption`, `Commitment_100000AUHours`, `Commitment_10000AUHours`, `Commitment_1000AUHours`, `Commitment_100AUHours`, `Commitment_500000AUHours`, `Commitment_50000AUHours`, `Commitment_5000AUHours`, or `Commitment_500AUHours`.
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

        if default_store_account_name is None:
            raise TypeError("Missing required property 'default_store_account_name'")
        __props__['default_store_account_name'] = default_store_account_name

        __props__['location'] = location

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['tags'] = tags

        __props__['tier'] = tier

        super(AnalyticsAccount, __self__).__init__(
            'azure:datalake/analyticsAccount:AnalyticsAccount',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

