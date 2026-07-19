import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AuroraBackground from "@/components/AuroraBackground";
import SplashScreen from "@/components/SplashScreen";
import { profile } from "@/lib/data";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://tejasnaik.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — Software Engineer, AR Developer & AI Researcher`,
  description: profile.blurb,
  keywords: [
    "Tejas Naik",
    "Software Engineer",
    "AR Developer",
    "AI Researcher",
    "Machine Learning",
    "RAG",
    "Hallucination Detection",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — Software Engineer, AR Developer & AI Researcher`,
    description: profile.blurb,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "/images/tejas.jpg", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Engineer, AR Developer & AI Researcher`,
    description: profile.blurb,
    images: ["/images/tejas.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
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
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-body">
        <SplashScreen />
        <AuroraBackground />
        {children}
      </body>
    </html>
  );
}
