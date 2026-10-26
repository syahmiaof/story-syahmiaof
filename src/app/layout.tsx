import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SYAHMIAOF — The Story of Becoming",
  description:
    "Laman web editorial sinematik peribadi SYAHMIAOF. Kisah perjalanan, falsafah disiplin, pengkomputeran awan, dan inovasi kejuruteraan perisian.",
  keywords: ["Syahmi", "SYAHMIAOF", "Editorial", "Cloud Computing", "AI", "Portfolio", "Malaysia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-[#F7F3EB] text-[#100C0B]">
        {children}
      </body>
    </html>
  );
}
