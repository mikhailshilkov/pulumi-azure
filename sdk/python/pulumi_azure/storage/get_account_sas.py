# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetAccountSASResult:
    """
    A collection of values returned by getAccountSAS.
    """
    def __init__(__self__, connection_string=None, expiry=None, https_only=None, permissions=None, resource_types=None, sas=None, services=None, start=None, id=None):
        if connection_string and not isinstance(connection_string, str):
            raise TypeError("Expected argument 'connection_string' to be a str")
        __self__.connection_string = connection_string
        if expiry and not isinstance(expiry, str):
            raise TypeError("Expected argument 'expiry' to be a str")
        __self__.expiry = expiry
        if https_only and not isinstance(https_only, bool):
            raise TypeError("Expected argument 'https_only' to be a bool")
        __self__.https_only = https_only
        if permissions and not isinstance(permissions, dict):
            raise TypeError("Expected argument 'permissions' to be a dict")
        __self__.permissions = permissions
        if resource_types and not isinstance(resource_types, dict):
            raise TypeError("Expected argument 'resource_types' to be a dict")
        __self__.resource_types = resource_types
        if sas and not isinstance(sas, str):
            raise TypeError("Expected argument 'sas' to be a str")
        __self__.sas = sas
        """
        The computed Account Shared Access Signature (SAS).
        """
        if services and not isinstance(services, dict):
            raise TypeError("Expected argument 'services' to be a dict")
        __self__.services = services
        if start and not isinstance(start, str):
            raise TypeError("Expected argument 'start' to be a str")
        __self__.start = start
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_account_sas(connection_string=None,expiry=None,https_only=None,permissions=None,resource_types=None,services=None,start=None,opts=None):
    """
    Use this data source to obtain a Shared Access Signature (SAS Token) for an existing Storage Account.
    
    Shared access signatures allow fine-grained, ephemeral access control to various aspects of an Azure Storage Account.
    
    Note that this is an [Account SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/constructing-an-account-sas)
    and *not* a [Service SAS](https://docs.microsoft.com/en-us/rest/api/storageservices/constructing-a-service-sas).
    """
    __args__ = dict()

    __args__['connectionString'] = connection_string
    __args__['expiry'] = expiry
    __args__['httpsOnly'] = https_only
    __args__['permissions'] = permissions
    __args__['resourceTypes'] = resource_types
    __args__['services'] = services
    __args__['start'] = start
    if opts is None:
        opts = pulumi.ResourceOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = await pulumi.runtime.invoke('azure:storage/getAccountSAS:getAccountSAS', __args__, opts=opts)

    return GetAccountSASResult(
        connection_string=__ret__.get('connectionString'),
        expiry=__ret__.get('expiry'),
        https_only=__ret__.get('httpsOnly'),
        permissions=__ret__.get('permissions'),
        resource_types=__ret__.get('resourceTypes'),
        sas=__ret__.get('sas'),
        services=__ret__.get('services'),
        start=__ret__.get('start'),
        id=__ret__.get('id'))
