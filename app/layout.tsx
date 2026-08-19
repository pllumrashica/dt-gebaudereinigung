import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Preloader } from "./components/layout/Preloader";
import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { siteName, siteUrl } from "./data/site";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Professionelle Reinigung für Privat- und Geschäftskunden – zuverlässig, individuell und persönlich.",
  applicationName: siteName,
  icons: {
    icon: "/dt-cleaning-favicon.svg",
    shortcut: "/dt-cleaning-favicon.svg",
    apple: "/dt-cleaning-favicon.svg",
  },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName,
    title: "Sauberkeit, die man sieht. Qualität, die man spürt.",
    description:
      "Persönliche und zuverlässige Reinigungslösungen für Privat- und Geschäftskunden.",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1734,
        height: 907,
        alt: "DT-Gebäudereinigung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Persönlich. Zuverlässig. Sauber.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} is-preloading`}
        suppressHydrationWarning
      >
        <a className="skip-link" href="#hauptinhalt">Zum Inhalt springen</a>
        <Preloader />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
