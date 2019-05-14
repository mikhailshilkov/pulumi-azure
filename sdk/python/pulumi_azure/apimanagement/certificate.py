# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Certificate(pulumi.CustomResource):
    api_management_name: pulumi.Output[str]
    """
    The Name of the API Management Service where this Service should be created. Changing this forces a new resource to be created.
    """
    data: pulumi.Output[str]
    """
    The base-64 encoded certificate data, which must be a PFX file. Changing this forces a new resource to be created.
    """
    expiration: pulumi.Output[str]
    """
    The Expiration Date of this Certificate, formatted as an RFC3339 string.
    """
    name: pulumi.Output[str]
    """
    The name of the API Management Certificate. Changing this forces a new resource to be created.
    """
    password: pulumi.Output[str]
    """
    The password used for this certificate. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
    """
    subject: pulumi.Output[str]
    """
    The Subject of this Certificate.
    """
    thumbprint: pulumi.Output[str]
    """
    The Thumbprint of this Certificate.
    """
    def __init__(__self__, resource_name, opts=None, api_management_name=None, data=None, name=None, password=None, resource_group_name=None, __name__=None, __opts__=None):
        """
        Manages an Certificate within an API Management Service.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] api_management_name: The Name of the API Management Service where this Service should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] data: The base-64 encoded certificate data, which must be a PFX file. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the API Management Certificate. Changing this forces a new resource to be created.
        :param pulumi.Input[str] password: The password used for this certificate. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
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

        if data is None:
            raise TypeError("Missing required property 'data'")
        __props__['data'] = data

        __props__['name'] = name

        __props__['password'] = password

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['expiration'] = None
        __props__['subject'] = None
        __props__['thumbprint'] = None

        if opts is None:
            opts = pulumi.ResourceOptions()
        if opts.version is None:
            opts.version = utilities.get_version()
        super(Certificate, __self__).__init__(
            'azure:apimanagement/certificate:Certificate',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

