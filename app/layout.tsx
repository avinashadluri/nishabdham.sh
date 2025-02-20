import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import { motion } from "framer-motion";

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
      <body className={inter.className}>
        <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center">
                  <span className="font-bold text-xl text-gray-900">
                    నిశ్శబ్దం
                  </span>
                </Link>
              </div>

              <nav className="flex items-center space-x-6">
                <div className="hidden md:flex space-x-6">
                  <Link
                    href="/comments"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    అభిప్రాయాలు
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
