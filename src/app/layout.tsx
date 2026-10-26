import type { Metadata } from "next";
import "./globals.css";
import "../styles/reference.css";
import "../styles/sections/utama.css";
import "../styles/sections/kisah.css";
import "../styles/sections/perjalanan.css";
import { LanguageProvider } from "@/components/layout/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://story.syahmiaof.my"),
  title: "SYAHMIAOF — The Story of Becoming",
  description:
    "Laman web editorial sinematik peribadi SYAHMIAOF. Kisah perjalanan, falsafah disiplin, pengkomputeran awan, dan inovasi kejuruteraan perisian.",
  keywords: ["Syahmi", "SYAHMIAOF", "Editorial", "Cloud Computing", "AI", "Portfolio", "Malaysia"],
  authors: [{ name: "Muhammad Syahmi", url: "https://story.syahmiaof.my" }],
  creator: "Muhammad Syahmi",
  publisher: "SYAHMIAOF",
  openGraph: {
    type: "website",
    locale: "ms_MY",
    url: "https://story.syahmiaof.my",
    siteName: "SYAHMIAOF",
    title: "SYAHMIAOF — The Story of Becoming",
    description:
      "Laman web editorial sinematik peribadi SYAHMIAOF. Kisah perjalanan, falsafah disiplin, dan inovasi kejuruteraan perisian.",
    images: [
      {
        url: "https://story.syahmiaof.my/og-image.jpg",
        secureUrl: "https://story.syahmiaof.my/og-image.jpg",
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
    images: ["https://story.syahmiaof.my/og-image.jpg"],
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
      <head>
        <link rel="image_src" href="https://story.syahmiaof.my/og-image.jpg" />
        <meta property="og:image" content="https://story.syahmiaof.my/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://story.syahmiaof.my/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className="antialiased min-h-screen bg-[#F7F3EB] text-[#100C0B]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
