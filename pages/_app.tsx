import { AppProps } from "next/app";

import "../styles.css";
import "nextra-theme-docs/style.css";

export default function Documentation({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
