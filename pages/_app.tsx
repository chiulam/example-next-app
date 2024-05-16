import "@/styles/globals.css";
import { ThirdwebProvider as ThirdwebProviderV5 } from "thirdweb/react";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProviderV5>
      <Component {...pageProps} />
    </ThirdwebProviderV5>
  );
}
