import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Murat Hindicilik - Kahramanmaraş/Afşin'den Doğal Hindiler",
  description: "Kahramanmaraş/Afşin'in bereketli topraklarında yetişen doğal hindiler. Sağlıklı ve doğal beslenmiş hindilerimiz için iletişime geçin.",
  keywords: "hindi, Kahramanmaraş, Afşin, doğal hindi, organik hindi, çiftlik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <LanguageProvider>
          <LoadingScreen />
          <Navigation />
          <main className="relative">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
