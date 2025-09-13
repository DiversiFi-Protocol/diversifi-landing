import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DiversiFi - Structured Stability™ for DeFi",
  description:
    "The preferred reserve asset for DeFi.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">{children}</body>
    </html>
  );
}
