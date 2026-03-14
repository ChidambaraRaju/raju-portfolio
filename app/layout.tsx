import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
