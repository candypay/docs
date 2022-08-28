export default {
  projectLink: "https://github.com/candypay/docs",
  docsRepositoryBase: "https://github.com/candypay/docs/tree/main/pages",
  titleSuffix: " – CandyPay",
  feedbackLink: () => {
    return "Question? Let us know →";
  },
  footerText: () => {
    return "Powered by Solana Pay and Candy Machine";
  },
  feedbackLabels: "feedback",
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  footerEditOnGitHubLink: true,
  floatTOC: true,
  unstable_stork: false,
  unstable_flexsearch: true,
  logo: () => {
    return (
      <>
        <span className="mr-2 font-extrabold hidden md:inline">
          CandyPay 🍭
        </span>
        <span className="text-gray-600 font-normal hidden md:inline">
          smol description
        </span>
      </>
    );
  },
  head: () => {
    const meta = {
      title: "CandyPay",
      description: "Your gateway to Solana NFTs",
      icon: "/icon.svg",
      image: "/og.png",
    };

    return (
      <>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="icon" type="image/svg" href={meta.icon} />
      </>
    );
  },
  footerEditLink: () => {
    return "Edit this page on GitHub →";
  },
  unstable_faviconGlyph: "🍭",
  defaultMenuCollapsed: true,
};
