import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import '../../css/index.css';
import Link from '@docusaurus/Link';
import React from 'react';

function HeroBanner(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', 'heroBanner')}>
            <div className={'container heroBannerElements'}>
                <img
                    className={'heroBannerLogo'}
                    src={require('@site/static/img/full-logo.png').default}
                    alt={'logo'}
                />
                <div className={'buttons'} style={{ display: 'flex', flexDirection: 'column' }}>
                    <p className='hero__subtitle'>{siteConfig.tagline}</p>
                    <Link className='button button--secondary button--lg' to='/docs/intro'>
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default HeroBanner;
