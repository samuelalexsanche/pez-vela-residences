import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/seo/JsonLd";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const SITE_URL = "https://samuelalexsanche.github.io/pez-vela-residences";
const OG_IMAGE = `${SITE_URL}/branding/banner-portada-ola-mar.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pez Vela Residences — Departamentos de Lujo en La Cruz de Huanacaxtle",
    template: "%s · Pez Vela Residences",
  },
  description:
    "Departamentos y penthouses de lujo en preventa frente a la Bahía de Banderas, La Cruz de Huanacaxtle, Riviera Nayarit. Desde 100 m² con terraza privada, alberca infinity y rooftop. Tu espacio, tu mar.",
  keywords: [
    "Pez Vela Residences",
    "departamentos en venta La Cruz de Huanacaxtle",
    "departamentos de lujo Riviera Nayarit",
    "penthouses Bahía de Banderas",
    "preventa inmobiliaria Nayarit",
    "inversión inmobiliaria playa México",
    "departamentos frente al mar Riviera Nayarit",
    "La Cruz de Huanacaxtle Marina",
    "Punta de Mita departamentos",
    "departamentos vacacionales Nayarit",
  ],
  authors: [{ name: "Pez Vela Residences" }],
  creator: "Mattera Systems",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Pez Vela Residences — Departamentos de Lujo en La Cruz de Huanacaxtle",
    description:
      "Departamentos y penthouses de lujo en preventa frente a la Bahía de Banderas. Desde 100 m² con terraza, alberca infinity y rooftop.",
    url: SITE_URL,
    siteName: "Pez Vela Residences",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pez Vela Residences — Riviera Nayarit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pez Vela Residences — Lujo frente al mar en Riviera Nayarit",
    description:
      "Departamentos y penthouses en preventa. La Cruz de Huanacaxtle, Bahía de Banderas.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: `${BASE}/branding/logo-pezvela-transparente.png`,
    apple: `${BASE}/branding/logo-pezvela-transparente.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${manrope.variable} ${pinyon.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-crema text-foreground">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
