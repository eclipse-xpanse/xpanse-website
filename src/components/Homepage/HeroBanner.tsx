import clsx from 'clsx';
import '../../css/index.css';
import Link from '@docusaurus/Link';
import React from 'react';
import XpanseLogo from '@site/static/img/full-logo.png';

function HeroBanner(): React.JSX.Element {
    const tagLine = () => {
        return (
            <>
                xpanse enables the development of native cloud managed services designed to be fully portable across
                cloud implementations, for an &nbsp;
                <a
                    className={'report-link'}
                    target='_blank'
                    href={
                        'https://events.eclipse.org/2023/unlockthecloud/documents/unlock-the-cloud-interoperability-to-foster-the-eu-digital-market-report.pdf'
                    }
                >
                    open and fair cloud market.
                </a>
            </>
        );
    };

    return (
        <header className={clsx('hero hero--primary', 'heroBanner')}>
            <div className={'container heroBannerElements'}>
                <img className={'heroBannerLogo'} src={XpanseLogo as string} alt={'logo'} />
                <div className={'buttons'} style={{ display: 'flex', flexDirection: 'column' }}>
                    <p className='hero__subtitle'>{tagLine()}</p>
                    <Link className='button button--secondary button--lg' to='/docs/introduction'>
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default HeroBanner;
