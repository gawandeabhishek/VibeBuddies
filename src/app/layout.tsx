import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VibeBuddies",
  description:
    "Welcome to VibeBuddies! Here, you can connect with your friends, and enjoy life to the fullest. Whether you're looking to catch up with old friends or make new ones, VibeBuddies is the perfect place to create lasting memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "h-full w-full p-2 transition-all bg-card")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
