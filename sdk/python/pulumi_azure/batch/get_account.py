# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetAccountResult:
    """
    A collection of values returned by getAccount.
    """
    def __init__(__self__, account_endpoint=None, location=None, name=None, pool_allocation_mode=None, primary_access_key=None, resource_group_name=None, secondary_access_key=None, storage_account_id=None, tags=None, id=None):
        if account_endpoint and not isinstance(account_endpoint, str):
            raise TypeError("Expected argument 'account_endpoint' to be a str")
        __self__.account_endpoint = account_endpoint
        """
        The account endpoint used to interact with the Batch service.
        """
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        __self__.location = location
        """
        The Azure Region in which this Batch account exists.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        """
        The Batch account name.
        """
        if pool_allocation_mode and not isinstance(pool_allocation_mode, str):
            raise TypeError("Expected argument 'pool_allocation_mode' to be a str")
        __self__.pool_allocation_mode = pool_allocation_mode
        """
        The pool allocation mode configured for this Batch account.
        """
        if primary_access_key and not isinstance(primary_access_key, str):
            raise TypeError("Expected argument 'primary_access_key' to be a str")
        __self__.primary_access_key = primary_access_key
        """
        The Batch account primary access key.
        """
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if secondary_access_key and not isinstance(secondary_access_key, str):
            raise TypeError("Expected argument 'secondary_access_key' to be a str")
        __self__.secondary_access_key = secondary_access_key
        """
        The Batch account secondary access key.
        """
        if storage_account_id and not isinstance(storage_account_id, str):
            raise TypeError("Expected argument 'storage_account_id' to be a str")
        __self__.storage_account_id = storage_account_id
        """
        The ID of the Storage Account used for this Batch account.
        """
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        """
        A map of tags assigned to the Batch account.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_account(name=None,resource_group_name=None,opts=None):
    """
    Use this data source to access information about an existing Batch Account.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __ret__ = await pulumi.runtime.invoke('azure:batch/getAccount:getAccount', __args__, opts=opts)

    return GetAccountResult(
        account_endpoint=__ret__.get('accountEndpoint'),
        location=__ret__.get('location'),
        name=__ret__.get('name'),
        pool_allocation_mode=__ret__.get('poolAllocationMode'),
        primary_access_key=__ret__.get('primaryAccessKey'),
        resource_group_name=__ret__.get('resourceGroupName'),
        secondary_access_key=__ret__.get('secondaryAccessKey'),
        storage_account_id=__ret__.get('storageAccountId'),
        tags=__ret__.get('tags'),
        id=__ret__.get('id'))
