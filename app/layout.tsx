import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://funngro.com"),
  title: {
    default: "Funngro - Earn While You Learn | Student Freelancing Platform",
    template: "%s | Funngro",
  },
  description:
    "India's largest teen talent platform. 70 lakh young Indians earn money by promoting brands, creating content, and completing tasks — paid instantly via UPI. Free to join.",
  keywords: [
    "student freelancing",
    "earn money online for students",
    "freelance jobs for teenagers",
    "part-time work for students",
    "student jobs India",
    "online work for students",
    "teenage freelancers",
  ],
  authors: [{ name: "Funngro" }],
  creator: "Funngro",
  publisher: "Funngro",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://funngro.com",
    title: "Funngro - Earn While You Learn",
    description:
      "70 lakh young Indians earn money on Funngro by working with India's biggest brands. Free to join, paid via UPI.",
    siteName: "Funngro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Funngro Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funngro - Earn While You Learn",
    description:
      "70 lakh young Indians earn money on Funngro by working with India's biggest brands. Free to join, paid via UPI.",
    images: ["/og-image.jpg"],
    creator: "@funngro",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
