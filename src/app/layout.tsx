import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
        <div className="custom-width  w-full lg:ml-[270px] lg:block flex justify-center  ">
          <div className="lg:w-full   w-[97%]">{children}</div>
        </div>
      </body>
    </html>
  );
}
