// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cosmosdb

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a SQL Database within a Cosmos DB Account.
type SqlDatabase struct {
	s *pulumi.ResourceState
}

// NewSqlDatabase registers a new resource with the given unique name, arguments, and options.
func NewSqlDatabase(ctx *pulumi.Context,
	name string, args *SqlDatabaseArgs, opts ...pulumi.ResourceOpt) (*SqlDatabase, error) {
	if args == nil || args.AccountName == nil {
		return nil, errors.New("missing required argument 'AccountName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["accountName"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
	} else {
		inputs["accountName"] = args.AccountName
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	s, err := ctx.RegisterResource("azure:cosmosdb/sqlDatabase:SqlDatabase", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SqlDatabase{s: s}, nil
}

// GetSqlDatabase gets an existing SqlDatabase resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSqlDatabase(ctx *pulumi.Context,
	name string, id pulumi.ID, state *SqlDatabaseState, opts ...pulumi.ResourceOpt) (*SqlDatabase, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["accountName"] = state.AccountName
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
	}
	s, err := ctx.ReadResource("azure:cosmosdb/sqlDatabase:SqlDatabase", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SqlDatabase{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *SqlDatabase) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *SqlDatabase) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The name of the Cosmos DB SQL Database to create the table within. Changing this forces a new resource to be created.
func (r *SqlDatabase) AccountName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["accountName"])
}

// Specifies the name of the Cosmos DB SQL Database. Changing this forces a new resource to be created.
func (r *SqlDatabase) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which the Cosmos DB SQL Database is created. Changing this forces a new resource to be created.
func (r *SqlDatabase) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// Input properties used for looking up and filtering SqlDatabase resources.
type SqlDatabaseState struct {
	// The name of the Cosmos DB SQL Database to create the table within. Changing this forces a new resource to be created.
	AccountName interface{}
	// Specifies the name of the Cosmos DB SQL Database. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which the Cosmos DB SQL Database is created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}

// The set of arguments for constructing a SqlDatabase resource.
type SqlDatabaseArgs struct {
	// The name of the Cosmos DB SQL Database to create the table within. Changing this forces a new resource to be created.
	AccountName interface{}
	// Specifies the name of the Cosmos DB SQL Database. Changing this forces a new resource to be created.
	Name interface{}
	// The name of the resource group in which the Cosmos DB SQL Database is created. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
}