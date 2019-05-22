// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a policy set definition. 
 * 
 * > **NOTE:**  Policy set definitions (also known as policy initiatives) do not take effect until they are assigned to a scope using a Policy Set Assignment.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = new azure.policy.PolicySetDefinition("test", {
 *     displayName: "Test Policy Set",
 *     name: "testPolicySet",
 *     parameters: `    {
 *         "allowedLocations": {
 *             "type": "Array",
 *             "metadata": {
 *                 "description": "The list of allowed locations for resources.",
 *                 "displayName": "Allowed locations",
 *                 "strongType": "location"
 *             }
 *         }
 *     }
 * `,
 *     policyDefinitions: `    [
 *         {
 *             "parameters": {
 *                 "listOfAllowedLocations": {
 *                     "value": "[parameters('allowedLocations')]"
 *                 }
 *             },
 *             "policyDefinitionId": "/providers/Microsoft.Authorization/policyDefinitions/e765b5de-1225-4ba3-bd56-1ac6695af988"
 *         }
 *     ]
 * `,
 *     policyType: "Custom",
 * });
 * ```
 */
export class PolicySetDefinition extends pulumi.CustomResource {
    /**
     * Get an existing PolicySetDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicySetDefinitionState, opts?: pulumi.CustomResourceOptions): PolicySetDefinition {
        return new PolicySetDefinition(name, <any>state, { ...opts, id: id });
    }

    /**
     * The description of the policy set definition.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of the policy set definition.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The ID of the Management Group where this policy should be defined. Changing this forces a new resource to be created.
     */
    public readonly managementGroupId!: pulumi.Output<string | undefined>;
    /**
     * The metadata for the policy set definition. This is a json object representing additional metadata that should be stored with the policy definition.
     */
    public readonly metadata!: pulumi.Output<string | undefined>;
    /**
     * The name of the policy set definition. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Parameters for the policy set definition. This field is a json object that allows you to parameterize your policy definition.
     */
    public readonly parameters!: pulumi.Output<string | undefined>;
    /**
     * The policy definitions for the policy set definition. This is a json object representing the bundled policy definitions .
     */
    public readonly policyDefinitions!: pulumi.Output<string | undefined>;
    /**
     * The policy set type. Possible values are `BuiltIn` or `Custom`. Changing this forces a new resource to be created.
     */
    public readonly policyType!: pulumi.Output<string>;

    /**
     * Create a PolicySetDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicySetDefinitionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicySetDefinitionArgs | PolicySetDefinitionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PolicySetDefinitionState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["managementGroupId"] = state ? state.managementGroupId : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
            inputs["policyDefinitions"] = state ? state.policyDefinitions : undefined;
            inputs["policyType"] = state ? state.policyType : undefined;
        } else {
            const args = argsOrState as PolicySetDefinitionArgs | undefined;
            if (!args || args.displayName === undefined) {
                throw new Error("Missing required property 'displayName'");
            }
            if (!args || args.policyType === undefined) {
                throw new Error("Missing required property 'policyType'");
            }
            inputs["description"] = args ? args.description : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["managementGroupId"] = args ? args.managementGroupId : undefined;
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
            inputs["policyDefinitions"] = args ? args.policyDefinitions : undefined;
            inputs["policyType"] = args ? args.policyType : undefined;
        }
        super("azure:policy/policySetDefinition:PolicySetDefinition", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PolicySetDefinition resources.
 */
export interface PolicySetDefinitionState {
    /**
     * The description of the policy set definition.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The display name of the policy set definition.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * The ID of the Management Group where this policy should be defined. Changing this forces a new resource to be created.
     */
    readonly managementGroupId?: pulumi.Input<string>;
    /**
     * The metadata for the policy set definition. This is a json object representing additional metadata that should be stored with the policy definition.
     */
    readonly metadata?: pulumi.Input<string>;
    /**
     * The name of the policy set definition. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Parameters for the policy set definition. This field is a json object that allows you to parameterize your policy definition.
     */
    readonly parameters?: pulumi.Input<string>;
    /**
     * The policy definitions for the policy set definition. This is a json object representing the bundled policy definitions .
     */
    readonly policyDefinitions?: pulumi.Input<string>;
    /**
     * The policy set type. Possible values are `BuiltIn` or `Custom`. Changing this forces a new resource to be created.
     */
    readonly policyType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PolicySetDefinition resource.
 */
export interface PolicySetDefinitionArgs {
    /**
     * The description of the policy set definition.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The display name of the policy set definition.
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * The ID of the Management Group where this policy should be defined. Changing this forces a new resource to be created.
     */
    readonly managementGroupId?: pulumi.Input<string>;
    /**
     * The metadata for the policy set definition. This is a json object representing additional metadata that should be stored with the policy definition.
     */
    readonly metadata?: pulumi.Input<string>;
    /**
     * The name of the policy set definition. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Parameters for the policy set definition. This field is a json object that allows you to parameterize your policy definition.
     */
    readonly parameters?: pulumi.Input<string>;
    /**
     * The policy definitions for the policy set definition. This is a json object representing the bundled policy definitions .
     */
    readonly policyDefinitions?: pulumi.Input<string>;
    /**
     * The policy set type. Possible values are `BuiltIn` or `Custom`. Changing this forces a new resource to be created.
     */
    readonly policyType: pulumi.Input<string>;
}
