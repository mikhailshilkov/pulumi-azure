// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package lb

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing Load Balancer Backend Address Pool.
func LookupBackendAddressPool(ctx *pulumi.Context, args *GetBackendAddressPoolArgs) (*GetBackendAddressPoolResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["loadbalancerId"] = args.LoadbalancerId
		inputs["name"] = args.Name
	}
	outputs, err := ctx.Invoke("azure:lb/getBackendAddressPool:getBackendAddressPool", inputs)
	if err != nil {
		return nil, err
	}
	return &GetBackendAddressPoolResult{
		LoadbalancerId: outputs["loadbalancerId"],
		Name: outputs["name"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getBackendAddressPool.
type GetBackendAddressPoolArgs struct {
	// The ID of the Load Balancer in which the Backend Address Pool exists.
	LoadbalancerId interface{}
	// Specifies the name of the Backend Address Pool.
	Name interface{}
}

// A collection of values returned by getBackendAddressPool.
type GetBackendAddressPoolResult struct {
	LoadbalancerId interface{}
	Name interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
