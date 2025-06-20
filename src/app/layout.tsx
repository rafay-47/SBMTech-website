import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "SBM Tech | Cybersecurity Solutions",
  description: "Leading cybersecurity consultancy providing comprehensive security solutions for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
