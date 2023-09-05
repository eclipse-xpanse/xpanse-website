// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'xpanse',
    url: 'https://eclipse-xpanse.github.io',
    baseUrl: '/xpanse',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'xpanse',
    projectName: 'xpanse',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
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
                    position: 'left',
                    href: '/docs/api',
                },
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    className: 'header-youtube-link',
                    href: 'https://www.youtube.com/playlist?list=PLy7t4z5SYNaTpG7zDP4u4icR356zNUJUC',
                    position: 'right',
                },
                {
                    className: 'header-calender-link',
                    to: '/docs/Contribute/calendar',
                    position: 'right',
                },
                {
                    href: 'https://github.com/eclipse-xpanse',
                    className: 'header-github-link',
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
                            label: 'API',
                            to: '/docs/api',
                        },
                        {
                            label: 'Architecture',
                            to: '/docs/architecture',
                        },
                        {
                            label: 'Authentication & Authorization',
                            to: '/docs/authentication-authorization',
                        },
                        {
                            label: 'Cloud Provider Credentials',
                            to: '/docs/cloud-provider-credentials',
                        },
                        {
                            label: 'Configuration Language',
                            to: '/docs/configuration-language',
                        },
                        {
                            label: 'Database',
                            to: '/docs/database',
                        },
                        {
                            label: 'Plugins',
                            to: '/docs/plugins',
                        },
                        {
                            label: 'Runtime',
                            to: '/docs/runtime',
                        },
                        {
                            label: 'Service Deployment',
                            to: '/docs/service-deployment',
                        },
                        {
                            label: 'Supported Clouds',
                            to: '/docs/supported-clouds',
                        },
                        {
                            label: 'UI',
                            to: '/docs/ui',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'New Developers',
                            to: '/docs/Contribute/new-developers',
                        },
                        {
                            label: 'Code of Conduct',
                            to: '/docs/Contribute/code-of-conduct',
                        },
                        {
                            label: 'Planning',
                            to: '/docs/Contribute/planning',
                        },
                        {
                            label: 'Continuous Integration',
                            to: '/docs/Contribute/continuous-integration',
                        },
                        {
                            label: 'Releases',
                            to: '/docs/Contribute/releases',
                        },
                        {
                            label: 'Bug Handling Process',
                            to: '/docs/Contribute/bug-handling-process',
                        },
                        {
                            label: 'Pull Requests',
                            to: '/docs/Contribute/pull-requests',
                        },
                        {
                            label: 'Security',
                            to: '/docs/Contribute/security',
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
                        {
                            label: 'Mailing Lists',
                            href: 'https://accounts.eclipse.org/mailing-list/xpanse-dev',
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
