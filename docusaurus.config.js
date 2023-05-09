// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'xpanse',
    tagline: 'Xpanse is an open source project for offering native managed services on cloud.',
    url: 'https://eclipse-xpanse.github.io',
    baseUrl: '/xpanse-website/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'xpanse',
    projectName: 'xpanse',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
        [
            'redocusaurus',
            {
                specs: [
                    {
                        spec: 'static/xpanse-api/openapi.json',
                        route: '/docs/api/',
                    },
                ],
                theme: {
                    primaryColor: '#1890ff',
                },
            },
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        announcementBar: {
            id: 'survey-report',
            content:
                '<b>Report of <i>Impact of Open Services Cloud initiative study</i> is <a target="_blank" rel="noopener noreferrer" href="https://events.eclipse.org/2023/unlockthecloud/documents/unlock-the-cloud-interoperability-to-foster-the-eu-digital-market-report.pdf"> now available.</a></b>',
            backgroundColor: '#303846',
            textColor: '#fafbfc',
            isCloseable: false,
        },
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        navbar: {
            logo: {
                alt: 'xpanse',
                src: 'img/logo-header.png',
            },
            items: [
                {
                    label: 'API',
                    position: 'right',
                    href: '/docs/api'
                },
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'right',
                    label: 'Documentation',
                },
                {
                    href: 'https://github.com/eclipse-xpanse/xpanse',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting Started',
                            to: '/docs/intro',
                        },
                        {
                            label: 'Architecture',
                            to: '/docs/architecture',
                        },
                        {
                            label: 'Runtime',
                            to: '/docs/runtime',
                        },
                        {
                            label: 'API',
                            to: '/docs/api',
                        },
                        {
                            label: 'Supported Clouds',
                            to: '/docs/supported-clouds',
                        },
                        {
                            label: 'Plugins',
                            to: '/docs/plugins',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Contribute',
                            to: '/docs/contribute',
                        },
                        {
                            label: 'Mailing Lists',
                            href: 'https://accounts.eclipse.org/mailing-list/xpanse-dev',
                        },
                        {
                            label: 'Slack',
                            href: 'https://app.slack.com/client/T02U1MCB4HW/C02U1MCDB9N?cdn_fallback=2',
                        },
                    ],
                },
                {
                    title: 'Project',
                    items: [
                        {
                            label: 'Eclipse',
                            href: 'https://projects.eclipse.org/projects/technology.xpanse',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/eclipse-xpanse/xpanse',
                        },
                    ],
                },
                {
                    title: 'Further Reading',
                    items: [
                        {
                            label: 'Blog',
                            href: '/blog',
                        },
                        {
                            label: 'Demo',
                            to: '/docs/FurtherReading/demo',
                        },
                        {
                            label: 'Resources',
                            to: '/docs/FurtherReading/resources',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Eclipse Foundation.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
};

module.exports = config;
