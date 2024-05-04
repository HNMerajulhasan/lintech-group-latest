import type { Metadata } from "next";
import ReduxProvider from "@/libs/state/reduxProvider";
import { Archivo } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
 



export const metadata: Metadata = {
  title: "Luxe-Transformation",
  description: "Luxe Transformations - Where Comfort Meets Creativity",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: '/icon-512x512.png',
        href: '/icon-512x512.png ',
      },
    ],
  },

  // icons: {
  //   apple: "/icon-512x512.png",
  // },

  
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
