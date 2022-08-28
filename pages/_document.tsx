import {
  Head,
  Html,
  Main,
  default as NextDocument,
  NextScript,
} from "next/document";

class Document extends NextDocument {
  render() {
    const meta = {
      title: "CandyPay",
      description: "Your gateway to Solana NFTs",
      icon: "/icon.svg",
      image: "/og.png",
    };

    return (
      <Html lang="en">
        <Head>
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
