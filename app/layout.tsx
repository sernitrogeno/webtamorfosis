import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { BackToTop } from "@/components/BackToTop";
import { FloatingContact } from "@/components/FloatingContact";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rediseño Web Profesional para Negocios | Webtamorfosis",
    template: "%s | Webtamorfosis",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "rediseño web",
    "renovar página web",
    "modernizar página web",
    "diseño web profesional",
    "rediseño web para negocios",
    "mejorar página web",
    "web para restaurantes",
    "web para negocios locales",
    "agencia de rediseño web",
    "diseño web responsive",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Rediseño Web Profesional para Negocios | Webtamorfosis",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rediseño Web Profesional para Negocios | Webtamorfosis",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a18" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Datos estructurados básicos: ProfessionalService
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.contact.email,
  slogan: site.tagline,
  areaServed: "ES",
  serviceType: "Rediseño y diseño web para negocios",
  // TODO: añadir "telephone", "address" y "sameAs" (redes) con los datos reales.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={jakarta.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <BackToTop />
        <FloatingContact />
        <CookieBanner />
      </body>
    </html>
  );
}
