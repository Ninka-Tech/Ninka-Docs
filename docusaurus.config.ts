import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Ninka Docs",
  tagline: "Secure Authentication Made Simple with Ninka",
  favicon: "img/favicon.png",

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  // Set the production url of your site here
  url: "https://docs.ninka.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Ninka", // Usually your GitHub org/user name.
  projectName: "Ninka", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Quasar-host/Ninka-Docs",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Ninka",
      logo: {
        alt: "Ninka Logo",
        src: "img/favicon.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "setupSidebar",
          position: "left",
          label: "Geting Started",
        },
        {
          type: "docSidebar",
          sidebarId: "apirefSidebar",
          position: "left",
          label: "API Reference",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Quasar-host/Ninka",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Geting Started",
              to: "/docs/Setup/overview",
            },
            {
              label: "API Reference",
              to: "/docs/API-Reference/overview",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord (comming soon)",
              href: "#",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Quasar-host/Ninka",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ninka.`,
    },
    prism: {
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
