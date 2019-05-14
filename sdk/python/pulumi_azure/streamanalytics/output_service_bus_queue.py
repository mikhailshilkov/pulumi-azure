# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class OutputServiceBusQueue(pulumi.CustomResource):
    name: pulumi.Output[str]
    """
    The name of the Stream Output. Changing this forces a new resource to be created.
    """
    queue_name: pulumi.Output[str]
    """
    The name of the Service Bus Queue.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
    """
    serialization: pulumi.Output[dict]
    """
    A `serialization` block as defined below.
    """
    servicebus_namespace: pulumi.Output[str]
    """
    The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc.
    """
    shared_access_policy_key: pulumi.Output[str]
    """
    The shared access policy key for the specified shared access policy.
    """
    shared_access_policy_name: pulumi.Output[str]
    """
    The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc.
    """
    stream_analytics_job_name: pulumi.Output[str]
    """
    The name of the Stream Analytics Job. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, name=None, queue_name=None, resource_group_name=None, serialization=None, servicebus_namespace=None, shared_access_policy_key=None, shared_access_policy_name=None, stream_analytics_job_name=None, __name__=None, __opts__=None):
        """
        Manages a Stream Analytics Output to a ServiceBus Queue.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: The name of the Stream Output. Changing this forces a new resource to be created.
        :param pulumi.Input[str] queue_name: The name of the Service Bus Queue.
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] serialization: A `serialization` block as defined below.
        :param pulumi.Input[str] servicebus_namespace: The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc.
        :param pulumi.Input[str] shared_access_policy_key: The shared access policy key for the specified shared access policy.
        :param pulumi.Input[str] shared_access_policy_name: The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc.
        :param pulumi.Input[str] stream_analytics_job_name: The name of the Stream Analytics Job. Changing this forces a new resource to be created.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['name'] = name

        if queue_name is None:
            raise TypeError("Missing required property 'queue_name'")
        __props__['queue_name'] = queue_name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if serialization is None:
            raise TypeError("Missing required property 'serialization'")
        __props__['serialization'] = serialization

        if servicebus_namespace is None:
            raise TypeError("Missing required property 'servicebus_namespace'")
        __props__['servicebus_namespace'] = servicebus_namespace

        if shared_access_policy_key is None:
            raise TypeError("Missing required property 'shared_access_policy_key'")
        __props__['shared_access_policy_key'] = shared_access_policy_key

        if shared_access_policy_name is None:
            raise TypeError("Missing required property 'shared_access_policy_name'")
        __props__['shared_access_policy_name'] = shared_access_policy_name

        if stream_analytics_job_name is None:
            raise TypeError("Missing required property 'stream_analytics_job_name'")
        __props__['stream_analytics_job_name'] = stream_analytics_job_name

        if opts is None:
            opts = pulumi.ResourceOptions()
        if opts.version is None:
            opts.version = utilities.get_version()
        super(OutputServiceBusQueue, __self__).__init__(
            'azure:streamanalytics/outputServiceBusQueue:OutputServiceBusQueue',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

