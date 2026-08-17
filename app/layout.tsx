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

const localOrigin = "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(localOrigin),
  title: {
    default: "DT-Gebäudereinigung",
    template: "%s | DT-Gebäudereinigung",
  },
  description:
    "Professionelle Reinigung für Privat- und Geschäftskunden – zuverlässig, individuell und persönlich.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "DT-Gebäudereinigung",
    title: "Sauberkeit, die man sieht. Qualität, die man spürt.",
    description:
      "Persönliche und zuverlässige Reinigungslösungen für Privat- und Geschäftskunden.",
    images: [
      {
        url: `${localOrigin}/og.png`,
        width: 1734,
        height: 907,
        alt: "DT-Gebäudereinigung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DT-Gebäudereinigung",
    description: "Persönlich. Zuverlässig. Sauber.",
    images: [`${localOrigin}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
