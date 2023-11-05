import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";
import Layout from "../components/Layout";
import "../styles/globals.css";

import { Inter } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout >
      <SizeObserver>
        <ScrollObserver>
          <div className={`${inter.variable} font-mono font-inter`}>

          <Component {...pageProps} />
          </div>
        </ScrollObserver>
      </SizeObserver>
    </Layout>
  );
}

export default MyApp;
