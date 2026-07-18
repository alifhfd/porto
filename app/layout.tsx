import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Alief Hafid Sidiq | Data Analyst Portfolio & Business Management",
  description: "Portofolio Alief Hafid Sidiq, Data Analyst yang berfokus pada SQL, Python, Power BI, dan analisis data manufaktur.",
  openGraph: {
    title: "Alief Hafid Sidiq | Data Analyst Portfolio",
    description: "Data Analyst Portfolio berisi proyek SQL, Python, Power BI, dashboard interaktif, dan analisis data manufaktur.",
    url: "https://alifhfdporto.vercel.app",
    siteName: "Alief Hafid Sidiq Portfolio",
    images: [{ url: "https://alifhfdporto.vercel.app/og-image.jpg", width: 1200, height: 630, alt: "Alief Hafid Sidiq Data Analyst Portfolio" }],
    locale: "id_ID",
    type: "website",
  },
  keywords: ["Alief Hafid Sidiq", "Data Analyst", "Power BI", "SQL", "Python", "Business Intelligence", "Data Analyst Indonesia"],
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#141414' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}