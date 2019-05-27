# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetKubernetesServiceVersionsResult:
    """
    A collection of values returned by getKubernetesServiceVersions.
    """
    def __init__(__self__, latest_version=None, location=None, version_prefix=None, versions=None, id=None):
        if latest_version and not isinstance(latest_version, str):
            raise TypeError("Expected argument 'latest_version' to be a str")
        __self__.latest_version = latest_version
        """
        The most recent version available.
        """
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        __self__.location = location
        if version_prefix and not isinstance(version_prefix, str):
            raise TypeError("Expected argument 'version_prefix' to be a str")
        __self__.version_prefix = version_prefix
        if versions and not isinstance(versions, list):
            raise TypeError("Expected argument 'versions' to be a list")
        __self__.versions = versions
        """
        The list of all supported versions.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_kubernetes_service_versions(location=None,version_prefix=None,opts=None):
    """
    Use this data source to retrieve the version of Kubernetes supported by Azure Kubernetes Service.
    """
    __args__ = dict()

    __args__['location'] = location
    __args__['versionPrefix'] = version_prefix
    __ret__ = await pulumi.runtime.invoke('azure:containerservice/getKubernetesServiceVersions:getKubernetesServiceVersions', __args__, opts=opts)

    return GetKubernetesServiceVersionsResult(
        latest_version=__ret__.get('latestVersion'),
        location=__ret__.get('location'),
        version_prefix=__ret__.get('versionPrefix'),
        versions=__ret__.get('versions'),
        id=__ret__.get('id'))
