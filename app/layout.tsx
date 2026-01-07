import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.domaincomputers.in"),
  title: {
    default: "Domain Computers - Complete IT Solutions in Thrissur",
    template: "%s | Domain Computers",
  },
  description:
    "Your trusted technology partner in Thrissur since 2010. Expert in laptop sales, chip-level repairs, CCTV installation, networking, and professional IT training.",
  keywords: [
    "Computer Shop Thrissur",
    "Laptop Repair Thrissur",
    "Refurbished Laptops Thrissur",
    "CCTV Installation Thrissur",
    "Tally Training Thrissur",
    "Chip Level Service",
    "IT Solutions Thrissur",
    "Domain Computers Patturaikkal",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Abdul Gafoor", url: "https://www.domaincomputers.in" }],
  creator: "Domain Computers",
  publisher: "Domain Computers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Domain Computers - Complete IT Solutions in Thrissur",
    description:
      "Expert computer sales, repairs, and IT training in Thrissur. Trusted since 2010.",
    url: "https://www.domaincomputers.in",
    siteName: "Domain Computers",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Domain Computers Thrissur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domain Computers - Complete IT Solutions in Thrissur",
    description: "Expert computer sales, repairs, and IT training in Thrissur.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${outfit.variable} ${plusJakartaSans.variable} font-body bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 antialiased selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
