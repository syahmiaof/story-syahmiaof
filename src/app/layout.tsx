import type { Metadata } from "next";
import "./globals.css";
import "../styles/reference.css";
import "../styles/sections/utama.css";
import "../styles/sections/kisah.css";
import "../styles/sections/perjalanan.css";
import { LanguageProvider } from "@/components/layout/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://syahmiaof.my"),
  title: "SYAHMIAOF — The Story of Becoming",
  description:
    "Laman web editorial sinematik peribadi SYAHMIAOF. Kisah perjalanan, falsafah disiplin, pengkomputeran awan, dan inovasi kejuruteraan perisian.",
  keywords: ["Syahmi", "SYAHMIAOF", "Editorial", "Cloud Computing", "AI", "Portfolio", "Malaysia"],
  authors: [{ name: "Muhammad Syahmi", url: "https://syahmiaof.my" }],
  creator: "Muhammad Syahmi",
  publisher: "SYAHMIAOF",
  openGraph: {
    type: "website",
    locale: "ms_MY",
    url: "https://syahmiaof.my",
    siteName: "SYAHMIAOF",
    title: "SYAHMIAOF — The Story of Becoming",
    description:
      "Laman web editorial sinematik peribadi SYAHMIAOF. Kisah perjalanan, falsafah disiplin, dan inovasi kejuruteraan perisian.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SYAHMIAOF — The Story of Becoming",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SYAHMIAOF — The Story of Becoming",
    description:
      "Laman web editorial sinematik peribadi SYAHMIAOF. Kisah perjalanan, falsafah disiplin, dan inovasi kejuruteraan perisian.",
    images: ["/og-image.jpg"],
    creator: "@syahmiaof",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-[#F7F3EB] text-[#100C0B]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
