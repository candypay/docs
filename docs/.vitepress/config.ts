import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "CandyPay",
  description: "Seamless mobile native UX on Solana",

  lastUpdated: true,
  cleanUrls: "without-subfolders",

  head: [
    ["meta", { name: "theme-color", content: "#8b55ff" }],
    [
      "link",
      {
        rel: "icon",
        href: "https://candypay.fun/logo.png",
      },
    ],
  ],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    logo: "https://candypay.fun/logo.png",

    nav: [
      {
        text: "Discord",
        link: "https://discord.gg/VGjPXWUHGT",
      },
      {
        text: "Twitter",
        link: "https://candypayfun",
      },
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsible: true,
        items: [
          {
            text: "Introduction",
            link: "/",
          },
          {
            text: "Terminology",
            link: "/terminology",
          },
          {
            text: "How it works",
            link: "/how-it-works",
          },
        ],
      },
      {
        text: "Checkout",
        collapsible: true,
        items: [
          {
            text: "Introduction",
            link: "/checkout/introduction",
          },
          {
            text: "Getting Started",
            link: "/checkout/getting-started",
          },
          {
            text: "Node SDK",
            link: "/checkout/node-sdk",
          },
          {
            text: "React SDK",
            link: "/checkout/react-sdk",
          },
          {
            text: "Webhooks",
            link: "/checkout/webhooks",
          },
        ],
      },
      {
        text: "Utility SDK",
        collapsible: true,
        items: [
          {
            text: "Overview",
            link: "/utility-sdk/",
          },
          {
            text: "Candy Machine module",
            link: "/utility-sdk/candy-machine",
          },
          {
            text: "NFT module",
            link: "/utility-sdk/nft",
          },
        ],
      },
    ],
  },
});
