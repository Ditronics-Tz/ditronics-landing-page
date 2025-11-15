import "./globals.css"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Manrope, Playfair_Display } from "next/font/google"

const bodyFont = Manrope({ subsets: ["latin"], variable: "--font-body" })
const displayFont = Playfair_Display({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "DITRONICS — Precision Technology & Digital Systems",
  description:
    "Ditronics delivers precision-built electronics, intelligent software, and immersive digital experiences for forward-looking organizations.",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}>
      <body className="font-body bg-[radial-gradient(circle_at_top,_#1F0A27_0%,_#0D0414_55%,_#060109_100%)] text-[#F6F1FF] antialiased">
        {children}
      </body>
    </html>
  )
}
