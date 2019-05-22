# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Extension(pulumi.CustomResource):
    auto_upgrade_minor_version: pulumi.Output[bool]
    """
    Specifies if the platform deploys
    the latest minor version update to the `type_handler_version` specified.
    """
    location: pulumi.Output[str]
    """
    The location where the extension is created. Changing
    this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    The name of the virtual machine extension peering. Changing
    this forces a new resource to be created.
    """
    protected_settings: pulumi.Output[str]
    """
    The protected_settings passed to the
    extension, like settings, these are specified as a JSON object in a string.
    """
    publisher: pulumi.Output[str]
    """
    The publisher of the extension, available publishers
    can be found by using the Azure CLI.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to
    create the virtual network. Changing this forces a new resource to be
    created.
    """
    settings: pulumi.Output[str]
    """
    The settings passed to the extension, these are
    specified as a JSON object in a string.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    type: pulumi.Output[str]
    """
    The type of extension, available types for a publisher can
    be found using the Azure CLI.
    """
    type_handler_version: pulumi.Output[str]
    """
    Specifies the version of the extension to
    use, available versions can be found using the Azure CLI.
    """
    virtual_machine_name: pulumi.Output[str]
    """
    The name of the virtual machine. Changing
    this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, auto_upgrade_minor_version=None, location=None, name=None, protected_settings=None, publisher=None, resource_group_name=None, settings=None, tags=None, type=None, type_handler_version=None, virtual_machine_name=None, __name__=None, __opts__=None):
        """
        Manages a Virtual Machine Extension to provide post deployment configuration
        and run automated tasks.
        
        > **NOTE:** Custom Script Extensions for Linux & Windows require that the `commandToExecute` returns a `0` exit code to be classified as successfully deployed. You can achieve this by appending `exit 0` to the end of your `commandToExecute`.
        
        > **NOTE:** Custom Script Extensions require that the Azure Virtual Machine Guest Agent is running on the Virtual Machine.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] auto_upgrade_minor_version: Specifies if the platform deploys
               the latest minor version update to the `type_handler_version` specified.
        :param pulumi.Input[str] location: The location where the extension is created. Changing
               this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the virtual machine extension peering. Changing
               this forces a new resource to be created.
        :param pulumi.Input[str] protected_settings: The protected_settings passed to the
               extension, like settings, these are specified as a JSON object in a string.
        :param pulumi.Input[str] publisher: The publisher of the extension, available publishers
               can be found by using the Azure CLI.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to
               create the virtual network. Changing this forces a new resource to be
               created.
        :param pulumi.Input[str] settings: The settings passed to the extension, these are
               specified as a JSON object in a string.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] type: The type of extension, available types for a publisher can
               be found using the Azure CLI.
        :param pulumi.Input[str] type_handler_version: Specifies the version of the extension to
               use, available versions can be found using the Azure CLI.
        :param pulumi.Input[str] virtual_machine_name: The name of the virtual machine. Changing
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

        __props__['auto_upgrade_minor_version'] = auto_upgrade_minor_version

        __props__['location'] = location

        __props__['name'] = name

        __props__['protected_settings'] = protected_settings

        if publisher is None:
            raise TypeError("Missing required property 'publisher'")
        __props__['publisher'] = publisher

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['settings'] = settings

        __props__['tags'] = tags

        if type is None:
            raise TypeError("Missing required property 'type'")
        __props__['type'] = type

        if type_handler_version is None:
            raise TypeError("Missing required property 'type_handler_version'")
        __props__['type_handler_version'] = type_handler_version

        if virtual_machine_name is None:
            raise TypeError("Missing required property 'virtual_machine_name'")
        __props__['virtual_machine_name'] = virtual_machine_name

        super(Extension, __self__).__init__(
            'azure:compute/extension:Extension',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

