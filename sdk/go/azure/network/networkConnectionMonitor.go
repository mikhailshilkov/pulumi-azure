// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Configures a Network Connection Monitor to monitor communication between a Virtual Machine and an endpoint using a Network Watcher.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/network_connection_monitor.html.markdown.
type NetworkConnectionMonitor struct {
	s *pulumi.ResourceState
}

// NewNetworkConnectionMonitor registers a new resource with the given unique name, arguments, and options.
func NewNetworkConnectionMonitor(ctx *pulumi.Context,
	name string, args *NetworkConnectionMonitorArgs, opts ...pulumi.ResourceOpt) (*NetworkConnectionMonitor, error) {
	if args == nil || args.Destination == nil {
		return nil, errors.New("missing required argument 'Destination'")
	}
	if args == nil || args.NetworkWatcherName == nil {
		return nil, errors.New("missing required argument 'NetworkWatcherName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Source == nil {
		return nil, errors.New("missing required argument 'Source'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["autoStart"] = nil
		inputs["destination"] = nil
		inputs["intervalInSeconds"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["networkWatcherName"] = nil
		inputs["resourceGroupName"] = nil
		inputs["source"] = nil
		inputs["tags"] = nil
	} else {
		inputs["autoStart"] = args.AutoStart
		inputs["destination"] = args.Destination
		inputs["intervalInSeconds"] = args.IntervalInSeconds
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["networkWatcherName"] = args.NetworkWatcherName
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["source"] = args.Source
		inputs["tags"] = args.Tags
	}
	s, err := ctx.RegisterResource("azure:network/networkConnectionMonitor:NetworkConnectionMonitor", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &NetworkConnectionMonitor{s: s}, nil
}

// GetNetworkConnectionMonitor gets an existing NetworkConnectionMonitor resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNetworkConnectionMonitor(ctx *pulumi.Context,
	name string, id pulumi.ID, state *NetworkConnectionMonitorState, opts ...pulumi.ResourceOpt) (*NetworkConnectionMonitor, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["autoStart"] = state.AutoStart
		inputs["destination"] = state.Destination
		inputs["intervalInSeconds"] = state.IntervalInSeconds
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["networkWatcherName"] = state.NetworkWatcherName
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["source"] = state.Source
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:network/networkConnectionMonitor:NetworkConnectionMonitor", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &NetworkConnectionMonitor{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *NetworkConnectionMonitor) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *NetworkConnectionMonitor) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Specifies whether the connection monitor will start automatically once created. Defaults to `true`. Changing this forces a new resource to be created.
func (r *NetworkConnectionMonitor) AutoStart() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["autoStart"])
}

// A `destination` block as defined below.
func (r *NetworkConnectionMonitor) Destination() *pulumi.Output {
	return r.s.State["destination"]
}

// Monitoring interval in seconds. Defaults to `60`.
func (r *NetworkConnectionMonitor) IntervalInSeconds() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["intervalInSeconds"])
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *NetworkConnectionMonitor) Location() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["location"])
}

// The name of the Network Connection Monitor. Changing this forces a new resource to be created.
func (r *NetworkConnectionMonitor) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The name of the Network Watcher. Changing this forces a new resource to be created.
func (r *NetworkConnectionMonitor) NetworkWatcherName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["networkWatcherName"])
}

// The name of the resource group in which to create the Connection Monitor. Changing this forces a new resource to be created.
func (r *NetworkConnectionMonitor) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// A `source` block as defined below.
func (r *NetworkConnectionMonitor) Source() *pulumi.Output {
	return r.s.State["source"]
}

// A mapping of tags to assign to the resource.
func (r *NetworkConnectionMonitor) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering NetworkConnectionMonitor resources.
type NetworkConnectionMonitorState struct {
	// Specifies whether the connection monitor will start automatically once created. Defaults to `true`. Changing this forces a new resource to be created.
	AutoStart interface{}
	// A `destination` block as defined below.
	Destination interface{}
	// Monitoring interval in seconds. Defaults to `60`.
	IntervalInSeconds interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// The name of the Network Connection Monitor. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the Network Watcher. Changing this forces a new resource to be created.
	NetworkWatcherName interface{}
	// The name of the resource group in which to create the Connection Monitor. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `source` block as defined below.
	Source interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a NetworkConnectionMonitor resource.
type NetworkConnectionMonitorArgs struct {
	// Specifies whether the connection monitor will start automatically once created. Defaults to `true`. Changing this forces a new resource to be created.
	AutoStart interface{}
	// A `destination` block as defined below.
	Destination interface{}
	// Monitoring interval in seconds. Defaults to `60`.
	IntervalInSeconds interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// The name of the Network Connection Monitor. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the Network Watcher. Changing this forces a new resource to be created.
	NetworkWatcherName interface{}
	// The name of the resource group in which to create the Connection Monitor. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A `source` block as defined below.
	Source interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
