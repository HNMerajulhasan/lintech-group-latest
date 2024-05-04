import type { Metadata } from "next";
import "../portfolio/style.css";

export const metadata: Metadata = {
  title: "Luxe-Transformation",
  description: "Luxe Transformations - Where Comfort Meets Creativity",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon-512x512.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
