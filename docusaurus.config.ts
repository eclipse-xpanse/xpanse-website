import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const swaggerHubApiUrl: string = 'https://app.swaggerhub.com/apis/eclipse-xpanse-bot/XpanseRuntimeApi';

const config: Config = {
    title: 'xpanse',
    url: 'https://eclipse.dev',
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
    plugins: [require.resolve('docusaurus-lunr-search')],
    themes: ['@docusaurus/theme-mermaid'],
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.ts'),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: ['./src/css/custom.css', './src/css/admonitions.css'],
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
        navbar: {
            logo: {
                alt: 'xpanse',
                src: 'img/logo-header.png',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'introduction',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    label: 'API',
                    position: 'left',
                    href: swaggerHubApiUrl,
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
                {
                    href: 'https://matrix.to/#/#eclipse-xpanse:matrix.eclipse.org',
                    className: 'header-matrix-link',
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
                            to: '/docs/introduction',
                        },
                        {
                            label: 'API',
                            href: swaggerHubApiUrl,
                        },
                        {
                            label: 'Docs Repo',
                            href: 'https://github.com/eclipse-xpanse/xpanse-website',
                        },
                        {
                            label: 'Changelog',
                            href: 'https://github.com/eclipse-xpanse/xpanse/releases',
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
                        {
                            label: 'Matrix',
                            href: 'https://matrix.to/#/#eclipse-xpanse:matrix.eclipse.org',
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
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    },
};

module.exports = config;
