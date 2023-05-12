// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'xpanse',
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
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false,
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
                    href: '/docs/api',
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
                            label: 'UI',
                            to: '/docs/ui',
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
                            label: 'Eclipse Foundation',
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
                            label: 'Blogs',
                            href: '/blog',
                        },
                        {
                            label: 'Demos',
                            to: '/docs/FurtherReading/demos',
                        },
                        {
                            label: 'Resources',
                            to: '/docs/FurtherReading/resources',
                        },
                        {
                            label: 'Impact of Open Services Cloud',
                            href: 'https://events.eclipse.org/2023/unlockthecloud/documents/unlock-the-cloud-interoperability-to-foster-the-eu-digital-market-report.pdf',
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
