import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://jxjurkiewicz.github.io"),
  title: "Jakub Jurkiewicz - Portfolio",
  description: "Portfolio written in React.js",
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-rubik">
        <Header />

        <main className="max-w-7xl mx-auto px-5 pt-[88px] md:pt-0 overflow-hidden">
          {children}
        </main>

        <div className="overflow-hidden">
          <Footer />
        </div>
      </body>
    </html>
  );
}
