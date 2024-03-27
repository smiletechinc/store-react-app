import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DataProvider } from "./context/DataContext"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Wiziadiary Course",
  description: "Organized by Murabi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <DataProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
  </DataProvider>
  );
}
