// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an EventGrid Event Subscription
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const defaultResourceGroup = new azure.core.ResourceGroup("default", {
 *     location: "West US 2",
 *     name: "defaultResourceGroup",
 * });
 * const defaultAccount = new azure.storage.Account("default", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: defaultResourceGroup.location,
 *     name: "defaultStorageAccount",
 *     resourceGroupName: defaultResourceGroup.name,
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * const defaultQueue = new azure.storage.Queue("default", {
 *     name: "defaultStorageQueue",
 *     resourceGroupName: defaultResourceGroup.name,
 *     storageAccountName: defaultAccount.name,
 * });
 * const defaultEventGridEventSubscription = new azure.eventhub.EventGridEventSubscription("default", {
 *     name: "defaultEventSubscription",
 *     scope: defaultResourceGroup.id,
 *     storageQueueEndpoint: {
 *         queueName: defaultQueue.name,
 *         storageAccountId: defaultAccount.id,
 *     },
 * });
 * ```
 */
export class EventGridEventSubscription extends pulumi.CustomResource {
    /**
     * Get an existing EventGridEventSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventGridEventSubscriptionState, opts?: pulumi.CustomResourceOptions): EventGridEventSubscription {
        return new EventGridEventSubscription(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:eventhub/eventGridEventSubscription:EventGridEventSubscription';

    /**
     * Returns true if the given object is an instance of EventGridEventSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventGridEventSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventGridEventSubscription.__pulumiType;
    }

    /**
     * Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventV01Schema`, `CustomInputSchema`.
     */
    public readonly eventDeliverySchema!: pulumi.Output<string | undefined>;
    /**
     * A `eventhub_endpoint` block as defined below.
     */
    public readonly eventhubEndpoint!: pulumi.Output<{ eventhubId: string } | undefined>;
    /**
     * A `hybrid_connection_endpoint` block as defined below.
     */
    public readonly hybridConnectionEndpoint!: pulumi.Output<{ hybridConnectionId: string } | undefined>;
    /**
     * A list of applicable event types that need to be part of the event subscription.
     */
    public readonly includedEventTypes!: pulumi.Output<string[]>;
    /**
     * A list of labels to assign to the event subscription.
     */
    public readonly labels!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the name of the EventGrid Event Subscription resource. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A `retry_policy` block as defined below.
     */
    public readonly retryPolicy!: pulumi.Output<{ eventTimeToLive: number, maxDeliveryAttempts: number }>;
    /**
     * Specifies the scope at which the EventGrid Event Subscription should be created. Changing this forces a new resource to be created.
     */
    public readonly scope!: pulumi.Output<string>;
    /**
     * A `storage_blob_dead_letter_destination` block as defined below.
     */
    public readonly storageBlobDeadLetterDestination!: pulumi.Output<{ storageAccountId: string, storageBlobContainerName: string } | undefined>;
    /**
     * A `storage_queue_endpoint` block as defined below.
     */
    public readonly storageQueueEndpoint!: pulumi.Output<{ queueName: string, storageAccountId: string } | undefined>;
    /**
     * A `subject_filter` block as defined below.
     */
    public readonly subjectFilter!: pulumi.Output<{ caseSensitive?: boolean, subjectBeginsWith?: string, subjectEndsWith?: string } | undefined>;
    /**
     * Specifies the name of the topic to associate with the event subscription.
     */
    public readonly topicName!: pulumi.Output<string>;
    /**
     * A `webhook_endpoint` block as defined below.
     */
    public readonly webhookEndpoint!: pulumi.Output<{ url: string } | undefined>;

    /**
     * Create a EventGridEventSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventGridEventSubscriptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventGridEventSubscriptionArgs | EventGridEventSubscriptionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EventGridEventSubscriptionState | undefined;
            inputs["eventDeliverySchema"] = state ? state.eventDeliverySchema : undefined;
            inputs["eventhubEndpoint"] = state ? state.eventhubEndpoint : undefined;
            inputs["hybridConnectionEndpoint"] = state ? state.hybridConnectionEndpoint : undefined;
            inputs["includedEventTypes"] = state ? state.includedEventTypes : undefined;
            inputs["labels"] = state ? state.labels : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["retryPolicy"] = state ? state.retryPolicy : undefined;
            inputs["scope"] = state ? state.scope : undefined;
            inputs["storageBlobDeadLetterDestination"] = state ? state.storageBlobDeadLetterDestination : undefined;
            inputs["storageQueueEndpoint"] = state ? state.storageQueueEndpoint : undefined;
            inputs["subjectFilter"] = state ? state.subjectFilter : undefined;
            inputs["topicName"] = state ? state.topicName : undefined;
            inputs["webhookEndpoint"] = state ? state.webhookEndpoint : undefined;
        } else {
            const args = argsOrState as EventGridEventSubscriptionArgs | undefined;
            if (!args || args.scope === undefined) {
                throw new Error("Missing required property 'scope'");
            }
            inputs["eventDeliverySchema"] = args ? args.eventDeliverySchema : undefined;
            inputs["eventhubEndpoint"] = args ? args.eventhubEndpoint : undefined;
            inputs["hybridConnectionEndpoint"] = args ? args.hybridConnectionEndpoint : undefined;
            inputs["includedEventTypes"] = args ? args.includedEventTypes : undefined;
            inputs["labels"] = args ? args.labels : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["retryPolicy"] = args ? args.retryPolicy : undefined;
            inputs["scope"] = args ? args.scope : undefined;
            inputs["storageBlobDeadLetterDestination"] = args ? args.storageBlobDeadLetterDestination : undefined;
            inputs["storageQueueEndpoint"] = args ? args.storageQueueEndpoint : undefined;
            inputs["subjectFilter"] = args ? args.subjectFilter : undefined;
            inputs["topicName"] = args ? args.topicName : undefined;
            inputs["webhookEndpoint"] = args ? args.webhookEndpoint : undefined;
        }
        super(EventGridEventSubscription.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EventGridEventSubscription resources.
 */
export interface EventGridEventSubscriptionState {
    /**
     * Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventV01Schema`, `CustomInputSchema`.
     */
    readonly eventDeliverySchema?: pulumi.Input<string>;
    /**
     * A `eventhub_endpoint` block as defined below.
     */
    readonly eventhubEndpoint?: pulumi.Input<{ eventhubId: pulumi.Input<string> }>;
    /**
     * A `hybrid_connection_endpoint` block as defined below.
     */
    readonly hybridConnectionEndpoint?: pulumi.Input<{ hybridConnectionId: pulumi.Input<string> }>;
    /**
     * A list of applicable event types that need to be part of the event subscription.
     */
    readonly includedEventTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of labels to assign to the event subscription.
     */
    readonly labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the EventGrid Event Subscription resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `retry_policy` block as defined below.
     */
    readonly retryPolicy?: pulumi.Input<{ eventTimeToLive: pulumi.Input<number>, maxDeliveryAttempts: pulumi.Input<number> }>;
    /**
     * Specifies the scope at which the EventGrid Event Subscription should be created. Changing this forces a new resource to be created.
     */
    readonly scope?: pulumi.Input<string>;
    /**
     * A `storage_blob_dead_letter_destination` block as defined below.
     */
    readonly storageBlobDeadLetterDestination?: pulumi.Input<{ storageAccountId: pulumi.Input<string>, storageBlobContainerName: pulumi.Input<string> }>;
    /**
     * A `storage_queue_endpoint` block as defined below.
     */
    readonly storageQueueEndpoint?: pulumi.Input<{ queueName: pulumi.Input<string>, storageAccountId: pulumi.Input<string> }>;
    /**
     * A `subject_filter` block as defined below.
     */
    readonly subjectFilter?: pulumi.Input<{ caseSensitive?: pulumi.Input<boolean>, subjectBeginsWith?: pulumi.Input<string>, subjectEndsWith?: pulumi.Input<string> }>;
    /**
     * Specifies the name of the topic to associate with the event subscription.
     */
    readonly topicName?: pulumi.Input<string>;
    /**
     * A `webhook_endpoint` block as defined below.
     */
    readonly webhookEndpoint?: pulumi.Input<{ url: pulumi.Input<string> }>;
}

/**
 * The set of arguments for constructing a EventGridEventSubscription resource.
 */
export interface EventGridEventSubscriptionArgs {
    /**
     * Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventV01Schema`, `CustomInputSchema`.
     */
    readonly eventDeliverySchema?: pulumi.Input<string>;
    /**
     * A `eventhub_endpoint` block as defined below.
     */
    readonly eventhubEndpoint?: pulumi.Input<{ eventhubId: pulumi.Input<string> }>;
    /**
     * A `hybrid_connection_endpoint` block as defined below.
     */
    readonly hybridConnectionEndpoint?: pulumi.Input<{ hybridConnectionId: pulumi.Input<string> }>;
    /**
     * A list of applicable event types that need to be part of the event subscription.
     */
    readonly includedEventTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of labels to assign to the event subscription.
     */
    readonly labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the EventGrid Event Subscription resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A `retry_policy` block as defined below.
     */
    readonly retryPolicy?: pulumi.Input<{ eventTimeToLive: pulumi.Input<number>, maxDeliveryAttempts: pulumi.Input<number> }>;
    /**
     * Specifies the scope at which the EventGrid Event Subscription should be created. Changing this forces a new resource to be created.
     */
    readonly scope: pulumi.Input<string>;
    /**
     * A `storage_blob_dead_letter_destination` block as defined below.
     */
    readonly storageBlobDeadLetterDestination?: pulumi.Input<{ storageAccountId: pulumi.Input<string>, storageBlobContainerName: pulumi.Input<string> }>;
    /**
     * A `storage_queue_endpoint` block as defined below.
     */
    readonly storageQueueEndpoint?: pulumi.Input<{ queueName: pulumi.Input<string>, storageAccountId: pulumi.Input<string> }>;
    /**
     * A `subject_filter` block as defined below.
     */
    readonly subjectFilter?: pulumi.Input<{ caseSensitive?: pulumi.Input<boolean>, subjectBeginsWith?: pulumi.Input<string>, subjectEndsWith?: pulumi.Input<string> }>;
    /**
     * Specifies the name of the topic to associate with the event subscription.
     */
    readonly topicName?: pulumi.Input<string>;
    /**
     * A `webhook_endpoint` block as defined below.
     */
    readonly webhookEndpoint?: pulumi.Input<{ url: pulumi.Input<string> }>;
}
