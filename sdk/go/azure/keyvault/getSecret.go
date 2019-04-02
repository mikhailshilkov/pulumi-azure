// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package keyvault

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing Key Vault Secret.
// 
// > **Note:** All arguments including the secret value will be stored in the raw state as plain-text.
// [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
func LookupSecret(ctx *pulumi.Context, args *GetSecretArgs) (*GetSecretResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["keyVaultId"] = args.KeyVaultId
		inputs["name"] = args.Name
		inputs["vaultUri"] = args.VaultUri
	}
	outputs, err := ctx.Invoke("azure:keyvault/getSecret:getSecret", inputs)
	if err != nil {
		return nil, err
	}
	return &GetSecretResult{
		ContentType: outputs["contentType"],
		KeyVaultId: outputs["keyVaultId"],
		Name: outputs["name"],
		Tags: outputs["tags"],
		Value: outputs["value"],
		VaultUri: outputs["vaultUri"],
		Version: outputs["version"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getSecret.
type GetSecretArgs struct {
	KeyVaultId interface{}
	// Specifies the name of the Key Vault Secret.
	Name interface{}
	// Specifies the ID of the Key Vault Key Vault instance where the Secret resides, available on the `azurerm_key_vault` Data Source / Resource.
	VaultUri interface{}
}

// A collection of values returned by getSecret.
type GetSecretResult struct {
	// The content type for the Key Vault Secret.
	ContentType interface{}
	KeyVaultId interface{}
	Name interface{}
	// Any tags assigned to this resource.
	Tags interface{}
	// The value of the Key Vault Secret.
	Value interface{}
	VaultUri interface{}
	// The current version of the Key Vault Secret.
	Version interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
