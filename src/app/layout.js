import "./globals.css";

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
      <body className="font-rubik">{children}</body>
    </html>
  );
}
