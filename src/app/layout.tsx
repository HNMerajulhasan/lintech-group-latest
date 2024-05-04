import type { Metadata } from "next";
import ReduxProvider from "@/libs/state/reduxProvider";
import { Archivo } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";


// export const metadata: Metadata = {
//   title: "Luxe-Transformation",
//   description: "luxe transformation landing page",
// };

export const metadata: Metadata = {
  title: "ALYF",
  description: " ",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon-512x512.png",
  },
};



const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={archivo.variable}>
        <NextTopLoader color="#c1a457" height={4} />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
