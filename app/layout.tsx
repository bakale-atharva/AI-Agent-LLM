import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "@/components/ConvexClientProvider";

export const metadata: Metadata = {
  title: "AI Agent - LLM",
  description: "An AI Agent (LLM) Having Access To Several Tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClientProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ConvexClientProvider>
  );
}
