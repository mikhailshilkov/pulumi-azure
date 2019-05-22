# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class AnalyticsSolution(pulumi.CustomResource):
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    plan: pulumi.Output[dict]
    """
    A `plan` block as documented below.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which the Log Analytics solution is created. Changing this forces a new resource to be created. Note: The solution and it's related workspace can only exist in the same resource group.
    """
    solution_name: pulumi.Output[str]
    """
    Specifies the name of the solution to be deployed. See [here for options](https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-add-solutions).Changing this forces a new resource to be created.
    """
    workspace_name: pulumi.Output[str]
    """
    The full name of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
    """
    workspace_resource_id: pulumi.Output[str]
    """
    The full resource ID of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, location=None, plan=None, resource_group_name=None, solution_name=None, workspace_name=None, workspace_resource_id=None, __name__=None, __opts__=None):
        """
        Manages a Log Analytics (formally Operational Insights) Solution.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] plan: A `plan` block as documented below.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the Log Analytics solution is created. Changing this forces a new resource to be created. Note: The solution and it's related workspace can only exist in the same resource group.
        :param pulumi.Input[str] solution_name: Specifies the name of the solution to be deployed. See [here for options](https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-add-solutions).Changing this forces a new resource to be created.
        :param pulumi.Input[str] workspace_name: The full name of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
        :param pulumi.Input[str] workspace_resource_id: The full resource ID of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
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

        __props__['location'] = location

        if plan is None:
            raise TypeError("Missing required property 'plan'")
        __props__['plan'] = plan

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        if solution_name is None:
            raise TypeError("Missing required property 'solution_name'")
        __props__['solution_name'] = solution_name

        if workspace_name is None:
            raise TypeError("Missing required property 'workspace_name'")
        __props__['workspace_name'] = workspace_name

        if workspace_resource_id is None:
            raise TypeError("Missing required property 'workspace_resource_id'")
        __props__['workspace_resource_id'] = workspace_resource_id

        super(AnalyticsSolution, __self__).__init__(
            'azure:operationalinsights/analyticsSolution:AnalyticsSolution',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

