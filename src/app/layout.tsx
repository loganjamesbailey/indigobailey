import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indigo Bailey — Writer & Creative",
  description:
    "The personal brand and creative writing portfolio of Indigo Bailey.",
  metadataBase: new URL("https://indigobailey.life"),
  openGraph: {
    title: "Indigo Bailey — Writer & Creative",
    description:
      "The personal brand and creative writing portfolio of Indigo Bailey.",
    url: "https://indigobailey.life",
    siteName: "Indigo Bailey",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
