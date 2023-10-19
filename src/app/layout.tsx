import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.className, "flex lg:flex-row flex-col")}>
        <Navbar />
        <div className="w-full lg:flex flex justify-center  ">
          <div className="w-[97%]">{children}</div>
        </div>
      </body>
    </html>
  );
}
