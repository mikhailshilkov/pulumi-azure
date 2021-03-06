// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Role Definition.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const builtin = pulumi.output(azure.role.getBuiltinRoleDefinition({
 *     name: "Contributor",
 * }));
 * const primary = pulumi.output(azure.core.getSubscription({}));
 * const customDefinition = new azure.role.Definition("custom", {
 *     name: "CustomRoleDef",
 *     roleDefinitionId: "00000000-0000-0000-0000-000000000000",
 *     scope: primary.id,
 * });
 * const customRoleDefinition = pulumi.all([customDefinition.roleDefinitionId, primary]).apply(([roleDefinitionId, primary]) => azure.role.getRoleDefinition({
 *     roleDefinitionId: roleDefinitionId,
 *     scope: primary.id,
 * }));
 * const custom_byname = pulumi.all([customDefinition.name, primary]).apply(([name, primary]) => azure.role.getRoleDefinition({
 *     name: name,
 *     scope: primary.id,
 * }));
 * 
 * export const contributorRoleDefinitionId = azurerm_role_definition_builtin.id;
 * export const customRoleDefinitionId = customRoleDefinition.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/role_definition.html.markdown.
 */
export function getRoleDefinition(args?: GetRoleDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleDefinitionResult> & GetRoleDefinitionResult {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetRoleDefinitionResult> = pulumi.runtime.invoke("azure:role/getRoleDefinition:getRoleDefinition", {
        "name": args.name,
        "roleDefinitionId": args.roleDefinitionId,
        "scope": args.scope,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getRoleDefinition.
 */
export interface GetRoleDefinitionArgs {
    /**
     * Specifies the Name of either a built-in or custom Role Definition.
     */
    readonly name?: string;
    /**
     * Specifies the ID of the Role Definition as a UUID/GUID.
     */
    readonly roleDefinitionId?: string;
    /**
     * Specifies the Scope at which the Custom Role Definition exists.
     */
    readonly scope?: string;
}

/**
 * A collection of values returned by getRoleDefinition.
 */
export interface GetRoleDefinitionResult {
    /**
     * One or more assignable scopes for this Role Definition, such as `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333`, `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup`, or `/subscriptions/0b1f6471-1bf0-4dda-aec3-111122223333/resourceGroups/myGroup/providers/Microsoft.Compute/virtualMachines/myVM`.
     */
    readonly assignableScopes: string[];
    /**
     * the Description of the built-in Role.
     */
    readonly description: string;
    readonly name: string;
    /**
     * a `permissions` block as documented below.
     */
    readonly permissions: { actions: string[], dataActions?: string[], notActions: string[], notDataActions?: string[] }[];
    readonly roleDefinitionId: string;
    readonly scope?: string;
    /**
     * the Type of the Role.
     */
    readonly type: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
