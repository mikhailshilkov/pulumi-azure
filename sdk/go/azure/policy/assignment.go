// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package policy

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Configures the specified Policy Definition at the specified Scope. Also, Policy Set Definitions are supported.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/policy_assignment.html.markdown.
type Assignment struct {
	s *pulumi.ResourceState
}

// NewAssignment registers a new resource with the given unique name, arguments, and options.
func NewAssignment(ctx *pulumi.Context,
	name string, args *AssignmentArgs, opts ...pulumi.ResourceOpt) (*Assignment, error) {
	if args == nil || args.PolicyDefinitionId == nil {
		return nil, errors.New("missing required argument 'PolicyDefinitionId'")
	}
	if args == nil || args.Scope == nil {
		return nil, errors.New("missing required argument 'Scope'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["description"] = nil
		inputs["displayName"] = nil
		inputs["identity"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["notScopes"] = nil
		inputs["parameters"] = nil
		inputs["policyDefinitionId"] = nil
		inputs["scope"] = nil
	} else {
		inputs["description"] = args.Description
		inputs["displayName"] = args.DisplayName
		inputs["identity"] = args.Identity
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["notScopes"] = args.NotScopes
		inputs["parameters"] = args.Parameters
		inputs["policyDefinitionId"] = args.PolicyDefinitionId
		inputs["scope"] = args.Scope
	}
	s, err := ctx.RegisterResource("azure:policy/assignment:Assignment", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Assignment{s: s}, nil
}

// GetAssignment gets an existing Assignment resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAssignment(ctx *pulumi.Context,
	name string, id pulumi.ID, state *AssignmentState, opts ...pulumi.ResourceOpt) (*Assignment, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["description"] = state.Description
		inputs["displayName"] = state.DisplayName
		inputs["identity"] = state.Identity
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["notScopes"] = state.NotScopes
		inputs["parameters"] = state.Parameters
		inputs["policyDefinitionId"] = state.PolicyDefinitionId
		inputs["scope"] = state.Scope
	}
	s, err := ctx.ReadResource("azure:policy/assignment:Assignment", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Assignment{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Assignment) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Assignment) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// A description to use for this Policy Assignment. Changing this forces a new resource to be created.
func (r *Assignment) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// A friendly display name to use for this Policy Assignment. Changing this forces a new resource to be created.
func (r *Assignment) DisplayName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["displayName"])
}

// An `identity` block.
func (r *Assignment) Identity() *pulumi.Output {
	return r.s.State["identity"]
}

// The Azure location where this policy assignment should exist. This is required when an Identity is assigned. Changing this forces a new resource to be created.
func (r *Assignment) Location() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["location"])
}

// The name of the Policy Assignment. Changing this forces a new resource to be created.
func (r *Assignment) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// A list of the Policy Assignment's excluded scopes. The list must contain Resource IDs (such as Subscriptions e.g. `/subscriptions/00000000-0000-0000-000000000000` or Resource Groups e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`). 
func (r *Assignment) NotScopes() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["notScopes"])
}

// Parameters for the policy definition. This field is a JSON object that maps to the Parameters field from the Policy Definition. Changing this forces a new resource to be created.
func (r *Assignment) Parameters() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["parameters"])
}

// The ID of the Policy Definition to be applied at the specified Scope.
func (r *Assignment) PolicyDefinitionId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["policyDefinitionId"])
}

func (r *Assignment) Scope() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["scope"])
}

// Input properties used for looking up and filtering Assignment resources.
type AssignmentState struct {
	// A description to use for this Policy Assignment. Changing this forces a new resource to be created.
	Description interface{}
	// A friendly display name to use for this Policy Assignment. Changing this forces a new resource to be created.
	DisplayName interface{}
	// An `identity` block.
	Identity interface{}
	// The Azure location where this policy assignment should exist. This is required when an Identity is assigned. Changing this forces a new resource to be created.
	Location interface{}
	// The name of the Policy Assignment. Changing this forces a new resource to be created.
	Name interface{}
	// A list of the Policy Assignment's excluded scopes. The list must contain Resource IDs (such as Subscriptions e.g. `/subscriptions/00000000-0000-0000-000000000000` or Resource Groups e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`). 
	NotScopes interface{}
	// Parameters for the policy definition. This field is a JSON object that maps to the Parameters field from the Policy Definition. Changing this forces a new resource to be created.
	Parameters interface{}
	// The ID of the Policy Definition to be applied at the specified Scope.
	PolicyDefinitionId interface{}
	Scope interface{}
}

// The set of arguments for constructing a Assignment resource.
type AssignmentArgs struct {
	// A description to use for this Policy Assignment. Changing this forces a new resource to be created.
	Description interface{}
	// A friendly display name to use for this Policy Assignment. Changing this forces a new resource to be created.
	DisplayName interface{}
	// An `identity` block.
	Identity interface{}
	// The Azure location where this policy assignment should exist. This is required when an Identity is assigned. Changing this forces a new resource to be created.
	Location interface{}
	// The name of the Policy Assignment. Changing this forces a new resource to be created.
	Name interface{}
	// A list of the Policy Assignment's excluded scopes. The list must contain Resource IDs (such as Subscriptions e.g. `/subscriptions/00000000-0000-0000-000000000000` or Resource Groups e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`). 
	NotScopes interface{}
	// Parameters for the policy definition. This field is a JSON object that maps to the Parameters field from the Policy Definition. Changing this forces a new resource to be created.
	Parameters interface{}
	// The ID of the Policy Definition to be applied at the specified Scope.
	PolicyDefinitionId interface{}
	Scope interface{}
}
