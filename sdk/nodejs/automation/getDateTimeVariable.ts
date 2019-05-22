// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Automation Datetime Variable.
 * 
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const example = pulumi.output(azure.automation.getDateTimeVariable({
 *     automationAccountName: "tfex-example-account",
 *     name: "tfex-example-var",
 *     resourceGroupName: "tfex-example-rg",
 * }));
 * 
 * export const variableId = example.id;
 * ```
 */
export function getDateTimeVariable(args: GetDateTimeVariableArgs, opts?: pulumi.InvokeOptions): Promise<GetDateTimeVariableResult> {
    return pulumi.runtime.invoke("azure:automation/getDateTimeVariable:getDateTimeVariable", {
        "automationAccountName": args.automationAccountName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

/**
 * A collection of arguments for invoking getDateTimeVariable.
 */
export interface GetDateTimeVariableArgs {
    /**
     * The name of the automation account in which the Automation Variable exists.
     */
    readonly automationAccountName: string;
    /**
     * The name of the Automation Variable.
     */
    readonly name: string;
    /**
     * The Name of the Resource Group where the automation account exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getDateTimeVariable.
 */
export interface GetDateTimeVariableResult {
    readonly automationAccountName: string;
    /**
     * The description of the Automation Variable.
     */
    readonly description: string;
    /**
     * Specifies if the Automation Variable is encrypted. Defaults to `false`.
     */
    readonly encrypted: boolean;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The value of the Automation Variable in the [RFC3339 Section 5.6 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6).
     */
    readonly value: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
