import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://macerise.in"),
  title: "MACE RISE '26 | Conference on Resilient Infrastructure & Sustainable Engineering",
  description:
    "Shaping Resilient & Sustainable Infrastructure for Tomorrow. Organized by the Department of Civil Engineering, Mar Athanasius College of Engineering.",
  openGraph: {
    title: "MACE RISE '26",
    description:
      "Shaping Resilient & Sustainable Infrastructure for Tomorrow.",
    url: "https://macerise.in",
    siteName: "MACE RISE 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans relative">
        {/* Ambient Background Gradient Glows */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-secondary/10 blur-[120px]" />
        </div>
        
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
