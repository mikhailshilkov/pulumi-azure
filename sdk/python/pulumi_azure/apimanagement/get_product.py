# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetProductResult:
    """
    A collection of values returned by getProduct.
    """
    def __init__(__self__, api_management_name=None, approval_required=None, description=None, display_name=None, product_id=None, published=None, resource_group_name=None, subscription_required=None, subscriptions_limit=None, terms=None, id=None):
        if api_management_name and not isinstance(api_management_name, str):
            raise TypeError('Expected argument api_management_name to be a str')
        __self__.api_management_name = api_management_name
        if approval_required and not isinstance(approval_required, bool):
            raise TypeError('Expected argument approval_required to be a bool')
        __self__.approval_required = approval_required
        """
        Do subscribers need to be approved prior to being able to use the Product?
        """
        if description and not isinstance(description, str):
            raise TypeError('Expected argument description to be a str')
        __self__.description = description
        """
        The description of this Product, which may include HTML formatting tags.
        """
        if display_name and not isinstance(display_name, str):
            raise TypeError('Expected argument display_name to be a str')
        __self__.display_name = display_name
        """
        The Display Name for this API Management Product.
        """
        if product_id and not isinstance(product_id, str):
            raise TypeError('Expected argument product_id to be a str')
        __self__.product_id = product_id
        if published and not isinstance(published, bool):
            raise TypeError('Expected argument published to be a bool')
        __self__.published = published
        """
        Is this Product Published?
        """
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError('Expected argument resource_group_name to be a str')
        __self__.resource_group_name = resource_group_name
        if subscription_required and not isinstance(subscription_required, bool):
            raise TypeError('Expected argument subscription_required to be a bool')
        __self__.subscription_required = subscription_required
        """
        Is a Subscription required to access API's included in this Product?
        """
        if subscriptions_limit and not isinstance(subscriptions_limit, float):
            raise TypeError('Expected argument subscriptions_limit to be a float')
        __self__.subscriptions_limit = subscriptions_limit
        """
        The number of subscriptions a user can have to this Product at the same time.
        """
        if terms and not isinstance(terms, str):
            raise TypeError('Expected argument terms to be a str')
        __self__.terms = terms
        """
        Any Terms and Conditions for this Product, which must be accepted by Developers before they can begin the Subscription process.
        """
        if id and not isinstance(id, str):
            raise TypeError('Expected argument id to be a str')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_product(api_management_name=None,product_id=None,resource_group_name=None,opts=None):
    """
    Use this data source to access information about an existing API Management Product.
    """
    __args__ = dict()

    __args__['apiManagementName'] = api_management_name
    __args__['productId'] = product_id
    __args__['resourceGroupName'] = resource_group_name
    __ret__ = await pulumi.runtime.invoke('azure:apimanagement/getProduct:getProduct', __args__, opts=opts)

    return GetProductResult(
        api_management_name=__ret__.get('apiManagementName'),
        approval_required=__ret__.get('approvalRequired'),
        description=__ret__.get('description'),
        display_name=__ret__.get('displayName'),
        product_id=__ret__.get('productId'),
        published=__ret__.get('published'),
        resource_group_name=__ret__.get('resourceGroupName'),
        subscription_required=__ret__.get('subscriptionRequired'),
        subscriptions_limit=__ret__.get('subscriptionsLimit'),
        terms=__ret__.get('terms'),
        id=__ret__.get('id'))
