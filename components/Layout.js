import Footer1 from "./Footer1";
import Navbar2 from "./Navbar2";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Scentio Milano</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
      </Head>
      <div>
        <Navbar2 />
        <main >{children}</main>
        <Footer1 />
      </div>
    </>
  );
}
