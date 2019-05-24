// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Image.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const search = pulumi.output(azure.compute.getImage({
 *     name: "search-api",
 *     resourceGroupName: "packerimages",
 * }));
 * 
 * export const imageId = search.id;
 * ```
 */
export function getImage(args: GetImageArgs, opts?: pulumi.InvokeOptions): Promise<GetImageResult> {
    return pulumi.runtime.invoke("azure:compute/getImage:getImage", {
        "name": args.name,
        "nameRegex": args.nameRegex,
        "resourceGroupName": args.resourceGroupName,
        "sortDescending": args.sortDescending,
    }, opts);
}

/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageArgs {
    /**
     * The name of the Image.
     */
    readonly name?: string;
    /**
     * Regex pattern of the image to match.
     */
    readonly nameRegex?: string;
    /**
     * The Name of the Resource Group where this Image exists.
     */
    readonly resourceGroupName: string;
    /**
     * By default when matching by regex, images are sorted by name in ascending order and the first match is chosen, to sort descending, set this flag.
     */
    readonly sortDescending?: boolean;
}

/**
 * A collection of values returned by getImage.
 */
export interface GetImageResult {
    /**
     * a collection of `data_disk` blocks as defined below.
     */
    readonly dataDisks: { blobUri: string, caching: string, lun: number, managedDiskId: string, sizeGb: number }[];
    /**
     * the Azure Location where this Image exists.
     */
    readonly location: string;
    /**
     * the name of the Image.
     */
    readonly name?: string;
    readonly nameRegex?: string;
    /**
     * a `os_disk` block as defined below.
     */
    readonly osDisks: { blobUri: string, caching: string, managedDiskId: string, osState: string, osType: string, sizeGb: number }[];
    readonly resourceGroupName: string;
    readonly sortDescending?: boolean;
    /**
     * a mapping of tags to assigned to the resource.
     */
    readonly tags: {[key: string]: any};
    /**
     * is zone resiliency enabled?
     */
    readonly zoneResilient: boolean;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
