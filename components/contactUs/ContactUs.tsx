import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (

    // change font
    <div className="w-full flex flex-col gap-5 md:gap-10 text-center mb-28 py-10 lg:py-16 contact-bg rounded-3xl">
   
      <h1 className="text-5xl md:text-6xl font-semibold floral-reg ">Let's make an action plan</h1>
<div className="text-xl font-archivo w-1/2 mx-auto">
we're here to turn your dreams into a tangible reality. Click below and let's make an action plan together.
</div>
      <div className="">
        <Link href={'/contact'}>
        <button className="font-semibold px-10 py-3 md:px-16 md:py-5 rounded-full border-[0.9px] border-white">Make An Inquiry</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
