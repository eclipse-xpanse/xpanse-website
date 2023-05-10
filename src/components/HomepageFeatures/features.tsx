import React from 'react';

export const FeatureList = [
    {
        title: 'Portable Services',
        img: require('@site/static/img/unplug.png').default,
        description: (
            <>An Xpanse Cloud service is portable. It can be deployed on any cloud provider hosting Xpanse runtime.</>
        ),
    },
    {
        title: 'Managed Services',
        img: require('@site/static/img/code.png').default,
        description: (
            <>
                Creating a service with Xpanse is very easy. You describe a service and its deployment details using the
                Xpanse service descriptor.
            </>
        ),
    },
    {
        title: 'Services Catalog',
        img: require('@site/static/img/shopping-cart.png').default,
        description: (
            <>
                As a service is described using Xpanse service descriptor, it's pretty easy to provide a catalog of
                services.
            </>
        ),
    },
    {
        title: 'API First',
        img: require('@site/static/img/braces.png').default,
        description: (
            <>
                Xpanse provides REST API for registering new services to the catalog and also for ordering services from
                the catalog.
            </>
        ),
    },
    {
        title: 'Deployment Tools',
        img: require('@site/static/img/rocket.png').default,
        description: (
            <>
                Xpanse uses standard deployment tools such as Terraform for deploying services. Scripts are provided as
                part of the Xpanse service descriptor.
            </>
        ),
    },
    {
        title: 'No Lock-In',
        img: require('@site/static/img/unlock.png').default,
        description: (
            <>
                Xpanse allows services and data interoperability within cloud providers and service portability across
                multiple cloud vendors.
            </>
        ),
    },
];
