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
  }
};

export const viewport: Viewport = {
  themeColor: "#081c15",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <IntlProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </IntlProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
