import Footer1 from "./footer1";
import Navbar from "./Navbar";


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}

        <Footer1 />

      </body>
    </html>
  );
}
