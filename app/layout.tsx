import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-bricolage",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
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

export const viewport: Viewport = {
  themeColor: "#070912",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${bricolage.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased text-fg bg-ink">{children}</body>
    </html>
  );
}
