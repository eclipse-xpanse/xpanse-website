import clsx from 'clsx';
import React from 'react';
import '../../css/features.css';
import { LucideIcon } from 'lucide-react';
function Feature({ Icon, title, description }: { Icon: LucideIcon; title: string; description: JSX.Element }) {
    return (
        <article className={clsx('col col--4')}>
            <div className={'featureCard'}>
                <Icon className={'featureIcon'} strokeWidth={3} />
                <h2>{title}</h2>
                <div className={'listContainer'}>
                    <p>{description}</p>
                </div>
            </div>
        </article>
    );
}

export default Feature;
