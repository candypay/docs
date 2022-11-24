import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "CandyPay",
  description: "Seamless mobile native UX on Solana",

  lastUpdated: true,
  cleanUrls: "without-subfolders",

  head: [["meta", { name: "theme-color", content: "#8b55ff" }]],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
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
            link: "/checkout/",
          },
          {
            text: "Getting Started",
            link: "/checkout/getting-started",
          },
          {
            text: "Node SDK",
            items: [
              {
                text: "Overview",
                link: "/checkout/node/",
              },
              {
                text: "Session module",
                link: "/checkout/node/session-module",
              },
              {
                text: "Webhook module",
                link: "/checkout/node/webhook-module",
              },
            ],
          },
          {
            text: "React SDK",
            items: [
              {
                text: "Overview",
                link: "/checkout/react/",
              },
            ],
          },
          {
            text: "Webhooks",
            items: [
              {
                text: "Quickstart",
                link: "/checkout/webhooks/quickstart",
              },
            ],
          },
          {
            text: "Concepts",
            items: [
              {
                text: "Atomic transactions",
                link: "/checkout/concepts/atomic-transactions",
              },
            ],
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
            text: "Modules",
            items: [
              {
                text: "Candy Machine",
                link: "/utility-sdk/modules/candy-machine",
              },
              {
                text: "NFT",
                link: "/utility-sdk/modules/nft",
              },
            ],
          },
        ],
      },
    ],

    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },
  },
});
