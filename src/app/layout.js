import "./globals.css";

export const metadata = {
  title: "Jakub Jurkiewicz - Portfolio",
  description: "Portfolio written in React.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-rubik">{children}</body>
    </html>
  );
}
