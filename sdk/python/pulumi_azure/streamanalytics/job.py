# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Job(pulumi.CustomResource):
    compatibility_level: pulumi.Output[str]
    """
    Specifies the compatibility level for this job - which controls certain runtime behaviors of the streaming job. Possible values are `1.0` and 1.1`.
    """
    data_locale: pulumi.Output[str]
    """
    Specifies the Data Locale of the Job, which [should be a supported .NET Culture](https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx).
    """
    events_late_arrival_max_delay_in_seconds: pulumi.Output[float]
    """
    Specifies the maximum tolerable delay in seconds where events arriving late could be included. Supported range is `-1` (indefinite) to `1814399` (20d 23h 59m 59s).
    """
    events_out_of_order_max_delay_in_seconds: pulumi.Output[float]
    """
    Specifies the maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order. Supported range is `0` to `599` (9m 59s).
    """
    events_out_of_order_policy: pulumi.Output[str]
    """
    Specifies the policy which should be applied to events which arrive out of order in the input event stream. Possible values are `Adjust` and `Drop`.
    """
    job_id: pulumi.Output[str]
    """
    The Job ID assigned by the Stream Analytics Job.
    """
    location: pulumi.Output[str]
    """
    The Azure Region in which the Resource Group exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    The name of the Stream Analytics Job. Changing this forces a new resource to be created.
    """
    output_error_policy: pulumi.Output[str]
    """
    Specifies the policy which should be applied to events which arrive at the output and cannot be written to the external storage due to being malformed (such as missing column values, column values of wrong type or size). Possible values are `Drop` and `Stop`. 
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the Resource Group where the Stream Analytics Job should exist. Changing this forces a new resource to be created.
    """
    streaming_units: pulumi.Output[float]
    """
    Specifies the number of streaming units that the streaming job uses. Supported values are `1`, `3`, `6` and multiples of `6` up to `120`.
    """
    transformation_query: pulumi.Output[str]
    """
    Specifies the query that will be run in the streaming job, [written in Stream Analytics Query Language (SAQL)](https://msdn.microsoft.com/library/azure/dn834998).
    """
    def __init__(__self__, resource_name, opts=None, compatibility_level=None, data_locale=None, events_late_arrival_max_delay_in_seconds=None, events_out_of_order_max_delay_in_seconds=None, events_out_of_order_policy=None, location=None, name=None, output_error_policy=None, resource_group_name=None, streaming_units=None, transformation_query=None, __name__=None, __opts__=None):
        """
        Manages a Stream Analytics Job.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] compatibility_level: Specifies the compatibility level for this job - which controls certain runtime behaviors of the streaming job. Possible values are `1.0` and 1.1`.
        :param pulumi.Input[str] data_locale: Specifies the Data Locale of the Job, which [should be a supported .NET Culture](https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx).
        :param pulumi.Input[float] events_late_arrival_max_delay_in_seconds: Specifies the maximum tolerable delay in seconds where events arriving late could be included. Supported range is `-1` (indefinite) to `1814399` (20d 23h 59m 59s).
        :param pulumi.Input[float] events_out_of_order_max_delay_in_seconds: Specifies the maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order. Supported range is `0` to `599` (9m 59s).
        :param pulumi.Input[str] events_out_of_order_policy: Specifies the policy which should be applied to events which arrive out of order in the input event stream. Possible values are `Adjust` and `Drop`.
        :param pulumi.Input[str] location: The Azure Region in which the Resource Group exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the Stream Analytics Job. Changing this forces a new resource to be created.
        :param pulumi.Input[str] output_error_policy: Specifies the policy which should be applied to events which arrive at the output and cannot be written to the external storage due to being malformed (such as missing column values, column values of wrong type or size). Possible values are `Drop` and `Stop`. 
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group where the Stream Analytics Job should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[float] streaming_units: Specifies the number of streaming units that the streaming job uses. Supported values are `1`, `3`, `6` and multiples of `6` up to `120`.
        :param pulumi.Input[str] transformation_query: Specifies the query that will be run in the streaming job, [written in Stream Analytics Query Language (SAQL)](https://msdn.microsoft.com/library/azure/dn834998).
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

        if compatibility_level is None:
            raise TypeError("Missing required property 'compatibility_level'")
        __props__['compatibility_level'] = compatibility_level

        if data_locale is None:
            raise TypeError("Missing required property 'data_locale'")
        __props__['data_locale'] = data_locale

        if events_late_arrival_max_delay_in_seconds is None:
            raise TypeError("Missing required property 'events_late_arrival_max_delay_in_seconds'")
        __props__['events_late_arrival_max_delay_in_seconds'] = events_late_arrival_max_delay_in_seconds

        if events_out_of_order_max_delay_in_seconds is None:
            raise TypeError("Missing required property 'events_out_of_order_max_delay_in_seconds'")
        __props__['events_out_of_order_max_delay_in_seconds'] = events_out_of_order_max_delay_in_seconds

        if events_out_of_order_policy is None:
            raise TypeError("Missing required property 'events_out_of_order_policy'")
        __props__['events_out_of_order_policy'] = events_out_of_order_policy

        __props__['location'] = location

        __props__['name'] = name

        if output_error_policy is None:
            raise TypeError("Missing required property 'output_error_policy'")
        __props__['output_error_policy'] = output_error_policy

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if streaming_units is None:
            raise TypeError("Missing required property 'streaming_units'")
        __props__['streaming_units'] = streaming_units

        if transformation_query is None:
            raise TypeError("Missing required property 'transformation_query'")
        __props__['transformation_query'] = transformation_query

        __props__['job_id'] = None

        if opts is None:
            opts = pulumi.ResourceOptions()
        if opts.version is None:
            opts.version = utilities.get_version()
        super(Job, __self__).__init__(
            'azure:streamanalytics/job:Job',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

