import Footer1 from "./Footer1";
import Navbar2 from "./Navbar2";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar2 />
        <div> {/* Adjust px values as needed */}
          {children}
        </div>
        <Footer1 />
      </body>
    </html>
  );
}
