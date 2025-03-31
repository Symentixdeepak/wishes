"use client"; // Needed because usePathname() is a client-side hook

import { usePathname } from "next/navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ContextProvider from "@/components/context-provider";

import "../styles/globals.css";

import SideNav from "@/components/side-nav";

import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <html lang="en">
        <body className={inter.className}>{children} </body>
      </html>
    ); // No layout for homepage
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Header />
          <div className="flex">
            <SideNav />
            <div className="w-full overflow-x-auto">
              <div className="sm:h-[calc(99vh-60px)] overflow-auto ">
                <div className="w-full flex justify-center mx-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                  <div className="w-full md:max-w-8xl">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
