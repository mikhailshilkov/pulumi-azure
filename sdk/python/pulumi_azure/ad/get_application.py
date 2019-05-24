# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetApplicationResult:
    """
    A collection of values returned by getApplication.
    """
    def __init__(__self__, application_id=None, available_to_other_tenants=None, homepage=None, identifier_uris=None, name=None, oauth2_allow_implicit_flow=None, object_id=None, reply_urls=None, id=None):
        if application_id and not isinstance(application_id, str):
            raise TypeError("Expected argument 'application_id' to be a str")
        __self__.application_id = application_id
        """
        the Application ID of the Azure Active Directory Application.
        """
        if available_to_other_tenants and not isinstance(available_to_other_tenants, bool):
            raise TypeError("Expected argument 'available_to_other_tenants' to be a bool")
        __self__.available_to_other_tenants = available_to_other_tenants
        """
        Is this Azure AD Application available to other tenants?
        """
        if homepage and not isinstance(homepage, str):
            raise TypeError("Expected argument 'homepage' to be a str")
        __self__.homepage = homepage
        if identifier_uris and not isinstance(identifier_uris, list):
            raise TypeError("Expected argument 'identifier_uris' to be a list")
        __self__.identifier_uris = identifier_uris
        """
        A list of user-defined URI(s) that uniquely identify a Web application within it's Azure AD tenant, or within a verified custom domain if the application is multi-tenant.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if oauth2_allow_implicit_flow and not isinstance(oauth2_allow_implicit_flow, bool):
            raise TypeError("Expected argument 'oauth2_allow_implicit_flow' to be a bool")
        __self__.oauth2_allow_implicit_flow = oauth2_allow_implicit_flow
        """
        Does this Azure AD Application allow OAuth2.0 implicit flow tokens?
        """
        if object_id and not isinstance(object_id, str):
            raise TypeError("Expected argument 'object_id' to be a str")
        __self__.object_id = object_id
        """
        the Object ID of the Azure Active Directory Application.
        """
        if reply_urls and not isinstance(reply_urls, list):
            raise TypeError("Expected argument 'reply_urls' to be a list")
        __self__.reply_urls = reply_urls
        """
        A list of URLs that user tokens are sent to for sign in, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_application(name=None,object_id=None,opts=None):
    """
    Use this data source to access information about an existing Application within Azure Active Directory.
    
    > **NOTE:** The Azure Active Directory resources have been split out into [a new AzureAD Provider](http://terraform.io/docs/providers/azuread/index.html) - as such the AzureAD resources within the AzureRM Provider are deprecated and will be removed in the next major version (2.0). Information on how to migrate from the existing resources to the new AzureAD Provider can be found here.
    
    > **NOTE:** If you're authenticating using a Service Principal then it must have permissions to both `Read and write all applications` and `Sign in and read user profile` within the `Windows Azure Active Directory` API.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['objectId'] = object_id
    __ret__ = await pulumi.runtime.invoke('azure:ad/getApplication:getApplication', __args__, opts=opts)

    return GetApplicationResult(
        application_id=__ret__.get('applicationId'),
        available_to_other_tenants=__ret__.get('availableToOtherTenants'),
        homepage=__ret__.get('homepage'),
        identifier_uris=__ret__.get('identifierUris'),
        name=__ret__.get('name'),
        oauth2_allow_implicit_flow=__ret__.get('oauth2AllowImplicitFlow'),
        object_id=__ret__.get('objectId'),
        reply_urls=__ret__.get('replyUrls'),
        id=__ret__.get('id'))
