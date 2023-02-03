import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "CandyPay",
  description: "Seamless, mobile-native NFT & Payments experiences on Solana",

  lastUpdated: true,
  cleanUrls: "without-subfolders",

  head: [
    ["meta", { name: "theme-color", content: "#8b55ff" }],
    [
      "link",
      {
        rel: "icon",
        href: "https://res.cloudinary.com/dtzqgftjk/image/upload/v1669972940/2_cdaoyi_1_somgup.png",
      },
    ],
  ],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    logo: "https://res.cloudinary.com/dtzqgftjk/image/upload/v1669972940/2_cdaoyi_1_somgup.png",

    editLink: {
      pattern: "https://github.com/candypay/docs/edit/main/docs/:path",
      text: "Suggest changes to this page",
    },

    nav: [
      {
        text: "Get Started",
        link: "/checkout/introduction.html",
      },
    ],

    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/candypayfun" },
      { icon: "discord", link: "https://dsc.gg/candypay" },
    ],

    footer: {
      copyright: "Built on Solana",
    },

    sidebar: [
      {
        text: "Checkout",
        collapsible: true,
        items: [
          {
            text: "Introduction",
            link: "/checkout/introduction.html",
          },
          {
            text: "How it works",
            link: "/checkout/how-it-works.html",
          },
          {
            text: "Quickstart",
            link: "/checkout/quickstart.html",
          },
          {
            text: "REST API",
            items: [
              {
                text: "Introduction",
                link: "/checkout/api/introduction.html",
              },
              {
                text: "Endpoints",
                link: "/checkout/api/endpoints.html",
              },
              {
                text: "Type Definitions",
                link: "/checkout/api/types.html",
              },
            ],
          },
          {
            text: "Node SDK",
            link: "/checkout/node-sdk.html",
          },
          {
            text: "React SDK",
            link: "/checkout/react-sdk.html",
          },
          {
            text: "Webhooks",
            link: "/checkout/webhooks.html",
          },
          {
            text: "Discounts",
            link: "/checkout/discounts.html",
          },
        ],
      },
      {
        text: "Guides",
        collapsible: true,
        items: [
          {
            text: "Create NFT collection",
            link: "/guides/create-and-launch-nft-collection.html",
          },
        ],
      },
      {
        text: "Utility SDK",
        collapsible: true,
        items: [
          {
            text: "Overview",
            link: "/utility-sdk/index.html",
          },
          {
            text: "Candy Machine module",
            link: "/utility-sdk/modules/candy-machine.html",
          },
          {
            text: "NFT module",
            link: "/utility-sdk/modules/nft.html",
          },
        ],
      },
    ],
  },
});
