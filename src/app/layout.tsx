import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Renaldi — Creative Developer & UI/UX Designer",
  description:
    "Minimalist & Creative Personal Branding Portfolio of Renaldi — UI/UX Designer, Web Developer, and Mobile App Developer based in Indonesia.",
  keywords: [
    "Renaldi",
    "Portfolio",
    "UI/UX Designer",
    "Web Developer",
    "Mobile App Developer",
    "Next.js",
    "TypeScript",
    "Creative Developer",
    "Indonesia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${jakarta.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col selection:bg-[#686de0]/20 selection:text-[#686de0]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
