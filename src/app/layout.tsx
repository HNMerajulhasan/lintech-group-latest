// import type { Metadata } from "next";
import Head from "next/head";
import ReduxProvider from "@/libs/state/reduxProvider";
import { Archivo } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";
import type { Metadata } from "next";
 


type CustomMetadata = Metadata & {
  canonical?: string;  
  og?: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
  structuredData: {
    "@context": string;
    "@type": string;
    name: string;
    url: string;
    logo: string;
    description: string;
    sameAs: string[];
};
language: string;
region: string
};



export const metadata: CustomMetadata = {
  title: "Lintech Group",
  description: "Luxe Transformations - Where Comfort Meets Creativity",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon-512x512.png",
  },
  keywords: "comfort, creativity, luxury, transformation",
  canonical: "https://luxe-transformations.vercel.app/",
  og: {
    title: "Lintech Group",
    description: "Luxe Transformations - Where Comfort Meets Creativity",
    image: "/og-image.jpg",
    url: "",
  },
  twitter: {
    card: "summary_large_image",
    site: "@username",
    title: "Luxe-Transformation",
    description: "Luxe Transformations - Where Comfort Meets Creativity",
    images: "/twitter-card-image.jpg",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Luxe Transformations",
    url: "https://luxe-transformations.vercel.app/",
    logo: "/lintech-group-icon/lintech_group_logo.jpeg",
    description: "Transform your space with comfort and creativity.",
    sameAs: [
      "https://www.tiktok.com/@luxetransformations?_t=8lqxi19gU4G&_r=1",
      "https://www.instagram.com/luxe_transformations_official?igsh=MTVhMWVjNzRmbGZ3aw==",
      " https://www.facebook.com/Luxetransformations",
    ],
  },
  language: "en-US",
  region: "US",
  viewport: "width=device-width, initial-scale=1.0",
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
      <Head>
        {/* Google Tag Manager script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NF4BD6VP');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16540216891');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16540216891" />
      </Head>

      <body className={archivo.variable}>
        {/* Google Tag Manager noscript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NF4BD6VP" height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        <NextTopLoader color="#c1a457" height={4} />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
