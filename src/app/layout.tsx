// import type { Metadata } from "next";
import Head from "next/head";
import ReduxProvider from "@/libs/state/reduxProvider";
import { Archivo } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";
import type { Metadata } from "next";


 
export const metadata: Metadata = {
  title: "Luxe-Transformation",
  description: "Luxe Transformations - Where Comfort Meets Creativity",
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
