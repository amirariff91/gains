import './globals.css'
import './styles/timeline.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import { GeistSans } from "geist/font"
import { GeistMono } from "geist/font/mono"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistSans = GeistSans
const geistMono = GeistMono

export const metadata: Metadata = {
  title: 'Gains Education Group - Digital Strategy 2025',
  description: 'Comprehensive digital transformation strategy for Gains Education Group, unifying customer experience and operations across all institutions.',
  keywords: "Islamic international school Malaysia, STEM school Malaysia, Cambridge syllabus Islamic school, Sekolah swasta terbaik, international school in Shah Alam",
  openGraph: {
    title: "School SEO Strategy | IDRISSI & TINTA Schools",
    description: "Comprehensive SEO strategy for IDRISSI International School and Sekolah TINTA, designed to increase student enrollment through targeted digital visibility and parent engagement.",
    type: "website",
    locale: "en_MY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950`}>
        {children}
      </body>
    </html>
  )
}
