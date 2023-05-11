import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/Homepage/HomePageFeatures';
import HeroBanner from '@site/src/components/Homepage/HeroBanner';

export default function Home(): JSX.Element {
    return (
        <Layout>
            <HeroBanner />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
