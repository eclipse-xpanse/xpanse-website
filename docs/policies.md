---
sidebar_position: 7
---

# Policies

Policies in Xpanse are ways to validate the infrastructure changes that a managed service deployment would do, before
the service is actually deployed.
Xpanse uses [OPA - Open Policy Agent](https://www.openpolicyagent.org/) for this purpose.

## OPA - Open Policy Agent

![OPA](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKPheKFDDOsaDgTfA3Qzj_tocSJjmQ6TASdpkU9gNxA&s)

Policies in OPA must be written in `Rego` which is a Policy Language designed by OPA project.
More details on how policies can be written using `Rego` can be
found [here](https://www.openpolicyagent.org/docs/latest/policy-language/).

## Example Use Cases

-   As an End user, we can use policies to validate if the managed service creates any resources or configuration in the
    end user's cloud infrastructure which may be not allowed by his/her organization.
-   As a cloud service provider, we can use policies to validate if the service is being correctly deployed.
-   As an integration test to validate if the service is deploying exactly what it is supposed to do.
-   and many more.

## End User Policies

End users can upload their OPA policies and these policies will be validated for all services ordered by the end user.

## CSP Policies

Cloud service providers can define policies for each of their service. These policies will be validated whenever the service is
deployed.

## Policy Management APIs

Xpanse provides two sets of APIs for managing life-cycle of policies.

1. Services Policies Management - To add, update and delete service level policies by CSP.
2. User Policies Management - To add, update and delete user level policies by end user.

## Policy-Man

Xpanse uses an application called [policy-man](https://github.com/eclipse-xpanse/policy-man) for the below purposes

-   Rego syntax validation when policies are uploaded.
-   OPA policy validation when services are deployed.
