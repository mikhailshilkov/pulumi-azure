// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package datalake

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manage a Azure Data Lake Store File.
// 
// ~> **Note:** If you want to change the data in the remote file without changing the `local_file_path`, then 
// taint the resource so the `azurerm_data_lake_store_file` gets recreated with the new data.
type StoreFile struct {
	s *pulumi.ResourceState
}

// NewStoreFile registers a new resource with the given unique name, arguments, and options.
func NewStoreFile(ctx *pulumi.Context,
	name string, args *StoreFileArgs, opts ...pulumi.ResourceOpt) (*StoreFile, error) {
	if args == nil || args.AccountName == nil {
		return nil, errors.New("missing required argument 'AccountName'")
	}
	if args == nil || args.LocalFilePath == nil {
		return nil, errors.New("missing required argument 'LocalFilePath'")
	}
	if args == nil || args.RemoteFilePath == nil {
		return nil, errors.New("missing required argument 'RemoteFilePath'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["accountName"] = nil
		inputs["localFilePath"] = nil
		inputs["remoteFilePath"] = nil
	} else {
		inputs["accountName"] = args.AccountName
		inputs["localFilePath"] = args.LocalFilePath
		inputs["remoteFilePath"] = args.RemoteFilePath
	}
	s, err := ctx.RegisterResource("azure:datalake/storeFile:StoreFile", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &StoreFile{s: s}, nil
}

// GetStoreFile gets an existing StoreFile resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetStoreFile(ctx *pulumi.Context,
	name string, id pulumi.ID, state *StoreFileState, opts ...pulumi.ResourceOpt) (*StoreFile, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["accountName"] = state.AccountName
		inputs["localFilePath"] = state.LocalFilePath
		inputs["remoteFilePath"] = state.RemoteFilePath
	}
	s, err := ctx.ReadResource("azure:datalake/storeFile:StoreFile", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &StoreFile{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *StoreFile) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *StoreFile) ID() *pulumi.IDOutput {
	return r.s.ID
}

// Specifies the name of the Data Lake Store for which the File should created.
func (r *StoreFile) AccountName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["accountName"])
}

// The path to the local file to be added to the Data Lake Store.
func (r *StoreFile) LocalFilePath() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["localFilePath"])
}

// The path created for the file on the Data Lake Store.
func (r *StoreFile) RemoteFilePath() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["remoteFilePath"])
}

// Input properties used for looking up and filtering StoreFile resources.
type StoreFileState struct {
	// Specifies the name of the Data Lake Store for which the File should created.
	AccountName interface{}
	// The path to the local file to be added to the Data Lake Store.
	LocalFilePath interface{}
	// The path created for the file on the Data Lake Store.
	RemoteFilePath interface{}
}

// The set of arguments for constructing a StoreFile resource.
type StoreFileArgs struct {
	// Specifies the name of the Data Lake Store for which the File should created.
	AccountName interface{}
	// The path to the local file to be added to the Data Lake Store.
	LocalFilePath interface{}
	// The path created for the file on the Data Lake Store.
	RemoteFilePath interface{}
}