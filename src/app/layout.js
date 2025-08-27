import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen">
        <main className="bg-white min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">{children}</div> 
          <Footer />
        </main>
      </body>
    </html>
  );
}
