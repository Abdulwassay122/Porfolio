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

export const Metadata = {
  title: "Abdul Wassay | Frontend Developer & Next.js Expert",
  description: "Abdul Wassay is a frontend developer specializing in Next.js, React.js, and modern web technologies. Explore his portfolio, projects, and expertise.",
  keywords: "Abdul Wassay, frontend developer, Next.js, React.js, portfolio, web development",
  author: "Abdul Wassay",
  openGraph: {
    title: "Abdul Wassay | Frontend Developer & Next.js Expert",
    description: "Check out Abdul Wassay's projects and expertise in modern web development.",
    url: "https://porfolio-lac-seven.vercel.app/", // Replace with your actual portfolio URL
    type: "website",
    images: [
      {
        url: {Pic}, // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Abdul Wassay Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Wassay | Frontend Developer & Next.js Expert",
    description: "Explore Abdul Wassay’s portfolio and web development projects.",
    images: [`${Pic}`], // Replace with actual image
  },
  icons: {
    icon: "/favicon.ico", // Path to favicon
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{Metadata.title}</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
