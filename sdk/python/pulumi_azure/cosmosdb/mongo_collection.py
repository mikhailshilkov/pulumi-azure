# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class MongoCollection(pulumi.CustomResource):
    account_name: pulumi.Output[str]
    database_name: pulumi.Output[str]
    default_ttl_seconds: pulumi.Output[float]
    """
    The default Time To Live in seconds. If the value is `-1` items are not automatically expired.
    """
    indexes: pulumi.Output[list]
    """
    One or more `indexes` blocks as defined below.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Cosmos DB Mongo Collection. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the Cosmos DB Mongo Database in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
    """
    shard_key: pulumi.Output[str]
    """
    The name of the key to partition on for sharding. There must not be any other unique index keys. 
    """
    def __init__(__self__, resource_name, opts=None, account_name=None, database_name=None, default_ttl_seconds=None, indexes=None, name=None, resource_group_name=None, shard_key=None, __name__=None, __opts__=None):
        """
        Manages a Mongo Collection within a Cosmos DB Account.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[float] default_ttl_seconds: The default Time To Live in seconds. If the value is `-1` items are not automatically expired.
        :param pulumi.Input[list] indexes: One or more `indexes` blocks as defined below.
        :param pulumi.Input[str] name: Specifies the name of the Cosmos DB Mongo Collection. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the Cosmos DB Mongo Database in which the Cosmos DB Mongo Collection is created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] shard_key: The name of the key to partition on for sharding. There must not be any other unique index keys. 
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

        if account_name is None:
            raise TypeError("Missing required property 'account_name'")
        __props__['account_name'] = account_name

        if database_name is None:
            raise TypeError("Missing required property 'database_name'")
        __props__['database_name'] = database_name

        __props__['default_ttl_seconds'] = default_ttl_seconds

        __props__['indexes'] = indexes

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['shard_key'] = shard_key

        if opts is None:
            opts = pulumi.ResourceOptions()
        if opts.version is None:
            opts.version = utilities.get_version()
        super(MongoCollection, __self__).__init__(
            'azure:cosmosdb/mongoCollection:MongoCollection',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

