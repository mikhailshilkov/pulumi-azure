# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetImageResult:
    """
    A collection of values returned by getImage.
    """
    def __init__(__self__, data_disks=None, location=None, name=None, name_regex=None, os_disks=None, resource_group_name=None, sort_descending=None, tags=None, zone_resilient=None, id=None):
        if data_disks and not isinstance(data_disks, list):
            raise TypeError("Expected argument 'data_disks' to be a list")
        __self__.data_disks = data_disks
        """
        a collection of `data_disk` blocks as defined below.
        """
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        __self__.location = location
        """
        the Azure Location where this Image exists.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        """
        the name of the Image.
        """
        if name_regex and not isinstance(name_regex, str):
            raise TypeError("Expected argument 'name_regex' to be a str")
        __self__.name_regex = name_regex
        if os_disks and not isinstance(os_disks, list):
            raise TypeError("Expected argument 'os_disks' to be a list")
        __self__.os_disks = os_disks
        """
        a `os_disk` block as defined below.
        """
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if sort_descending and not isinstance(sort_descending, bool):
            raise TypeError("Expected argument 'sort_descending' to be a bool")
        __self__.sort_descending = sort_descending
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        a mapping of tags to assigned to the resource.
        """
        if zone_resilient and not isinstance(zone_resilient, bool):
            raise TypeError("Expected argument 'zone_resilient' to be a bool")
        __self__.zone_resilient = zone_resilient
        """
        is zone resiliency enabled?
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_image(name=None,name_regex=None,resource_group_name=None,sort_descending=None,opts=None):
    """
    Use this data source to access information about an existing Image.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['nameRegex'] = name_regex
    __args__['resourceGroupName'] = resource_group_name
    __args__['sortDescending'] = sort_descending
    if opts is None:
        opts = pulumi.ResourceOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = await pulumi.runtime.invoke('azure:compute/getImage:getImage', __args__, opts=opts)

    return GetImageResult(
        data_disks=__ret__.get('dataDisks'),
        location=__ret__.get('location'),
        name=__ret__.get('name'),
        name_regex=__ret__.get('nameRegex'),
        os_disks=__ret__.get('osDisks'),
        resource_group_name=__ret__.get('resourceGroupName'),
        sort_descending=__ret__.get('sortDescending'),
        tags=__ret__.get('tags'),
        zone_resilient=__ret__.get('zoneResilient'),
        id=__ret__.get('id'))
