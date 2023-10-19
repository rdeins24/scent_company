// import Footer from "./Footer";
import Navbar from "./Navbar";
// import "../styles/globals.css";
// import Hero from "./contact/Hero";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
