import Header from "@/components/Header/Header";
import "../globals.css";
import Footer from "@/components/Footer";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Loading from "./loading";

export const metadata = {
  metadataBase: new URL("https://jakubjurkiewicz.pl/"),
  title: "Jakub Jurkiewicz - Portfolio",
  description: "Portfolio written in Next.js",
  openGraph: {
    images: "./opengraph-image.png",
  },
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className="font-rubik">
        <Header lng={lng} />

        <main
          fallback={<Loading />}
          className="max-w-7xl te mx-auto px-5 pt-[88px] md:pt-0 overflow-hidden"
        >
          {children}
        </main>

        <div className="overflow-hidden">
          <Footer />
        </div>
      </body>
    </html>
  );
}
