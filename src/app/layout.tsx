import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Site Template",
  description: "Built with the Universal Design System",
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
