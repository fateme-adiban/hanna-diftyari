import type { Metadata } from "next"
import { Albert_Sans, Playfair_Display, Instrument_Serif } from "next/font/google"
import "./globals.css"

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  style: ["italic", "normal"],
  subsets: ["latin"]
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  style: ["italic"],
  subsets: ["latin"],
  weight: "400"
})

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  style: ["italic"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Hanna Diftyari",
  description: "Make your LinkedIn presence the reason people choose you."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable} ${instrumentSerif.variable} antialiased`}>{children}</body>
    </html>
  )
}
