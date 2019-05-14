# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class ScaleSet(pulumi.CustomResource):
    automatic_os_upgrade: pulumi.Output[bool]
    """
    Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
    """
    boot_diagnostics: pulumi.Output[dict]
    """
    A boot diagnostics profile block as referenced below.
    """
    eviction_policy: pulumi.Output[str]
    """
    Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
    """
    extensions: pulumi.Output[list]
    """
    Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
    """
    health_probe_id: pulumi.Output[str]
    """
    Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
    """
    identity: pulumi.Output[dict]
    license_type: pulumi.Output[str]
    """
    Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the image from the marketplace.
    """
    network_profiles: pulumi.Output[list]
    """
    A collection of network profile block as documented below.
    """
    os_profile: pulumi.Output[dict]
    """
    A Virtual Machine OS Profile block as documented below.
    """
    os_profile_linux_config: pulumi.Output[dict]
    """
    A Linux config block as documented below.
    """
    os_profile_secrets: pulumi.Output[list]
    """
    A collection of Secret blocks as documented below.
    """
    os_profile_windows_config: pulumi.Output[dict]
    """
    A Windows config block as documented below.
    """
    overprovision: pulumi.Output[bool]
    """
    Specifies whether the virtual machine scale set should be overprovisioned.
    """
    plan: pulumi.Output[dict]
    """
    A plan block as documented below.
    """
    priority: pulumi.Output[str]
    """
    Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
    """
    rolling_upgrade_policy: pulumi.Output[dict]
    """
    A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
    """
    single_placement_group: pulumi.Output[bool]
    """
    Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
    """
    sku: pulumi.Output[dict]
    """
    Specifies the SKU of the image used to create the virtual machines.
    """
    storage_profile_data_disks: pulumi.Output[list]
    """
    A storage profile data disk block as documented below
    """
    storage_profile_image_reference: pulumi.Output[dict]
    """
    A storage profile image reference block as documented below.
    """
    storage_profile_os_disk: pulumi.Output[dict]
    """
    A storage profile os disk block as documented below
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    upgrade_policy_mode: pulumi.Output[str]
    """
    Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
    """
    zones: pulumi.Output[list]
    """
    A collection of availability zones to spread the Virtual Machines over.
    """
    def __init__(__self__, resource_name, opts=None, automatic_os_upgrade=None, boot_diagnostics=None, eviction_policy=None, extensions=None, health_probe_id=None, identity=None, license_type=None, location=None, name=None, network_profiles=None, os_profile=None, os_profile_linux_config=None, os_profile_secrets=None, os_profile_windows_config=None, overprovision=None, plan=None, priority=None, resource_group_name=None, rolling_upgrade_policy=None, single_placement_group=None, sku=None, storage_profile_data_disks=None, storage_profile_image_reference=None, storage_profile_os_disk=None, tags=None, upgrade_policy_mode=None, zones=None, __name__=None, __opts__=None):
        """
        Manage a virtual machine scale set.
        
        > **Note:** All arguments including the administrator login and password will be stored in the raw state as plain-text.
        [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] automatic_os_upgrade: Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
        :param pulumi.Input[dict] boot_diagnostics: A boot diagnostics profile block as referenced below.
        :param pulumi.Input[str] eviction_policy: Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
        :param pulumi.Input[list] extensions: Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
        :param pulumi.Input[str] health_probe_id: Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
        :param pulumi.Input[str] license_type: Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the image from the marketplace.
        :param pulumi.Input[list] network_profiles: A collection of network profile block as documented below.
        :param pulumi.Input[dict] os_profile: A Virtual Machine OS Profile block as documented below.
        :param pulumi.Input[dict] os_profile_linux_config: A Linux config block as documented below.
        :param pulumi.Input[list] os_profile_secrets: A collection of Secret blocks as documented below.
        :param pulumi.Input[dict] os_profile_windows_config: A Windows config block as documented below.
        :param pulumi.Input[bool] overprovision: Specifies whether the virtual machine scale set should be overprovisioned.
        :param pulumi.Input[dict] plan: A plan block as documented below.
        :param pulumi.Input[str] priority: Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] rolling_upgrade_policy: A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
        :param pulumi.Input[bool] single_placement_group: Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
        :param pulumi.Input[dict] sku: Specifies the SKU of the image used to create the virtual machines.
        :param pulumi.Input[list] storage_profile_data_disks: A storage profile data disk block as documented below
        :param pulumi.Input[dict] storage_profile_image_reference: A storage profile image reference block as documented below.
        :param pulumi.Input[dict] storage_profile_os_disk: A storage profile os disk block as documented below
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] upgrade_policy_mode: Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
        :param pulumi.Input[list] zones: A collection of availability zones to spread the Virtual Machines over.
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

        __props__['automatic_os_upgrade'] = automatic_os_upgrade

        __props__['boot_diagnostics'] = boot_diagnostics

        __props__['eviction_policy'] = eviction_policy

        __props__['extensions'] = extensions

        __props__['health_probe_id'] = health_probe_id

        __props__['identity'] = identity

        __props__['license_type'] = license_type

        __props__['location'] = location

        __props__['name'] = name

        if network_profiles is None:
            raise TypeError("Missing required property 'network_profiles'")
        __props__['network_profiles'] = network_profiles

        if os_profile is None:
            raise TypeError("Missing required property 'os_profile'")
        __props__['os_profile'] = os_profile

        __props__['os_profile_linux_config'] = os_profile_linux_config

        __props__['os_profile_secrets'] = os_profile_secrets

        __props__['os_profile_windows_config'] = os_profile_windows_config

        __props__['overprovision'] = overprovision

        __props__['plan'] = plan

        __props__['priority'] = priority

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['rolling_upgrade_policy'] = rolling_upgrade_policy

        __props__['single_placement_group'] = single_placement_group

        if sku is None:
            raise TypeError("Missing required property 'sku'")
        __props__['sku'] = sku

        __props__['storage_profile_data_disks'] = storage_profile_data_disks

        __props__['storage_profile_image_reference'] = storage_profile_image_reference

        if storage_profile_os_disk is None:
            raise TypeError("Missing required property 'storage_profile_os_disk'")
        __props__['storage_profile_os_disk'] = storage_profile_os_disk

        __props__['tags'] = tags

        if upgrade_policy_mode is None:
            raise TypeError("Missing required property 'upgrade_policy_mode'")
        __props__['upgrade_policy_mode'] = upgrade_policy_mode

        __props__['zones'] = zones

        if opts is None:
            opts = pulumi.ResourceOptions()
        if opts.version is None:
            opts.version = utilities.get_version()
        super(ScaleSet, __self__).__init__(
            'azure:compute/scaleSet:ScaleSet',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

