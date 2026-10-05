import React from "react";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { IntlProvider } from "@/providers/IntlProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://matthewgana.dev"),
  title: "Matthew Gana | Full-Stack Software Engineer",
  description: "Personal developer portfolio of Matthew Gana, Full-Stack Software Engineer. Building secure, scalable, and intelligent software systems from backend APIs to web, mobile, and AI/ML integrations.",
  keywords: [
    "Matthew Gana",
    "Full-Stack Software Engineer",
    "Backend Engineer",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Next.js",
    "React Native",
    "Software Architecture",
    "Domain-Driven Design",
    "SaaS Architecture"
  ],
  authors: [{ name: "Matthew Gana", url: "https://github.com/matthewgana" }],
  creator: "Matthew Gana",
  openGraph: {
    title: "Matthew Gana | Full-Stack Software Engineer",
    description: "Building secure, scalable, and intelligent software systems. 11 audited and verified products across 8+ industries.",
    url: "https://matthewgana.dev",
    siteName: "Matthew Gana Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matthew Gana - Full-Stack Software Engineer"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Gana | Full-Stack Software Engineer",
    description: "Building secure, scalable, and intelligent software systems.",
    images: ["/og-image.png"]
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png"
  },
  alternates: {
    canonical: "https://matthewgana.dev/",
    languages: {
      "en": "https://matthewgana.dev/",
      "fr": "https://matthewgana.dev/",
      "pt": "https://matthewgana.dev/",
      "ar": "https://matthewgana.dev/",
      "ja": "https://matthewgana.dev/",
      "de": "https://matthewgana.dev/",
      "es": "https://matthewgana.dev/",
      "zh-Hans": "https://matthewgana.dev/",
      "x-default": "https://matthewgana.dev/"
    }
  }
};

export const viewport: Viewport = {
  themeColor: "#081c15",
  width: "device-width",
  initialScale: 1
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Matthew Gana",
  "url": "https://matthewgana.dev",
  "sameAs": [
    "https://github.com/matthewgana",
    "https://www.linkedin.com/in/matthewsgana",
    "https://www.youtube.com/@LearnWithMatthewGana"
  ],
  "jobTitle": "Full-Stack Software Engineer",
  "description": "Backend-focused full-stack engineer specialising in SaaS architecture, enterprise APIs, AI/ML integration, and domain-driven design.",
  "knowsAbout": [
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Next.js",
    "React Native",
    "Software Architecture",
    "Domain-Driven Design",
    "AI/ML Integration",
    "Cybersecurity"
  ]
};

// Inline FOUC-prevention script — runs synchronously before first paint
// so the correct theme is applied without flash.
const themeScript = `(function(){try{var s=localStorage.getItem('mg_theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);document.documentElement.classList.add(t);}catch(e){document.documentElement.setAttribute('data-theme','dark');document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme FOUC prevention — must run before body paints */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Schema.org Person structured data for rich SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <IntlProvider>
            <Header />
            <main id="main-content" aria-label="Portfolio main content">
              {children}
            </main>
            <Footer />
          </IntlProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
