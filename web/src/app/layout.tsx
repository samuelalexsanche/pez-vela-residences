import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://samuelalexsanche.github.io"),
  title: {
    default: "Pez Vela Residences — La Cruz de Huanacaxtle, Riviera Nayarit",
    template: "%s · Pez Vela Residences",
  },
  description:
    "Departamentos y penthouses de lujo frente a la Bahía de Banderas, en La Cruz de Huanacaxtle. Tu espacio, tu mar. En preventa.",
  keywords: [
    "Pez Vela Residences",
    "La Cruz de Huanacaxtle",
    "Riviera Nayarit",
    "departamentos de lujo",
    "penthouses",
    "preventa",
    "inversión inmobiliaria",
  ],
  openGraph: {
    title: "Pez Vela Residences",
    description: "Tu espacio, tu mar. Residencias de lujo en la Riviera Nayarit.",
    type: "website",
    locale: "es_MX",
    images: [`${BASE}/branding/banner-portada-ola-mar.jpg`],
  },
  icons: {
    icon: `${BASE}/branding/logo-pezvela-transparente.png`,
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
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
