// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Firewall Rule associated with a Redis Cache.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as random from "@pulumi/random";
 * 
 * const testResourceGroup = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "redis-resourcegroup",
 * });
 * const server = new random.RandomId("server", {
 *     byteLength: 8,
 *     keepers: {
 *         azi_id: 1,
 *     },
 * });
 * const testCache = new azure.redis.Cache("test", {
 *     capacity: 1,
 *     enableNonSslPort: false,
 *     family: "P",
 *     location: testResourceGroup.location,
 *     name: pulumi.interpolate`redis${server.hex}`,
 *     redisConfiguration: {
 *         maxclients: 256,
 *         maxmemoryDelta: 2,
 *         maxmemoryPolicy: "allkeys-lru",
 *         maxmemoryReserved: 2,
 *     },
 *     resourceGroupName: testResourceGroup.name,
 *     skuName: "Premium",
 * });
 * const testFirewallRule = new azure.redis.FirewallRule("test", {
 *     endIp: "2.3.4.5",
 *     name: "someIPrange",
 *     redisCacheName: testCache.name,
 *     resourceGroupName: testResourceGroup.name,
 *     startIp: "1.2.3.4",
 * });
 * ```
 */
export class FirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing FirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallRuleState, opts?: pulumi.CustomResourceOptions): FirewallRule {
        return new FirewallRule(name, <any>state, { ...opts, id: id });
    }

    /**
     * The highest IP address included in the range.
     */
    public readonly endIp!: pulumi.Output<string>;
    /**
     * The name of the Firewall Rule. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the Redis Cache. Changing this forces a new resource to be created.
     */
    public readonly redisCacheName!: pulumi.Output<string>;
    /**
     * The name of the resource group in which this Redis Cache exists.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The lowest IP address included in the range
     */
    public readonly startIp!: pulumi.Output<string>;

    /**
     * Create a FirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallRuleArgs | FirewallRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FirewallRuleState | undefined;
            inputs["endIp"] = state ? state.endIp : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["redisCacheName"] = state ? state.redisCacheName : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["startIp"] = state ? state.startIp : undefined;
        } else {
            const args = argsOrState as FirewallRuleArgs | undefined;
            if (!args || args.endIp === undefined) {
                throw new Error("Missing required property 'endIp'");
            }
            if (!args || args.redisCacheName === undefined) {
                throw new Error("Missing required property 'redisCacheName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.startIp === undefined) {
                throw new Error("Missing required property 'startIp'");
            }
            inputs["endIp"] = args ? args.endIp : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["redisCacheName"] = args ? args.redisCacheName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["startIp"] = args ? args.startIp : undefined;
        }
        super("azure:redis/firewallRule:FirewallRule", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering FirewallRule resources.
 */
export interface FirewallRuleState {
    /**
     * The highest IP address included in the range.
     */
    readonly endIp?: pulumi.Input<string>;
    /**
     * The name of the Firewall Rule. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Redis Cache. Changing this forces a new resource to be created.
     */
    readonly redisCacheName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which this Redis Cache exists.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The lowest IP address included in the range
     */
    readonly startIp?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallRule resource.
 */
export interface FirewallRuleArgs {
    /**
     * The highest IP address included in the range.
     */
    readonly endIp: pulumi.Input<string>;
    /**
     * The name of the Firewall Rule. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Redis Cache. Changing this forces a new resource to be created.
     */
    readonly redisCacheName: pulumi.Input<string>;
    /**
     * The name of the resource group in which this Redis Cache exists.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The lowest IP address included in the range
     */
    readonly startIp: pulumi.Input<string>;
}
