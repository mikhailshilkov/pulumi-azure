// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an Application Insights API key.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "tf-test",
 * });
 * const testInsights = new azure.appinsights.Insights("test", {
 *     applicationType: "web",
 *     location: "West Europe",
 *     name: "tf-test-appinsights",
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const authenticateSdkControlChannelApiKey = new azure.appinsights.ApiKey("authenticate_sdk_control_channel", {
 *     applicationInsightsId: testInsights.id,
 *     name: "tf-test-appinsights-authenticate-sdk-control-channel-api-key",
 *     readPermissions: ["agentconfig"],
 * });
 * const fullPermissions = new azure.appinsights.ApiKey("full_permissions", {
 *     applicationInsightsId: testInsights.id,
 *     name: "tf-test-appinsights-full-permissions-api-key",
 *     readPermissions: [
 *         "agentconfig",
 *         "aggregate",
 *         "api",
 *         "draft",
 *         "extendqueries",
 *         "search",
 *     ],
 *     writePermissions: ["annotations"],
 * });
 * const readTelemetry = new azure.appinsights.ApiKey("read_telemetry", {
 *     applicationInsightsId: testInsights.id,
 *     name: "tf-test-appinsights-read-telemetry-api-key",
 *     readPermissions: [
 *         "aggregate",
 *         "api",
 *         "draft",
 *         "extendqueries",
 *         "search",
 *     ],
 * });
 * const writeAnnotations = new azure.appinsights.ApiKey("write_annotations", {
 *     applicationInsightsId: testInsights.id,
 *     name: "tf-test-appinsights-write-annotations-api-key",
 *     writePermissions: ["annotations"],
 * });
 * 
 * export const authenticateSdkControlChannel = authenticateSdkControlChannelApiKey.apiKey;
 * export const fullPermissionsApiKey = fullPermissions.apiKey;
 * export const readTelemetryApiKey = readTelemetry.apiKey;
 * export const writeAnnotationsApiKey = writeAnnotations.apiKey;
 * ```
 */
export class ApiKey extends pulumi.CustomResource {
    /**
     * Get an existing ApiKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiKeyState, opts?: pulumi.CustomResourceOptions): ApiKey {
        return new ApiKey(name, <any>state, { ...opts, id: id });
    }

    /**
     * The API Key secret (Sensitive).
     */
    public /*out*/ readonly apiKey!: pulumi.Output<string>;
    /**
     * The ID of the Application Insights component on which the API key operates. Changing this forces a new resource to be created.
     */
    public readonly applicationInsightsId!: pulumi.Output<string>;
    /**
     * Specifies the name of the Application Insights API key. Changing this forces a
     * new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the list of read permissions granted to the API key. Valid values are `agentconfig`, `aggregate`, `api`, `draft`, `extendqueries`, `search`. Please note these values are case sensitive. Changing this forces a new resource to be created. 
     */
    public readonly readPermissions!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the list of write permissions granted to the API key. Valid values are `annotations`. Please note these values are case sensitive. Changing this forces a new resource to be created.
     */
    public readonly writePermissions!: pulumi.Output<string[] | undefined>;

    /**
     * Create a ApiKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiKeyArgs | ApiKeyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ApiKeyState | undefined;
            inputs["apiKey"] = state ? state.apiKey : undefined;
            inputs["applicationInsightsId"] = state ? state.applicationInsightsId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["readPermissions"] = state ? state.readPermissions : undefined;
            inputs["writePermissions"] = state ? state.writePermissions : undefined;
        } else {
            const args = argsOrState as ApiKeyArgs | undefined;
            if (!args || args.applicationInsightsId === undefined) {
                throw new Error("Missing required property 'applicationInsightsId'");
            }
            inputs["applicationInsightsId"] = args ? args.applicationInsightsId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["readPermissions"] = args ? args.readPermissions : undefined;
            inputs["writePermissions"] = args ? args.writePermissions : undefined;
            inputs["apiKey"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super("azure:appinsights/apiKey:ApiKey", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ApiKey resources.
 */
export interface ApiKeyState {
    /**
     * The API Key secret (Sensitive).
     */
    readonly apiKey?: pulumi.Input<string>;
    /**
     * The ID of the Application Insights component on which the API key operates. Changing this forces a new resource to be created.
     */
    readonly applicationInsightsId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Application Insights API key. Changing this forces a
     * new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the list of read permissions granted to the API key. Valid values are `agentconfig`, `aggregate`, `api`, `draft`, `extendqueries`, `search`. Please note these values are case sensitive. Changing this forces a new resource to be created. 
     */
    readonly readPermissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the list of write permissions granted to the API key. Valid values are `annotations`. Please note these values are case sensitive. Changing this forces a new resource to be created.
     */
    readonly writePermissions?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ApiKey resource.
 */
export interface ApiKeyArgs {
    /**
     * The ID of the Application Insights component on which the API key operates. Changing this forces a new resource to be created.
     */
    readonly applicationInsightsId: pulumi.Input<string>;
    /**
     * Specifies the name of the Application Insights API key. Changing this forces a
     * new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the list of read permissions granted to the API key. Valid values are `agentconfig`, `aggregate`, `api`, `draft`, `extendqueries`, `search`. Please note these values are case sensitive. Changing this forces a new resource to be created. 
     */
    readonly readPermissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the list of write permissions granted to the API key. Valid values are `annotations`. Please note these values are case sensitive. Changing this forces a new resource to be created.
     */
    readonly writePermissions?: pulumi.Input<pulumi.Input<string>[]>;
}
