import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Chidambara Raju G | Applied AI Engineer",
  description: "Portfolio of AI projects built with LLMs and Agentic AI",
  keywords: ["Applied AI", "LLM", "Agentic AI", "Machine Learning", "AI Engineer"],
  openGraph: {
    title: "Chidambara Raju G | Applied AI Engineer",
    description: "Portfolio of AI projects built with LLMs and Agentic AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${outfit.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased text-text-primary bg-primary-dark">
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
