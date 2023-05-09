---
sidebar_position: 1
---

# Introduction

Let's discover **Xpanse in less than 5 minutes**.

## Getting Started

**Xpanse** is composed by:

-   an orchestrator responsible for the managed services (deployment, start, stop, ...) and loading
    plugins specific for each supported cloud provider
-   Data model for describing managed services and for deploying these managed services.
-   a REST API to interact with the orchestrator
-   runtime (eventually including cloud provider plugins) assembling all components together in a
    running service

Let's get started by **launching Xpanse runtime** and **deploying a simple managed service**.

You will create a simple service descriptor, and you will deploy to Xpanse using the
orchestrator REST API.

### What you'll need

You need a Xpanse runtime:

-   use the runtime provided by a cloud provider supporting Xpanse (the cloud provider
    already have the runtime, and you can directly use the APIs)
-   launch the runtime of your cloud infrastructure (on a VM or Kubernetes cluster for instance)
-   launch the runtime on your machine or cloud infrastructure.

#### Running locally on VM

You must [build your own runtime](runtime).

In "exploded mode", you have a `runtime` folder, where you can easily launch with:

```shell
$ java -jar xpanse-runtime-1.0-SNAPSHOT.jar
```

#### Running on Docker, Kubernetes

The runtime is also available as Docker images. You can run a Docker container with:

```shell
$ docker run -d --name my-runtime -p 8080:8080 osc
```

Take a look on [runtime documentation](runtime) for details.

## Create service descriptor

A service is described with a **yaml file**. In this descriptor, you will define:

-   the service components
-   the integration of the service with the fundamental services (computing, billing, ...)

You can find examples of the service descriptors here [Sample Service Descriptors](https://github.com/eclipse-xpanse/xpanse/tree/main/samples)

````

## Deploy the service

To actually deploy the service, you have to submit the **yaml file** to the **Xpanse Orchestrator**.

For instance, you can deploy the service descriptor via REST:

```bash
curl -XPOST -d @service.yaml -H "Content-Type: application/yaml" http://osc.host/path
````
