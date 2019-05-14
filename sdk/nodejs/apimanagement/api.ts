// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an API within an API Management Service.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "example-resources",
 * });
 * const testService = new azure.apimanagement.Service("test", {
 *     location: testResourceGroup.location,
 *     name: "example-apim",
 *     publisherEmail: "company@terraform.io",
 *     publisherName: "My Company",
 *     resourceGroupName: testResourceGroup.name,
 *     sku: {
 *         capacity: 1,
 *         name: "Developer",
 *     },
 * });
 * const testApi = new azure.apimanagement.Api("test", {
 *     apiManagementName: testService.name,
 *     displayName: "Example API",
 *     import: {
 *         contentFormat: "swagger-link-json",
 *         contentValue: "http://conferenceapi.azurewebsites.net/?format=json",
 *     },
 *     name: "example-api",
 *     path: "example",
 *     protocols: ["https"],
 *     resourceGroupName: testResourceGroup.name,
 *     revision: "1",
 * });
 * ```
 */
export class Api extends pulumi.CustomResource {
    /**
     * Get an existing Api resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiState, opts?: pulumi.CustomResourceOptions): Api {
        return new Api(name, <any>state, { ...opts, id: id });
    }

    /**
     * The Name of the API Management Service where this API should be created. Changing this forces a new resource to be created.
     */
    public readonly apiManagementName!: pulumi.Output<string>;
    /**
     * A description of the API Management API, which may include HTML formatting tags.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of the API.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * A `import` block as documented below.
     */
    public readonly import!: pulumi.Output<{ contentFormat: string, contentValue: string, wsdlSelector?: { endpointName: string, serviceName: string } } | undefined>;
    /**
     * Is this the current API Revision?
     */
    public /*out*/ readonly isCurrent!: pulumi.Output<boolean>;
    /**
     * Is this API Revision online/accessible via the Gateway?
     */
    public /*out*/ readonly isOnline!: pulumi.Output<boolean>;
    /**
     * The name of the API Management API. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The Path for this API Management API, which is a relative URL which uniquely identifies this API and all of it's resource paths within the API Management Service.
     */
    public readonly path!: pulumi.Output<string>;
    /**
     * A list of protocols the operations in this API can be invoked. Possible values are `http` and `https`.
     */
    public readonly protocols!: pulumi.Output<string[]>;
    /**
     * The Name of the Resource Group where the API Management API exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The Revision which used for this API.
     */
    public readonly revision!: pulumi.Output<string>;
    /**
     * Absolute URL of the backend service implementing this API.
     */
    public readonly serviceUrl!: pulumi.Output<string>;
    /**
     * Should this API expose a SOAP frontend, rather than a HTTP frontend? Defaults to `false`.
     */
    public readonly soapPassThrough!: pulumi.Output<boolean | undefined>;
    /**
     * A `subscription_key_parameter_names` block as documented below.
     */
    public readonly subscriptionKeyParameterNames!: pulumi.Output<{ header: string, query: string }>;
    /**
     * The Version number of this API, if this API is versioned.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;
    /**
     * The ID of the Version Set which this API is associated with.
     */
    public /*out*/ readonly versionSetId!: pulumi.Output<string>;

    /**
     * Create a Api resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiArgs | ApiState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ApiState | undefined;
            inputs["apiManagementName"] = state ? state.apiManagementName : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["import"] = state ? state.import : undefined;
            inputs["isCurrent"] = state ? state.isCurrent : undefined;
            inputs["isOnline"] = state ? state.isOnline : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["path"] = state ? state.path : undefined;
            inputs["protocols"] = state ? state.protocols : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["revision"] = state ? state.revision : undefined;
            inputs["serviceUrl"] = state ? state.serviceUrl : undefined;
            inputs["soapPassThrough"] = state ? state.soapPassThrough : undefined;
            inputs["subscriptionKeyParameterNames"] = state ? state.subscriptionKeyParameterNames : undefined;
            inputs["version"] = state ? state.version : undefined;
            inputs["versionSetId"] = state ? state.versionSetId : undefined;
        } else {
            const args = argsOrState as ApiArgs | undefined;
            if (!args || args.apiManagementName === undefined) {
                throw new Error("Missing required property 'apiManagementName'");
            }
            if (!args || args.displayName === undefined) {
                throw new Error("Missing required property 'displayName'");
            }
            if (!args || args.path === undefined) {
                throw new Error("Missing required property 'path'");
            }
            if (!args || args.protocols === undefined) {
                throw new Error("Missing required property 'protocols'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.revision === undefined) {
                throw new Error("Missing required property 'revision'");
            }
            inputs["apiManagementName"] = args ? args.apiManagementName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["import"] = args ? args.import : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["path"] = args ? args.path : undefined;
            inputs["protocols"] = args ? args.protocols : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["revision"] = args ? args.revision : undefined;
            inputs["serviceUrl"] = args ? args.serviceUrl : undefined;
            inputs["soapPassThrough"] = args ? args.soapPassThrough : undefined;
            inputs["subscriptionKeyParameterNames"] = args ? args.subscriptionKeyParameterNames : undefined;
            inputs["isCurrent"] = undefined /*out*/;
            inputs["isOnline"] = undefined /*out*/;
            inputs["version"] = undefined /*out*/;
            inputs["versionSetId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super("azure:apimanagement/api:Api", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Api resources.
 */
export interface ApiState {
    /**
     * The Name of the API Management Service where this API should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName?: pulumi.Input<string>;
    /**
     * A description of the API Management API, which may include HTML formatting tags.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The display name of the API.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * A `import` block as documented below.
     */
    readonly import?: pulumi.Input<{ contentFormat: pulumi.Input<string>, contentValue: pulumi.Input<string>, wsdlSelector?: pulumi.Input<{ endpointName: pulumi.Input<string>, serviceName: pulumi.Input<string> }> }>;
    /**
     * Is this the current API Revision?
     */
    readonly isCurrent?: pulumi.Input<boolean>;
    /**
     * Is this API Revision online/accessible via the Gateway?
     */
    readonly isOnline?: pulumi.Input<boolean>;
    /**
     * The name of the API Management API. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The Path for this API Management API, which is a relative URL which uniquely identifies this API and all of it's resource paths within the API Management Service.
     */
    readonly path?: pulumi.Input<string>;
    /**
     * A list of protocols the operations in this API can be invoked. Possible values are `http` and `https`.
     */
    readonly protocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Name of the Resource Group where the API Management API exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The Revision which used for this API.
     */
    readonly revision?: pulumi.Input<string>;
    /**
     * Absolute URL of the backend service implementing this API.
     */
    readonly serviceUrl?: pulumi.Input<string>;
    /**
     * Should this API expose a SOAP frontend, rather than a HTTP frontend? Defaults to `false`.
     */
    readonly soapPassThrough?: pulumi.Input<boolean>;
    /**
     * A `subscription_key_parameter_names` block as documented below.
     */
    readonly subscriptionKeyParameterNames?: pulumi.Input<{ header: pulumi.Input<string>, query: pulumi.Input<string> }>;
    /**
     * The Version number of this API, if this API is versioned.
     */
    readonly version?: pulumi.Input<string>;
    /**
     * The ID of the Version Set which this API is associated with.
     */
    readonly versionSetId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Api resource.
 */
export interface ApiArgs {
    /**
     * The Name of the API Management Service where this API should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Input<string>;
    /**
     * A description of the API Management API, which may include HTML formatting tags.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The display name of the API.
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * A `import` block as documented below.
     */
    readonly import?: pulumi.Input<{ contentFormat: pulumi.Input<string>, contentValue: pulumi.Input<string>, wsdlSelector?: pulumi.Input<{ endpointName: pulumi.Input<string>, serviceName: pulumi.Input<string> }> }>;
    /**
     * The name of the API Management API. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The Path for this API Management API, which is a relative URL which uniquely identifies this API and all of it's resource paths within the API Management Service.
     */
    readonly path: pulumi.Input<string>;
    /**
     * A list of protocols the operations in this API can be invoked. Possible values are `http` and `https`.
     */
    readonly protocols: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Name of the Resource Group where the API Management API exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The Revision which used for this API.
     */
    readonly revision: pulumi.Input<string>;
    /**
     * Absolute URL of the backend service implementing this API.
     */
    readonly serviceUrl?: pulumi.Input<string>;
    /**
     * Should this API expose a SOAP frontend, rather than a HTTP frontend? Defaults to `false`.
     */
    readonly soapPassThrough?: pulumi.Input<boolean>;
    /**
     * A `subscription_key_parameter_names` block as documented below.
     */
    readonly subscriptionKeyParameterNames?: pulumi.Input<{ header: pulumi.Input<string>, query: pulumi.Input<string> }>;
}
