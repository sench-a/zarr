import { soehne } from "@/styles/fonts";
import { Header } from "@/components/layout/header";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { WEBSITE_CONFIG } from "@/config/site";
import type { LayoutProps } from "@/types";
import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Providers } from "@/components/layout/providers";

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_CONFIG.url),
  title: {
    default: WEBSITE_CONFIG.title,
    template: `%s | ${WEBSITE_CONFIG.title}`,
  },
  description: WEBSITE_CONFIG.description,
  openGraph: {
    title: WEBSITE_CONFIG.title,
    description: WEBSITE_CONFIG.description,
    url: WEBSITE_CONFIG.url,
    siteName: WEBSITE_CONFIG.siteName,
    images: {
      url: `${WEBSITE_CONFIG.url}/opengraph-image.png`,
      width: 1920,
      height: 1080,
    },
    locale: "en",
    type: "website",
  },
  twitter: {
    title: WEBSITE_CONFIG.title,
    description: WEBSITE_CONFIG.description,
    card: "summary_large_image",
    images: `${WEBSITE_CONFIG.url}/opengraph-image.png`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: ["/favicon-16x16.png", "/favicon-32x32.png"],
    apple: "/apple-touch-icon.png",
  },
  manifest: `${WEBSITE_CONFIG.url}/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google",
  },
  authors: [
    {
      name: WEBSITE_CONFIG.title,
      url: WEBSITE_CONFIG.url,
    },
  ],
  creator: WEBSITE_CONFIG.title,
  publisher: WEBSITE_CONFIG.title,
  generator: "Next.js",
  applicationName: WEBSITE_CONFIG.title,
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={soehne.className}>
        <Providers>
          <Header />
          {children}
        </Providers>

        <Sonner />

        {/* <VercelAnalytics /> */}
      </body>
    </html>
  );
}
