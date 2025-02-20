import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "నిశ్శబ్దం",
  description: "నాలోని నిశ్శబ్దం, చెవికి వినిపించని శబ్దం, అనేక ఆలోచనల సముద్రం",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
