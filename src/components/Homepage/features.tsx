import React from 'react';
import { Braces, Code, LucideIcon, Rocket, ShoppingCart, Unlock, Unplug } from 'lucide-react';

export const FeatureList: { title: string; Icon: LucideIcon; description: JSX.Element }[] = [
    {
        title: 'Portable Services',
        Icon: Unplug,
        description: (
            <>An Xpanse Cloud service is portable. It can be deployed on any cloud provider hosting Xpanse runtime.</>
        ),
    },
    {
        title: 'Managed Services as Code',
        Icon: Code,
        description: (
            <>
                Creating a service with Xpanse is very easy. You describe a service and its deployment details using the
                Xpanse service descriptor.
            </>
        ),
    },
    {
        title: 'Services Catalog',
        Icon: ShoppingCart,
        description: (
            <>
                As a service is described using Xpanse service descriptor, it's pretty easy to provide a catalog of
                services.
            </>
        ),
    },
    {
        title: 'API First',
        Icon: Braces,
        description: (
            <>
                Xpanse provides REST API for registering new services to the catalog and also for ordering services from
                the catalog.
            </>
        ),
    },
    {
        title: 'Deployment Tools',
        Icon: Rocket,
        description: (
            <>
                Xpanse uses standard deployment tools such as Terraform for deploying services. Scripts are provided as
                part of the Xpanse service descriptor.
            </>
        ),
    },
    {
        title: 'No Lock-In',
        Icon: Unlock,
        description: (
            <>
                Xpanse allows services and data interoperability within cloud providers and service portability across
                multiple cloud vendors.
            </>
        ),
    },
];
