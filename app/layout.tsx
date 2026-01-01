import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Immortalis | High-Converting Websites for Local Businesses",
  description: "Immortalis builds fast, conversion-focused websites for local businesses. Get more calls, bookings, and leads with a site designed to grow your business.",
  icons: {
    icon: "/immortalis-icon-light 1.png",
  },
  openGraph: {
    title: "Immortalis | High-Converting Websites for Local Businesses",
    description: "Immortalis builds fast, conversion-focused websites for local businesses. Get more calls, bookings, and leads with a site designed to grow your business.",
    url: "https://developer-portfolio-msjgjxd2f-ryanhalon7s-projects.vercel.app/",
    siteName: "Immortalis",
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
