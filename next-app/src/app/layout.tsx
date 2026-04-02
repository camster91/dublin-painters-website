import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Phone } from "lucide-react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paintersdublin.ie"),
  title: "Top-Rated Painters in Dublin | Painters Dublin",
  description: "Transform your home with premium paints and meticulous prep work. Fully insured and trusted by Dublin homeowners for interior and exterior painting.",
  openGraph: {
    title: "Painters Dublin - Top-Rated Painting Services",
    description: "Transform your home with premium paints and meticulous prep work. Fully insured and trusted by Dublin homeowners.",
    url: "https://paintersdublin.ie",
    siteName: "Painters Dublin",
    locale: "en_IE",
    type: "website",
    images: [{ url: "/images/main_hero.png", width: 1200, height: 630, alt: "Painters Dublin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top-Rated Painters in Dublin | Painters Dublin",
    description: "Transform your home with premium paints and meticulous prep work.",
    images: ["/images/main_hero.png"],
  },
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Painters Dublin",
  description: "Top-rated premium painting services for residential and commercial properties in Dublin.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dublin",
    addressCountry: "IE",
  },
  telephone: "+35312345678",
  areaServed: {
    "@type": "City",
    name: "Dublin",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          data-domain="paintersdublin.test"
          src="https://plausible.io/js/script.js"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans min-h-full flex flex-col antialiased bg-brand-light dark:bg-[#0f172a] selection:bg-brand-blue selection:text-white pb-20 md:pb-0`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          
          {/* Mobile Sticky Call Now Button */}
          <div className="md:hidden fixed bottom-0 left-0 w-full p-4 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.15)]">
            <a href="tel:012345678" className="flex items-center justify-center gap-2 w-full bg-brand-green hover:bg-green-700 text-white p-4 rounded-xl font-bold text-lg transition shadow-lg">
              <Phone className="w-5 h-5" />
              Call Now for a Quote
            </a>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
