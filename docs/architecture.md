---
sidebar_position: 2
---

# Architecture

Xpanse is a project aimed reshaping the cloud services ecosystem:

-   the cloud users can find the same services across different cloud providers, exactly the same services provided by
    Xpanse.
-   the software vendors can easily create native and portable managed services for their software, including seamless and
    low level integration with cloud provider services. In addition, of software artifacts, software vendor describe the
    service using the Xpanse data model.
-   the cloud providers can easily extend their services catalog by registering services described using the Xpanse data model.

Xpanse allows anyone to create managed services (not only the cloud provider), portable, and fully
integrated within the cloud provider infrastructure.

![Xpanse Architecture](../static/img/xpanse_architecture.svg 'Xpanse Architecture')

The Xpanse service descriptor is a yaml fully describing the service. This descriptor is handled by the orchestrator.

The orchestrator reads the deployment scripts provided as part of the service descriptor and executes it when the service is ordered.

The interaction logic with the cloud provider is delegated to orchestrator plugins. The orchestrator can use one or more
plugins to deal with the underlying infrastructure services and create the service resources.

The orchestrator defines the following lifecycle for each service:

1. A service is registered in the orchestrator (in a persistent store).
2. Once registered, the service is available for the end user for deployments.
3. the orchestrator can delete the service and with this will remove the service from the catalog.

You can interact with the Xpanse API using the [REST API](https://app.swaggerhub.com/apis/eclipse-xpanse-bot/XpanseRuntimeApi).

The orchestrator, plugins and API are all managed in the Xpanse runtime Spring Boot application.
The runtime is the glue between all components.
