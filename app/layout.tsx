import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SITE } from "@/lib/seo";

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Speeda | بوت واتساب AI للمطاعم السعودية + ربط Foodics",
    template: "%s | Speeda",
  },
  description:
    "موظف خدمة عملاء AI يرد على عملاء مطعمك بالعربي السعودي 24/7، ويسجل الطلبات في Foodics مباشرة. جرّب 14 يوم مجاناً.",
  keywords: [
    "بوت واتساب",
    "شات بوت مطاعم",
    "Foodics integration",
    "واتساب AI",
    "Speeda",
    "سبيدا",
  ],
  authors: [{ name: "Speeda" }],
  creator: "Speeda",
  publisher: "Speeda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "SA",
    "geo.placename": "Saudi Arabia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={arabic.variable}>
      <body className="bg-white font-sans text-ink-900 antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
