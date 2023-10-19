import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SizeObserver>
        <ScrollObserver>
          <Component {...pageProps} />
        </ScrollObserver>
      </SizeObserver>
    </Layout>
  );
}

export default MyApp;
