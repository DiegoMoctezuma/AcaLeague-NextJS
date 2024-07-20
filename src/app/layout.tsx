import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layaout from "@/components/Layaout/Layaout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AcaLeague"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layaout>
          {children}
        </Layaout>
      </body>
    </html>
  );
}
