import React from 'react';
import { Braces, Code, Handshake, LucideIcon, Rocket, ShoppingCart, Unlock } from 'lucide-react';

export const FeatureList: { title: string; Icon: LucideIcon; description: React.JSX.Element }[] = [
    {
        title: 'Unified APIs',
        Icon: Handshake,
        description: <>xpanse provides unified APIs to offer and consume managed services on any cloud provider.</>,
    },
    {
        title: 'Managed Services as Code',
        Icon: Code,
        description: (
            <>
                Offering a service with xpanse is very easy. You describe a service and its deployment details using the
                xpanse service descriptor.
            </>
        ),
    },
    {
        title: 'Services Catalog',
        Icon: ShoppingCart,
        description: (
            <>
                As a service is described using xpanse service descriptor, it's pretty easy to provide a catalog of
                services.
            </>
        ),
    },
    {
        title: 'API First',
        Icon: Braces,
        description: <>xpanse provides REST API for managing full life-cycle of services in the service catalog.</>,
    },
    {
        title: 'Deployment Tools',
        Icon: Rocket,
        description: (
            <>xpanse uses standard deployment tools such as Terraform, OpenTofu and Ansible for deploying services.</>
        ),
    },
    {
        title: 'No Lock-In',
        Icon: Unlock,
        description: (
            <>
                xpanse allows services and data interoperability within cloud providers and service portability across
                multiple cloud vendors.
            </>
        ),
    },
];
