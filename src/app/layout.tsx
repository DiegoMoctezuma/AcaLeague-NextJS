import type { Metadata } from "next";
import "./globals.css";

import { krona } from '@/app/ui/fonts';

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
      <body className={krona.className}>
          {children}
      </body>
    </html>
  );
}
