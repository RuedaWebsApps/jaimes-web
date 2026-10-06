import type { Metadata, Viewport } from "next";
import { Albert_Sans, Nanum_Myeongjo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
});

const nanum = Nanum_Myeongjo({
  variable: "--font-nanum",
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

const description =
  "Más de 10 años ayudando a personas y pequeños negocios con impuestos, seguros, contabilidad y registros en Austin, TX. Atención en español e inglés.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Jaimes Tax & Insurance agency LLC. | Impuestos y Seguros en Austin, TX",
    template: "%s | Jaimes Tax & Insurance",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: site.url,
    siteName: site.name,
    title: "Jaimes Tax & Insurance agency LLC.",
    description,
    images: [{ url: "/images/attorney-8-1.jpg", alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#12273f",
};

// Datos estructurados para Google (negocio local)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AccountingService", "InsuranceAgency"],
  name: site.legalName,
  url: site.url,
  telephone: site.phoneE164,
  email: site.email,
  image: `${site.url}/images/logo.png`,
  logo: `${site.url}/images/logo.png`,
  foundingDate: "2011",
  areaServed: "Austin, TX",
  availableLanguage: ["es", "en"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressParts.street,
    addressLocality: site.addressParts.city,
    addressRegion: site.addressParts.region,
    postalCode: site.addressParts.postalCode,
    addressCountry: site.addressParts.country,
  },
  openingHours: site.openingHours,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${albert.variable} ${nanum.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-navy focus:font-semibold"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
