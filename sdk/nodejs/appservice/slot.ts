// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Manages an App Service Slot (within an App Service).
 * 
 * -> **Note:** When using Slots - the `app_settings`, `connection_string` and `site_config` blocks on the `azurerm_app_service` resource will be overwritten when promoting a Slot using the `azurerm_app_service_active_slot` resource.
 * 
 */
export class Slot extends pulumi.CustomResource {
    /**
     * Get an existing Slot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlotState): Slot {
        return new Slot(name, <any>state, { id });
    }

    /**
     * The name of the App Service within which to create the App Service Slot.  Changing this forces a new resource to be created.
     */
    public readonly appServiceName: pulumi.Output<string>;
    /**
     * The ID of the App Service Plan within which to create this App Service Slot. Changing this forces a new resource to be created.
     */
    public readonly appServicePlanId: pulumi.Output<string>;
    /**
     * A key-value pair of App Settings.
     */
    public readonly appSettings: pulumi.Output<{[key: string]: any}>;
    /**
     * Should the App Service Slot send session affinity cookies, which route client requests in the same session to the same instance? Changing this forces a new resource to be created.
     */
    public readonly clientAffinityEnabled: pulumi.Output<boolean>;
    /**
     * An `connection_string` block as defined below.
     */
    public readonly connectionStrings: pulumi.Output<{ name: string, type: string, value: string }[]>;
    /**
     * The Default Hostname associated with the App Service Slot - such as `mysite.azurewebsites.net`
     */
    public /*out*/ readonly defaultSiteHostname: pulumi.Output<string>;
    /**
     * Is the App Service Slot Enabled? Changing this forces a new resource to be created.
     */
    public readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Can the App Service Slot only be accessed via HTTPS? Defaults to `false`. Changing this forces a new resource to be created.
     */
    public readonly httpsOnly: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * The name of the Connection String.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the App Service Slot component.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `site_config` object as defined below.
     */
    public readonly siteConfig: pulumi.Output<{ alwaysOn?: boolean, defaultDocuments?: string[], dotnetFrameworkVersion?: string, http2Enabled?: boolean, ipRestrictions: { ipAddress: string, subnetMask?: string }[], javaContainer?: string, javaContainerVersion?: string, javaVersion?: string, localMysqlEnabled: boolean, managedPipelineMode: string, phpVersion?: string, pythonVersion?: string, remoteDebuggingEnabled?: boolean, remoteDebuggingVersion: string, scmType?: string, use32BitWorkerProcess: boolean, websocketsEnabled: boolean }>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a Slot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SlotArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: SlotArgs | SlotState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SlotState = argsOrState as SlotState | undefined;
            inputs["appServiceName"] = state ? state.appServiceName : undefined;
            inputs["appServicePlanId"] = state ? state.appServicePlanId : undefined;
            inputs["appSettings"] = state ? state.appSettings : undefined;
            inputs["clientAffinityEnabled"] = state ? state.clientAffinityEnabled : undefined;
            inputs["connectionStrings"] = state ? state.connectionStrings : undefined;
            inputs["defaultSiteHostname"] = state ? state.defaultSiteHostname : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["httpsOnly"] = state ? state.httpsOnly : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["siteConfig"] = state ? state.siteConfig : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as SlotArgs | undefined;
            if (!args || args.appServiceName === undefined) {
                throw new Error("Missing required property 'appServiceName'");
            }
            if (!args || args.appServicePlanId === undefined) {
                throw new Error("Missing required property 'appServicePlanId'");
            }
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["appServiceName"] = args ? args.appServiceName : undefined;
            inputs["appServicePlanId"] = args ? args.appServicePlanId : undefined;
            inputs["appSettings"] = args ? args.appSettings : undefined;
            inputs["clientAffinityEnabled"] = args ? args.clientAffinityEnabled : undefined;
            inputs["connectionStrings"] = args ? args.connectionStrings : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["httpsOnly"] = args ? args.httpsOnly : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["siteConfig"] = args ? args.siteConfig : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["defaultSiteHostname"] = undefined /*out*/;
        }
        super("azure:appservice/slot:Slot", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Slot resources.
 */
export interface SlotState {
    /**
     * The name of the App Service within which to create the App Service Slot.  Changing this forces a new resource to be created.
     */
    readonly appServiceName?: pulumi.Input<string>;
    /**
     * The ID of the App Service Plan within which to create this App Service Slot. Changing this forces a new resource to be created.
     */
    readonly appServicePlanId?: pulumi.Input<string>;
    /**
     * A key-value pair of App Settings.
     */
    readonly appSettings?: pulumi.Input<{[key: string]: any}>;
    /**
     * Should the App Service Slot send session affinity cookies, which route client requests in the same session to the same instance? Changing this forces a new resource to be created.
     */
    readonly clientAffinityEnabled?: pulumi.Input<boolean>;
    /**
     * An `connection_string` block as defined below.
     */
    readonly connectionStrings?: pulumi.Input<pulumi.Input<{ name: pulumi.Input<string>, type: pulumi.Input<string>, value: pulumi.Input<string> }>[]>;
    /**
     * The Default Hostname associated with the App Service Slot - such as `mysite.azurewebsites.net`
     */
    readonly defaultSiteHostname?: pulumi.Input<string>;
    /**
     * Is the App Service Slot Enabled? Changing this forces a new resource to be created.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Can the App Service Slot only be accessed via HTTPS? Defaults to `false`. Changing this forces a new resource to be created.
     */
    readonly httpsOnly?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Connection String.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the App Service Slot component.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `site_config` object as defined below.
     */
    readonly siteConfig?: pulumi.Input<{ alwaysOn?: pulumi.Input<boolean>, defaultDocuments?: pulumi.Input<pulumi.Input<string>[]>, dotnetFrameworkVersion?: pulumi.Input<string>, http2Enabled?: pulumi.Input<boolean>, ipRestrictions?: pulumi.Input<pulumi.Input<{ ipAddress: pulumi.Input<string>, subnetMask?: pulumi.Input<string> }>[]>, javaContainer?: pulumi.Input<string>, javaContainerVersion?: pulumi.Input<string>, javaVersion?: pulumi.Input<string>, localMysqlEnabled?: pulumi.Input<boolean>, managedPipelineMode?: pulumi.Input<string>, phpVersion?: pulumi.Input<string>, pythonVersion?: pulumi.Input<string>, remoteDebuggingEnabled?: pulumi.Input<boolean>, remoteDebuggingVersion?: pulumi.Input<string>, scmType?: pulumi.Input<string>, use32BitWorkerProcess?: pulumi.Input<boolean>, websocketsEnabled?: pulumi.Input<boolean> }>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a Slot resource.
 */
export interface SlotArgs {
    /**
     * The name of the App Service within which to create the App Service Slot.  Changing this forces a new resource to be created.
     */
    readonly appServiceName: pulumi.Input<string>;
    /**
     * The ID of the App Service Plan within which to create this App Service Slot. Changing this forces a new resource to be created.
     */
    readonly appServicePlanId: pulumi.Input<string>;
    /**
     * A key-value pair of App Settings.
     */
    readonly appSettings?: pulumi.Input<{[key: string]: any}>;
    /**
     * Should the App Service Slot send session affinity cookies, which route client requests in the same session to the same instance? Changing this forces a new resource to be created.
     */
    readonly clientAffinityEnabled?: pulumi.Input<boolean>;
    /**
     * An `connection_string` block as defined below.
     */
    readonly connectionStrings?: pulumi.Input<pulumi.Input<{ name: pulumi.Input<string>, type: pulumi.Input<string>, value: pulumi.Input<string> }>[]>;
    /**
     * Is the App Service Slot Enabled? Changing this forces a new resource to be created.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Can the App Service Slot only be accessed via HTTPS? Defaults to `false`. Changing this forces a new resource to be created.
     */
    readonly httpsOnly?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the Connection String.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the App Service Slot component.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `site_config` object as defined below.
     */
    readonly siteConfig?: pulumi.Input<{ alwaysOn?: pulumi.Input<boolean>, defaultDocuments?: pulumi.Input<pulumi.Input<string>[]>, dotnetFrameworkVersion?: pulumi.Input<string>, http2Enabled?: pulumi.Input<boolean>, ipRestrictions?: pulumi.Input<pulumi.Input<{ ipAddress: pulumi.Input<string>, subnetMask?: pulumi.Input<string> }>[]>, javaContainer?: pulumi.Input<string>, javaContainerVersion?: pulumi.Input<string>, javaVersion?: pulumi.Input<string>, localMysqlEnabled?: pulumi.Input<boolean>, managedPipelineMode?: pulumi.Input<string>, phpVersion?: pulumi.Input<string>, pythonVersion?: pulumi.Input<string>, remoteDebuggingEnabled?: pulumi.Input<boolean>, remoteDebuggingVersion?: pulumi.Input<string>, scmType?: pulumi.Input<string>, use32BitWorkerProcess?: pulumi.Input<boolean>, websocketsEnabled?: pulumi.Input<boolean> }>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
