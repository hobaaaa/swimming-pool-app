import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safir Havuz - Denizli havuz imalatı.",
  description:
    "Havuz imalatında uzmanlık ve tecrübe! Denizli'de uzman bir havuz firması arıyorsanız Safir Yapı ile havuzunuzun her aşamasında yanınızdayız. Yüzme havuzları, süs havuzları, spa, sauna, anahtar teslim havuz ve havuz aksesuarları için bize danışın. Hemen ücretsiz fiyat teklifi alın!Denizli havuz imalatı ustası Safir Havuz.Safir Yapı Denizli havuz imalatı, süs havuzu imalatı, yüzme havuzu imalatı, sauna ve spa imalatında bir numara. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased leading-8 overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
