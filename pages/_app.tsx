import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { trackRoute } from "../lib/navigation";
import ScrollObserver from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";
import Layout from "../components/Layout";
import { Newsreader, Work_Sans } from "next/font/google";

// latin-ext pentru ș, ț, ă, â, î. Pentru versiunea în rusă: fallback PT Serif / PT Sans (vezi DESIGN-SYSTEM.md).
const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    trackRoute(router.asPath);
    const onChange = (url: string) => trackRoute(url);
    router.events.on("routeChangeComplete", onChange);
    return () => router.events.off("routeChangeComplete", onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${newsreader.variable} ${workSans.variable} font-sans antialiased`}>
      <Layout>
        <SizeObserver>
          <ScrollObserver>
            <Component {...pageProps} />
          </ScrollObserver>
        </SizeObserver>
      </Layout>
    </div>
  );
}

export default MyApp;
