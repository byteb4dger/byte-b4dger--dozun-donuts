import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import Header from "@/components/Header";
import { Providers } from "@/providers/Providers";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dozens Donuts",
  description: "Najlepsza pączkarnia w Twoim mieście!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${inter.className} mx-auto box-border flex flex-col overflow-x-hidden scroll-smooth bg-slate-100 px-10 py-12 dark:bg-cyan-600 dark:text-slate-100`}
      >
        <Providers>
          <ShoppingCartProvider>
            <Header />
            {children}
            <Footer />
          </ShoppingCartProvider>
        </Providers>
      </body>
    </html>
  );
}
