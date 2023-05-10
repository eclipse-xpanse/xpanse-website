import clsx from 'clsx';
import React from 'react';
import '../../css/features.css';
function Feature({ img, title, description }) {
    return (
        <article className={clsx('col col--4')}>
            <div className={'featureCard'}>
                <img src={img} className={'featureIcon'} alt={'title'}></img>
                <h2>{title}</h2>
                <div className={'listContainer'}>
                    <p>{description}</p>
                </div>
            </div>
        </article>
    );
}

export default Feature;
