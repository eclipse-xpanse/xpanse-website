---
sidebar_position: 4
---

# Configuration Language

A managed service is described using Open Services Cloud Configuration Language
(OCL).

OCL is a yaml descriptor of a managed service, describing the expected final state of your service, interacting with the
fundamental APIs:

Examples of managed services described using OCL for multiple clouds can be found [here](https://github.com/eclipse-xpanse/xpanse/tree/main/samples).

### Deployment Scripts

In OCL, the deployer variable can contain the script that must be executed for provisioning the managed service.
Currently, the only allowed script is Terraform.

### Flavors

For each managed service, we can define different flavors of it. For example, different sizes of the VM, etc. End user
can then select the flavor of their preference for the service while ordering.

### Flavor properties

Flavors can have properties which can be simply declared and referred in the deployment script too with the same
property names. Runtime will ensure that these variables are automatically available for the deployment scripts

### Deployment Variables

As part of the OCL, the managed service provider can define variables that can be either entered by the user or
available as defaults. All possible types of variables are defined
here [Deployment Variables](https://github.com/eclipse-xpanse/xpanse/blob/main/modules/models/src/main/java/org/eclipse/xpanse/modules/models/service/register/DeployVariable.java)
The variables can then be used in the deployment scripts.

## OCL loading

Xpanse provides different options to generate and provision OCL:

-   REST API on the xpanse runtime
-   Xpanse UI
