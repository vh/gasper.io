/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Gasper',
  tagline: 'Turn Docker Container Registry into Artifacts Repository',
  url: 'https://gasper.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gasperio',
  projectName: 'gasper',
  themeConfig: {
    navbar: {
      title: 'Gasper',
      logo: {
        alt: 'Gasper Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        { type: 'localeDropdown', position: 'right' },
        {
          href: 'https://github.com/gasperio/gasper',
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
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/gasperio/community'
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/gasperio/gasper',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/gasper_io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gasper.io`,
    },
    gtag: {
      trackingID: 'G-CWZ1QQ8MEG',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/gasperio/gasper.io/edit/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/gasperio/gasper.io/edit/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      ru: {
        label: 'Русский',
      },
    },
  },
};
