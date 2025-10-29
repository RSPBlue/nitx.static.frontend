import type { Metadata } from "next"
import { Unbounded, Oswald } from "next/font/google"
import "./globals.css"

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
})

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Nova ITX",
    template: "%s | Nova ITX",
  },
  description:
    "A união das “marcas originais” desta Joint Venture, cria uma organização poderosa, com mais de 20 anos de experiência, liderança e inovação no mercado de tecnologia, somando o poder de fogo de mais de 120 colaboradores, mais de 100 desenvolvedores especializados e mais de 25 especialistas em gestão de investimentos.",
  icons: {
    icon: [{ url: "/nitx-logo-brand-color-square.svg", type: "image/svg+xml" }],
    apple: "/nitx-logo-brand-color-square.svg",
    shortcut: "/nitx-logo-brand-color-square.svg",
  },
  openGraph: {
    title: "Nova ITX",
    description:
      "A união das “marcas originais” desta Joint Venture, cria uma organização poderosa, com mais de 20 anos de experiência, liderança e inovação no mercado de tecnologia, somando o poder de fogo de mais de 120 colaboradores, mais de 100 desenvolvedores especializados e mais de 25 especialistas em gestão de investimentos.",
    url: "https://www.novaitx.com.br/",
    siteName: "Nova ITX",
    images: ["/nitx-banner-1.jpg"],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova ITX",
    description:
      "A união das “marcas originais” desta Joint Venture, cria uma organização poderosa, com mais de 20 anos de experiência, liderança e inovação no mercado de tecnologia, somando o poder de fogo de mais de 120 colaboradores, mais de 100 desenvolvedores especializados e mais de 25 especialistas em gestão de investimentos.",
    images: ["/nitx-banner-1.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
