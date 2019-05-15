// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Application within Azure Active Directory.
 * 
 * > **NOTE:** The Azure Active Directory resources have been split out into [a new AzureAD Provider](http://terraform.io/docs/providers/azuread/index.html) - as such the AzureAD resources within the AzureRM Provider are deprecated and will be removed in the next major version (2.0). Information on how to migrate from the existing resources to the new AzureAD Provider can be found here.
 * 
 * > **NOTE:** If you're authenticating using a Service Principal then it must have permissions to both `Read and write all applications` and `Sign in and read user profile` within the `Windows Azure Active Directory` API.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = pulumi.output(azure.ad.getApplication({
 *     name: "My First AzureAD Application",
 * }));
 * 
 * export const azureActiveDirectoryObjectId = test.id;
 * ```
 */
export function getApplication(args?: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure:ad/getApplication:getApplication", {
        "name": args.name,
        "objectId": args.objectId,
    }, opts);
}

/**
 * A collection of arguments for invoking getApplication.
 */
export interface GetApplicationArgs {
    /**
     * Specifies the name of the Application within Azure Active Directory.
     */
    readonly name?: string;
    /**
     * Specifies the Object ID of the Application within Azure Active Directory.
     */
    readonly objectId?: string;
}

/**
 * A collection of values returned by getApplication.
 */
export interface GetApplicationResult {
    /**
     * the Application ID of the Azure Active Directory Application.
     */
    readonly applicationId: string;
    /**
     * Is this Azure AD Application available to other tenants?
     */
    readonly availableToOtherTenants: boolean;
    readonly homepage: string;
    /**
     * A list of user-defined URI(s) that uniquely identify a Web application within it's Azure AD tenant, or within a verified custom domain if the application is multi-tenant.
     */
    readonly identifierUris: string[];
    readonly name: string;
    /**
     * Does this Azure AD Application allow OAuth2.0 implicit flow tokens?
     */
    readonly oauth2AllowImplicitFlow: boolean;
    /**
     * the Object ID of the Azure Active Directory Application.
     */
    readonly objectId: string;
    /**
     * A list of URLs that user tokens are sent to for sign in, or the redirect URIs that OAuth 2.0 authorization codes and access tokens are sent to.
     */
    readonly replyUrls: string[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
