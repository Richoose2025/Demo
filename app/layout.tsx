import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Richoose Natural Honey - Premium Raw Honey from Kerala",
  description:
    "Discover premium raw honey from the pristine forests of Kerala. Richoose Natural Honey offers pure, unprocessed honey with antioxidant, anti-inflammatory, and antibacterial properties.",
  keywords:
    "raw honey, natural honey, Kerala honey, organic honey, pure honey, honey benefits, Richoose honey, Trivandrum honey, forest honey, multiflora honey, black forest honey, stingless bee honey, tulsi honey, eucalyptus honey",
  openGraph: {
    title: "Richoose Natural Honey - Premium Raw Honey from Kerala",
    description: "Pure, unprocessed honey with natural health benefits from the pristine forests of Trivandrum.",
    images: [{ url: "/og-image.jpg" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://richoose.com" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Richoose Natural Honey",
              url: "https://richoose.com",
              logo: "https://richoose.com/logo.png",
              description: "Premium raw honey from the pristine forests of Kerala.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kuttichal",
                addressRegion: "Trivandrum",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-98765-43210",
                contactType: "customer service",
              },
              sameAs: [
                "https://facebook.com/richoosehoney",
                "https://instagram.com/richoosehoney",
                "https://twitter.com/richoosehoney",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'