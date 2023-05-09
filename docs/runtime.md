---
sidebar_position: 4
---

# Runtime

Xpanse runtime is the running module built on SpringBoot. It packages and executes all together: orchestrator,
plugins, REST API, ...

## Build

You can easily build Xpanse yourself.

As requirement, you need:

-   a Java Developer Kit (JDK) installed, version 17 or newer. You can use [openjdk](https://openjdk.org/)
    or [temurin](https://adoptium.net/)
-   [Apache Maven 3.8.x or newer](https://maven.apache.org/)

You can clone the project locally on your machine with:

```shell
$ git clone https://github.com/eclipse-xpanse/xpanse
$ cd xpanse
```

First, you can build the whole xpanse project, including all modules (orchestrator, runtime, plugins, etc), simply
with:

```shell
$ mvn clean install
```

### Run

By default, the application will not activate any plugins. They must be activated via spring profiles. Also ensure that
only one plugin is active at a time.

-   for Huawei Cloud:

```shell
$ cd runtime/target
$ java -jar xpanse-runtime-1.0.0-SNAPSHOT.jar -Dspring.profiles.active=huaweicloud
```

-   for Openstack:

```shell
$ cd runtime/target
$ java -jar xpanse-runtime-1.0.0-SNAPSHOT.jar -Dspring.profiles.active=openstack
```

By default, the runtime is built in "exploded mode". Additionally, you can also build a Docker image
adding `-Ddocker.skip=false` as build argument:

```shell
$ cd runtime
$ mvn clean install -Ddocker.skip=false
```

We can start xpanse runtime with a specific plugin by passing the plugin name in the profile name. For example to start
huaweicloud

```shell
$ docker run -e "SPRING_PROFILES_ACTIVE=huaweicloud" --name my-xpanse-runtime xpanse-runtime
```

````

You can see the log messages:

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

````

The Xpanse REST API is now available. You can check the status of the runtime by calling the health endpoint on the REST
API:

```shell
$ curl -XGET http://localhost:8080/xpanse/health
ready
```

### Docker

If you use `-Ddocker.skip=false` as option on the build command line, you have docker image ready for the runtime.

You can see the docker images created:

```shell
$ docker images|grep xpanse
xpanse                   1.0.0-SNAPSHOT   4b716096304b   15 seconds ago   293MB
xpanse                   latest           4b716096304b   15 seconds ago   293MB
```

You can run a docker container with:

```shell
$ docker run -d --name my-xpanse -p 8080:8080 xpanse
$ docker logs my-xpanse
...
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

The Xpanse REST API is now available. You can check the status of the runtime by calling the health endpoint on the REST
API:

```shell
$ curl -XGET http://localhost:8080/xpanse/health
ready
```
