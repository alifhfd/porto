import type { Metadata, Viewport } from "next";
import { Archivo, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

/* Bebas Neue  → judul sinematik (kondensat, huruf besar, rasa "title card")
   Archivo     → teks isi, grotesque netral yang dekat dengan Netflix Sans
   JetBrains   → angka & metrik, memperkuat nuansa data analyst          */
const bebas = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alifhfdporto.vercel.app"),
  title: {
    default: "Alief Hafid Sidiq | Data Analyst Portfolio & Business Management",
    template: "%s | Alief Hafid Sidiq",
  },
  description:
    "Portofolio Alief Hafid Sidiq, Data Analyst yang berfokus pada SQL, Python, Power BI, dan analisis data manufaktur.",
  applicationName: "Alief Hafid Sidiq Portfolio",
  authors: [{ name: "Alief Hafid Sidiq" }],
  creator: "Alief Hafid Sidiq",
  keywords: [
    "Alief Hafid Sidiq",
    "Data Analyst",
    "Power BI",
    "SQL",
    "Python",
    "Business Intelligence",
    "Data Analyst Indonesia",
  ],
  openGraph: {
    title: "Alief Hafid Sidiq | Data Analyst Portfolio",
    description:
      "Data Analyst Portfolio berisi proyek SQL, Python, Power BI, dashboard interaktif, dan analisis data manufaktur.",
    url: "https://alifhfdporto.vercel.app",
    siteName: "Alief Hafid Sidiq Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alief Hafid Sidiq Data Analyst Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alief Hafid Sidiq | Data Analyst Portfolio",
    description:
      "Proyek SQL, Python, Power BI, dashboard interaktif, dan analisis data manufaktur.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#141414",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${bebas.variable} ${archivo.variable} ${jetbrains.variable}`}
    >
      <body className="grain font-sans antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
