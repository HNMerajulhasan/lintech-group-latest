import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "Lintech Group",
  description: "Lintech Group - Where ideas Meets Creativity and Innovation",
  manifest: "/manifest.json",
  icons: {
    apple: "/lintech-group-icon/lintech_group_logo.jpeg",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
