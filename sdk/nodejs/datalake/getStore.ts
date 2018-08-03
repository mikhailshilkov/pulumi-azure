// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Use this data source to obtain information about a Data Lake Store.
 */
export function getStore(args: GetStoreArgs): Promise<GetStoreResult> {
    return pulumi.runtime.invoke("azure:datalake/getStore:getStore", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    });
}

/**
 * A collection of arguments for invoking getStore.
 */
export interface GetStoreArgs {
    /**
     * The name of the Data Lake Store.
     */
    readonly name: string;
    /**
     * The Name of the Resource Group where the Data Lake Store exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getStore.
 */
export interface GetStoreResult {
    readonly location: string;
    /**
     * A mapping of tags to assign to the Data Lake Store.
     */
    readonly tags: {[key: string]: any};
    /**
     * Current monthly commitment tier for the account.
     */
    readonly tier: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
