// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Use this data source to access the properties of an Azure scheduler job collection.
 */
export function getJobCollection(args: GetJobCollectionArgs): Promise<GetJobCollectionResult> {
    return pulumi.runtime.invoke("azure:scheduler/getJobCollection:getJobCollection", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    });
}

/**
 * A collection of arguments for invoking getJobCollection.
 */
export interface GetJobCollectionArgs {
    /**
     * Specifies the name of the Scheduler Job Collection. 
     */
    readonly name: string;
    /**
     * Specifies the name of the resource group in which the Scheduler Job Collection resides. 
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getJobCollection.
 */
export interface GetJobCollectionResult {
    /**
     * The Azure location where the resource exists. 
     */
    readonly location: string;
    /**
     * The Job collection quotas as documented in the `quota` block below. 
     */
    readonly quotas: { maxJobCount: number, maxRecurrenceFrequency: string, maxRecurrenceInterval: number, maxRetryInterval: number }[];
    /**
     * The Job Collection's pricing level's SKU. 
     */
    readonly sku: string;
    /**
     * The Job Collection's state. 
     */
    readonly state: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {[key: string]: any};
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
