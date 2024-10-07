import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "@/StoreProvider/StoreProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop-App | next js",
  description: "WebDev warriors shop using next js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header></Header>
            {children}
            <Toaster />
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
