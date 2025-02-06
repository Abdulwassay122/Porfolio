import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Pic from './component/images/Untitled design.png'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Abdul Wassay | Portfolio",
  description: "Frontend Developer specializing in Next.js and React.js",
  keywords: "Frontend Developer, React.js, Next.js, JavaScript, Portfolio",
  authors: [{ name: "Abdul Wassay", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "Abdul Wassay | Portfolio",
    description: "Frontend Developer specializing in Next.js and React.js",
    url: "https://yourwebsite.com",
    siteName: "Abdul Wassay Portfolio",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
