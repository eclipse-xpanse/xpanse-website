---
sidebar_position: 6
---

# Database

## Development Environments

For all development purposes, we use a file-based H2 database which is automatically created during the server startup.

### Admin UI

The UI to the H2 DB can be accessed at `http://localhost:8080/h2-console/login.jsp`.
Credentials to this admin UI can be
found [here](https://github.com/eclipse-xpanse/xpanse/blob/main/runtime/src/main/resources/application.properties#L10).

### Cleanup

Since it is a file-based database, the entries are not lost with reboot of the server.

To clean up the database, the database files must be simply deleted and the server must be restarted for new fresh DB
files to be recreated. Execute the below command on the root of the folder xpanse project.

```shell
rm *.db
```

> Note:
> The H2 database is purely for development and test purposes only and must be avoided for production installation of
> Xpanse.

## Production Environments

We plan to support multiple RDBMS flavors. By **support**, we mean configurations for the database added and also all
functionalities tested.

### Maria DB

At the moment, this is the only DB that is fully supported.
To use `MariaDB` as the database for Xpanse, it must be activated by starting the application with profile `mariadb` and
by replacing the placeholders for database`username` and `password` as below.

```shell
java -jar xpanse-runtime-1.0.0-SNAPSHOT.jar \
          -Dspring.profiles.active=mariadb \
          -Dspring.datasource.username=${database-username} \
          -Dspring.datasource.password=${database-password}
```

#### Versions Supported

Current supported version of MariaDB is `10.11.4`. This is the latest LTS release of MariaDB.

#### Default Configuration

The above command will start the Xpanse runtime with the following default configurations:

1. MariaDB running on the same machine where Xpanse is running. (Same localhost)
2. Database is listening on port `3306`.
3. Name of the database is `xpanse`. This must be created on the DB server. It will **not** be automatically created.

The Default configuration file can be
found [here](https://github.com/eclipse-xpanse/xpanse/blob/main/runtime/src/main/resources/application-mariadb.properties#L6).

#### Overriding Default Configuration

We can override the above two default configuration by starting the application as below by replacing the placeholders
with actual values for `database-host`, `database-port` and `database-name`.

```shell
java -jar xpanse-runtime-1.0.0-SNAPSHOT.jar \
          -Dspring.profiles.active=mariadb \
          -Dspring.datasource.username=${username} \
          -Dspring.datasource.password=${password} \
          -D spring.datasource.url=jdbc:mariadb://${database-host}:${database-port}/${database-name}

```

> **Note:** It is safe to provide the database-related properties as environment variables rather than passing them
> directly in the command line.
> In case of this,
> the same property name must be set in UPPERCASE and underscore separated instead of dot for all variables.

> **Note:** Using this startup command, the database can run on any machine that is reachable from the Xpanse runtime
> application.

#### MariaDB as a Docker Container

MariaDB offers official Docker images for running a database as a container.
More details can be found here on the official page of MariaDB
website [here](https://mariadb.com/kb/en/installing-and-using-mariadb-via-docker/) and on
DockerHub [here](https://hub.docker.com/_/mariadb/).

##### Starting new container

While starting the MariaDB docker container for the first time, we can `database-host`, `database-port` and
`database-name` as below and the same can be used in starting the Xpanse runtime using the command described
[above](#overriding-default-configuration).

```shell
docker pull mariadb:10.11.4
```

By starting the container with the below command, the database is started by automatically configuring the database with
Xpanse database name, database user and password. In addition to that, password for the DB `root` user can also be
updated to the value of our choice.

```shell
docker run --name ${container-name} \
            -e MARIADB_ROOT_PASSWORD=${database-root-user} \
            -e MARIADB_DATABASE=${database-name} \
            -e MARIADB_USER=${database-user} \
            -e MARIADB_PASSWORD${database-password} \
            -p 3306:${database-port} -d
```

> **Note:** To avoid passing database related properties in command line, we can use the ` --env-file` option of the `
docker run` command to store all sensitive data.
> Again here the property names must be in UPPERCASE.

#### Database Objects Creation

All database objects such as tables needed by the application are automatically created by the application when it boots
up and uses a database for the first time.
