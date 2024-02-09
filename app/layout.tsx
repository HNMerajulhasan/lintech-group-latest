import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { AOSInit } from "@/components/Aos";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxe Transformation",
  description: "luxe transformation landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`relative overflow-hidden h-screen text-white w-full md:p-2 font-MyFont`}>
     <div className="bg-black relative h-full w-full rounded-3xl  z-0">
      <AOSInit />
     <NavBar />
       {children}
     </div>
   </body>
   </html>
  );
}
