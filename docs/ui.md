# UI

### Use Cases

We also have a Xpanse UI which is a reference UI implementation to show how the Xpanse API can be used for the following purposes -

#### For Service Providers

1. Register/update/delete services using the Xpanse service definition.
2. Display service catalog with all registered services.

#### For End Users

1. Order services available in the catalog.
2. Stop/Delete deployed services.
3. Monitor services deployed.

### Development

Code for UI implementation is available in [here](https://github.com/eclipse-xpanse/xpanse-ui).

#### Requirements

1. Node.js and npm/yarn must be installed on the developer system.
2. Steps to start the application is described [here](https://github.com/eclipse-xpanse/xpanse-ui/blob/main/README.md)
3. Xpanse runtime to be available. Without which, the UI will start up but no functions are usable.

### Access to UI

As we still do not have authentication and authorization implemented in the project (it is on the roadmap), UI can be simply accessed using

1. username - `csp` to get the cloud service provider view.
2. username - `user` to get the end user view.

Note - in both cases, enter any string as password. There is no validation available at the moment.
