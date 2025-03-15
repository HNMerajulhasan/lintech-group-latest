// import type { Metadata } from "next";
import Head from "next/head";
import type { Metadata } from "next";

type CustomMetadata = Metadata & {
  canonical?: string;
  og?: {
    title: string;
    description: string;
    image: string;
    url: string;
    site_name: string;
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
  region: string;
};

export const metadata: CustomMetadata = {
  title: "Luxury Home Renovation - Bespoke Design & Quality",
  description: "Dedicated to providing exceptional quality and bespoke design to every renovation project across the UK and beyond. ",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon-512x512.png",
  },

  keywords: "comfort, creativity, luxury, transformation",
  canonical: "https://luxe-transformations.vercel.app/",
  og: {
    title: "Luxury Home Renovation - Bespoke Design & Quality",
    description: "Dedicated to providing exceptional quality and bespoke design to every renovation project across the UK and beyond.  ",
    image: "/og-image.jpg",
    url: "https://luxe-transformations.vercel.app/",
    site_name: "Luxury Home Renovation",
  },
  twitter: {
    card: "summary_large_image",
    site: "@username",
    title: "Luxury Home Renovation - Bespoke Design & Quality",
    description: "Dedicated to providing exceptional quality and bespoke design to every renovation project across the UK and beyond.  ",
    images: "/twitter-card-image.jpg",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Luxury Home Renovation - Bespoke Design & Quality",
    url: "https://luxe-transformations.vercel.app/",
    logo: "/lintech-group-icon/lintech_group_logo.jpeg",
    description: "Dedicated to providing exceptional quality and bespoke design to every renovation project across the UK and beyond. ",
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






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
      <main>
      <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NF4BD6VP" height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {children}
        </main>
    </>
  );
}
