import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Good Fellas Casino | UK's Best Casino Review Hub 2026",
  description: "Find the best online casinos in the UK. Expert-reviewed, exclusive bonuses, and rapid payouts. We only list UKGC licensed and trusted operators.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

const GA_ID = "AW-18079177086";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />

        {/* Google Tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');

            // Brand click conversion event
            window.gtag_report_conversion = function(brandName) {
              gtag('event', 'brand_click', {
                'send_to': '${GA_ID}',
                'brand_name': brandName || 'unknown'
              });
            };
          `}
        </Script>
      </body>
    </html>
  );
}
