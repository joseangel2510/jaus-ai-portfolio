import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { GridBackground } from "@/components/grid-background";
import { CustomCursor } from "@/components/custom-cursor";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const SITE_TITLE =
  "José Ángel Ulibarri — AI Systems Engineer | alquimIA";
const SITE_DESCRIPTION =
  "Ingeniero en Automática construyendo agentes de IA, sistemas conversacionales (WhatsApp, voz, Instagram) y automatizaciones n8n para clínicas y empresas. Cero humo — código que produce resultados.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ulia.agency"),
  title: {
    default: SITE_TITLE,
    template: "%s — ULÍA",
  },
  description: SITE_DESCRIPTION,
  applicationName: "ULÍA",
  authors: [{ name: "José Ángel Ulibarri" }],
  keywords: [
    "agentes de IA",
    "automatización WhatsApp",
    "n8n",
    "agentes de voz",
    "Retell AI",
    "Airtable",
    "Next.js",
    "AI Systems Engineer",
    "Monterrey",
    "alquimIA",
    "ULÍA",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://ulia.agency",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "ULÍA",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050608",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${geist.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="relative min-h-screen bg-base text-ink">
        <GridBackground />
        <CustomCursor />
        <RevealOnScroll />
        <Nav />
        <main id="top" className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
