import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arun Raina — Product Leader",
  description:
    "Product leader with 11+ years scaling B2B SaaS, marketplace, retail media, payments and consumer platforms — Dunnhumby, Nojoto, Griffy.",
  metadataBase: new URL("https://arunraina.dev"),
  openGraph: {
    title: "Arun Raina — Product Leader",
    description:
      "Product leader with 11+ years scaling B2B SaaS, marketplace, retail media, payments and consumer platforms.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
