---
sidebar_position: 7
---

# Runtime

Xpanse runtime is the running module built on SpringBoot.

## Pre-Requisites

1. If running the runtime jar directly, then the host must have `Terraform CLI` installed.
2. Fully configured Zitadel instance.

## Properties and Environment Variables

Xpanse has integration to multiple systems, and the aim is also to keep the system as flexible as possible and to cover
all use-cases possible. Therefore, there are some configuration properties that the developer and the production
administrators must take care of before starting/deploying xpanse.

1. Configuration properties of authentication layer. Documented [here](authentication-authorization.md#runtime).
2. Configuration properties of database layer. Documented [here](database.md#maria-db).
3. Plugin activation variables. Documented [here](plugins.md#plugin-activation).

### Terraform CLI Installation

Terraform CLI can be installed using the steps from
the [official guide](https://developer.hashicorp.com/terraform/downloads).

### Local Development

#### Build

As a requirement, we need Java Developer Kit (JDK) version 17 installed. You can use [openjdk](https://openjdk.org/)
or [temurin](https://adoptium.net/)

Clone the project using the command below

```shell
$ git clone https://github.com/eclipse-xpanse/xpanse
$ cd xpanse
```

Then compile the entire project using the below command

```shell
$ ./mvnw clean install -DskipTests
```

#### Run

Ensure all properties mentioned in the [above section](#properties-and-environment-variables) are correctly set.

##### From Command Line

If you have a fully configured Zitadel instance running on your local system, then you can use the below command to
start the application by passing all variables.

To start the application from the command line, run the below application from the root of the project.

```shell
$ java -jar runtime/target/xpanse-runtime-1.0.0-SNAPSHOT.jar \
--authorization-api-client-id=${client-id} \
--authorization-api-client-secret=${client-secret} \
--authorization-swagger-ui-client-id=${swagger-ui-cleint-id}
```

If you would like to use our `zitadel-testbed`, then start the server using the below command.
This will automatically set properties required for connecting to our Zitadel test bed.

```shell
$ cd runtime/target
$ java -jar xpanse-runtime-1.0.0-SNAPSHOT.jar --spring.profiles.active=zitadel,zitadel-testbed
```

##### From IDE

Or the application can be started using the IDE by executing the main application directly.
Below is the example from IntellijIdea

![img.png](images/ide-run.png)

You must see the below messages in the console.

```shell
   _  __   ____    ____ _   ____    _____  ___
  | |/_/  / __ \  / __ `/  / __ \  / ___/ / _ \
 _>  <   / /_/ / / /_/ /  / / / / (__  ) /  __/
/_/|_|  / .___/  \__,_/  /_/ /_/ /____/  \___/
       /_/

        xpanse 1.0.0-SNAPSHOT (2023)
13:44:19.633 [main] INFO  o.e.xpanse.runtime.XpanseApplication - Starting XpanseApplication using Java 17.0.5 with PID 7344
13:44:19.645 [main] INFO  o.e.xpanse.runtime.XpanseApplication - No active profile set, falling back to 1 default profile: "default"
13:44:22.211 [main] INFO  o.e.x.o.FileOrchestratorStorage - No other storage beans found. Using default file storage.
13:44:23.878 [main] WARN  o.e.x.o.OrchestratorService - No xpanse plugins loaded by the runtime.
13:44:23.886 [main] INFO  o.e.xpanse.runtime.XpanseApplication - Started XpanseApplication in 5.029 seconds (process running for 5.992)
```

You can check the status of the runtime by opening the swagger UI from any
browser:

```
http://localhost:8080/swagger-ui/index.html
```

### Production

Ensure all properties mentioned in the [above section](#properties-and-environment-variables) are correctly set.

#### Run using jar

Download the released runtime jar from maven central repository.
You can list all available released versions [here](https://oss.sonatype.org/#nexus-search;quick~xpanse-runtime).

After downloading, follow the same steps mentioned in [this](#from-command-line) section.

#### Run using Docker image

You can start the runtime using our released docker image, and this is the preferred way.
This image contains all necessary tools preinstalled.

```shell
$ docker pull ghcr.io/eclipse-xpanse/xpanse:${release-version}
$ docker run -d -p 8080:8080 --name xpanse -e "SPRING_PROFILES_ACTIVE=zitadel,mariadb" ghcr.io/eclipse-xpanse/xpanse:${release-version}
$ docker logs xpanse
```

> **Note:** It is safe to provide all properties as environment variables rather than passing them
> directly in the command line.
> In case of this, the same property name must be set in UPPERCASE for all 4 variables.
>
> For running, using docker image, we can use the ` --env-file` option of the `
docker run` command to store all sensitive data.
> Again here the property names must be in UPPERCASE.

#### Running API behind a proxy

For running the runtime application behind a proxy, we must ensure that the proxy forwards the correct `X-Forwarded-*`
headers to the API.
This is necessary as the API has some features where the links to html pages are returned
and this link will have the correct protocol and host only when these headers are set.

In the case of Nginx, the configuration will look like this

```nginx configuration
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto https;
proxy_set_header Host $host;
```
