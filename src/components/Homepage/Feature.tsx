import clsx from 'clsx';
import React from 'react';
import '../../css/features.css';
import { LucideIcon } from 'lucide-react';
function Feature({ Icon, title, description }: { Icon: LucideIcon; title: string; description: JSX.Element }) {
    return (
        <article className={clsx('col col--4')}>
            <div className={'featureCard'}>
              <div className={'featureTitle'}>
                <Icon className={'featureIcon'} strokeWidth={2} />
                <h2 className={'featureName'}>{title}</h2>
              </div>
                <div className={'listContainer'}>
                    <p className={'featureDescription'}>{description}</p>
                </div>
            </div>
        </article>
    );
}

export default Feature;
