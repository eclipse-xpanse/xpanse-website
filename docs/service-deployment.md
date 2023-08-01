# Service Deployment

Xpanse aims to unify the service deployment on any cloud by re-using already available cloud infrastructure tools such
as Terraform, Pulumi, etc., in the market.

Service Deployment involves the following tasks

1. The service provider must provide the script that must be executed to create the customer-specific infrastructure
   required for running the service. The script must be provided as part of the service definition.
2. Install the software and configurations needed for running the service.

> Note: At the moment, only Terraform is supported by Xpanse for service deployment. We plan to add support for other
> deployment tools in the upcoming releases.

## Asynchronous Processing

Since a service deployment can take longer depending on the complexity of the service and the resources required for it,
the entire deployment process is implemented to run asynchronously.

After the `deploy` or the `destroy` request is submitted, the runtime validates the request and the client receives an
accepted/rejected message synchronously. After this, the runtime hands over the deployment request to another thread which executes the deployment independently.

The clients can then fetch the status of the deployment using `getDeployedServiceDetailsById` service.

## Terraform

Terraform script that must be executed must be passed as is, in the service definition when the service is registered.
You can find examples of how the script can look like in
the [samples'](https://github.com/eclipse-xpanse/xpanse/tree/main/samples) folder.

> **Terraform** binaries must be installed on the system where runtime is running. Or use our docker image, which
> contains all required software installed.

### Script Validation

As part of the service registration process, Xpanse validates the syntax of the Terraform script provided. The service
is registered only when the script validation is successful.

We use the Terraform [validate](https://developer.hashicorp.com/terraform/cli/commands/validate) feature to achieve
this.

### Script Execution

When the customer orders the service, the following happens

1. Generate a unique ID for the service requested. This is based on UUID.
2. Create a folder with this ID as the name.
3. From the runtime, call the start the Terraform process outside the JVM to do the following
    - Inside the folder, the runtime will then create a Terraform workspace.
    - Execute the Terraform scripts

> Note: To avoid dependency on the filesystem, the state `terraform.tfstate` file contents are copied to the database at
> the end of the service deployment. We reuse this later when the customer requests to destroy the service.

### Reading Script Output

After the runtime starts the Terraform script as a system command, it then starts to listen to `stdout` and `stderr` of
the job to gather all output generated from the script.

### Capturing Service Details

For any service ordered by the customer, it is important to return the details of the ordered service. Such as the IPs,
credentials, etc. which the customer must use to start consuming the service.

We use the
Terraform `output` [feature](https://developer.hashicorp.com/terraform/tutorials/configuration-language/outputs) to get
such information from the service deployment. So it is important to add the `output` section to the scripts. The same
is also used by the Xpanse UI for displaying the service details.

### Version Configuration For Terraform Providers

Xpanse currently uses Terraform to orchestrate resources on cloud providers, but versions of
Terraform for cloud providers are in constant iteration. In order to configure the Terraform version
of the cloud providers more conveniently and quickly, you can configure the Terraform version of the
cloud providers in
the [xpanse configuration file](https://github.com/eclipse-xpanse/xpanse/blob/main/runtime/src/main/resources/application.properties).

#### The Version Key Of The Terraform Providers

| Terraform Providers | key                                         |
| ------------------- | ------------------------------------------- |
| AWS                 | `terraform.provider.aws.version`            |
| HuaweiCloud         | `terraform.provider.huaweicloud.version`    |
| OpenStack           | `terraform.provider.openstack.version`      |
| FlexibleEngine      | `terraform.provider.flexibleengine.version` |

#### How To Configure The Version of Terraform Providers

For how to configure the version value of Terraform Providers, please refer to the chapter of
`Version Constraints` in https://developer.hashicorp.com/terraform/language/providers/requirements#version-constraints

The following are some examples, please refer to

```properties
terraform.provider.aws.version=~> 4.0
terraform.provider.openstack.version=>= 1.48.0
terraform.provider.flexibleengine.version=>= 1.30.0
terraform.provider.huaweicloud.version=~> 1.51.0
```
