import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
  title: "Ryan Halon | Full-Stack Developer",
  description: "Developing performant, user-centered web applications.",
  icons: {
    icon: "/public/my-logo.svg",
  },
  openGraph: {
    title: "Ryan Halon | Full-Stack Developer",
    description: "Helping businesses build high-converting websites.",
    url: "https://developer-portfolio-msjgjxd2f-ryanhalon7s-projects.vercel.app/",
    siteName: "Ryan Halon",
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
