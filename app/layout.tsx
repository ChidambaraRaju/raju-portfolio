import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased text-text-primary bg-primary-dark">
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
