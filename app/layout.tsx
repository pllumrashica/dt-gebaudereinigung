import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
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
      description: "Persönliche und zuverlässige Reinigungslösungen für Privat- und Geschäftskunden.",
      images: [{ url: `${origin}/og.png`, width: 1734, height: 907, alt: "DT-Gebäudereinigung" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "DT-Gebäudereinigung",
      description: "Persönlich. Zuverlässig. Sauber.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
