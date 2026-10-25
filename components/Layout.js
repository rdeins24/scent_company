import Footer1 from "./Footer1";
import Navbar2 from "./Navbar2";
import Head from "next/head";
import { organizationSchema, localBusinessSchema } from "../lib/schema";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          key="jsonld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          key="jsonld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </Head>
      <div className="">
        <Navbar2 />
        <main>{children}</main>
        <Footer1 />
      </div>
    </>
  );
}
