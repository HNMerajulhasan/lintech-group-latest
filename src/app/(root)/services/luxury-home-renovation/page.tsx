"use client";

import React from "react";
import Head from "next/head";
import Servicepage from "@/components/pages/services";
import "../style.css";

function page() {
  return (
    <>
      <Head>
        <title>Luxury Home Renovation - Bespoke Design & Quality</title>

        <meta
          name="description"
          content="Dedicated to providing exceptional quality and bespoke design to every renovation project across the UK and beyond."
        />

        <meta
          name="keywords"
          content="luxury home renovation, bespoke design, house refurbishment, residential renovation, fitout"
        />

        <meta name="robots" content="index,follow" />
      </Head>
      <header></header>
      <Servicepage page_id="luxury-home-renovation" />
    </>
  );
}

export default page;
