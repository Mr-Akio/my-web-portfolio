import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kittithat Seelawan | Junior Full Stack Developer",
  description: "Portfolio of Kittithat Seelawan, a Junior Full Stack Developer specializing in Django, Next.js, and REST APIs. View my projects, skills, and experience.",
  keywords: ["Full Stack Developer", "Django", "Next.js", "React", "Portfolio", "Kittithat Seelawan", "Software Engineer"],
  openGraph: {
    title: "Kittithat Seelawan | Junior Full Stack Developer",
    description: "I build scalable web applications with Django, React and Docker.",
    type: "website",
    locale: "en_US",
    siteName: "Kittithat Seelawan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kittithat Seelawan | Junior Full Stack Developer",
    description: "I build scalable web applications with Django, React and Docker.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
