import type { Metadata } from "next";
import { Nunito, Inria_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "@/style/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inria",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swati Paul | Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 4+ years building high-performance web apps with React.js, Next.js, Angular, and TypeScript. Pixel-perfect UIs, API integration, Core Web Vitals optimization.",
  keywords: [
    "Senior Frontend Developer",
    "React.js",
    "Next.js",
    "Angular",
    "TypeScript",
    "Kolkata",
  ],
  authors: [{ name: "Swati Paul" }],
  openGraph: {
    title: "Swati Paul | Senior Frontend Developer",
    description:
      "Results-driven Senior Frontend Developer specializing in React, Next.js, Angular, and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${inriaSans.variable}`}>
      <body className="font-sans antialiased bg-brand-dark text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
