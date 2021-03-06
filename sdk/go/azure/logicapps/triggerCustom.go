// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package logicapps

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Custom Trigger within a Logic App Workflow
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/logic_app_trigger_custom.html.markdown.
type TriggerCustom struct {
	s *pulumi.ResourceState
}

// NewTriggerCustom registers a new resource with the given unique name, arguments, and options.
func NewTriggerCustom(ctx *pulumi.Context,
	name string, args *TriggerCustomArgs, opts ...pulumi.ResourceOpt) (*TriggerCustom, error) {
	if args == nil || args.Body == nil {
		return nil, errors.New("missing required argument 'Body'")
	}
	if args == nil || args.LogicAppId == nil {
		return nil, errors.New("missing required argument 'LogicAppId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["body"] = nil
		inputs["logicAppId"] = nil
		inputs["name"] = nil
	} else {
		inputs["body"] = args.Body
		inputs["logicAppId"] = args.LogicAppId
		inputs["name"] = args.Name
	}
	s, err := ctx.RegisterResource("azure:logicapps/triggerCustom:TriggerCustom", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &TriggerCustom{s: s}, nil
}

// GetTriggerCustom gets an existing TriggerCustom resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTriggerCustom(ctx *pulumi.Context,
	name string, id pulumi.ID, state *TriggerCustomState, opts ...pulumi.ResourceOpt) (*TriggerCustom, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["body"] = state.Body
		inputs["logicAppId"] = state.LogicAppId
		inputs["name"] = state.Name
	}
	s, err := ctx.ReadResource("azure:logicapps/triggerCustom:TriggerCustom", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &TriggerCustom{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *TriggerCustom) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *TriggerCustom) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Specifies the JSON Blob defining the Body of this Custom Trigger.
func (r *TriggerCustom) Body() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["body"])
}

// Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
func (r *TriggerCustom) LogicAppId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["logicAppId"])
}

// Specifies the name of the HTTP Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
func (r *TriggerCustom) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Input properties used for looking up and filtering TriggerCustom resources.
type TriggerCustomState struct {
	// Specifies the JSON Blob defining the Body of this Custom Trigger.
	Body interface{}
	// Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
	LogicAppId interface{}
	// Specifies the name of the HTTP Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
	Name interface{}
}

// The set of arguments for constructing a TriggerCustom resource.
type TriggerCustomArgs struct {
	// Specifies the JSON Blob defining the Body of this Custom Trigger.
	Body interface{}
	// Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
	LogicAppId interface{}
	// Specifies the name of the HTTP Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
	Name interface{}
}
