import Image from "next/image";
import React from "react";

const Recentwork = () => {
  return (
 
    <div className="py-16">
      <div className="px-16  w-full flex flex-col mb-12">
        <h1 className="text-2xl md:text-5xl floral-reg">RECENT WORKS</h1>
        <div className="text-xl font-archivo text-[#4E4E4E] w-1/2">
          Recent projects reflecting our commitment to high-quality
          craftsmanship and exceptional results.
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-5 mb-5 -ml-72 -mr-40 ">
        <Image
          src={"/images/services/1.jpeg"}
          alt=""
          className="h-[263px] w-full rounded-2xl  "
          width={400}
          height={263}
        />
        <Image
          src={"/images/services/2.jpeg"}
          alt=""
          className="h-[263px] w-full rounded-2xl"
          width={400}
          height={263}
        />
        <Image
          src={"/images/services/3.jpeg"}
          alt=""
          className="h-[263px] w-full rounded-2xl"
          width={400}
          height={263}
        />
        <Image
          src={"/images/services/4.jpeg"}
          alt=""
          className="h-[263px] w-full rounded-2xl object-none"
          width={400}
          height={263}
        />
        </div>
        <div className=" grid grid-cols-4 gap-5 -mr-72 -ml-40">
        <Image
          src={"/images/services/5.jpeg"}
          alt=""
          className="h-[263px] w-full rounded-2xl"
          width={400}
          height={263}
        />
        <Image
          src={"/images/services/6.jpeg"}
          alt=""
          className="h-[263px] w-full rounded-2xl"
          width={400}
          height={263}
        />
        <Image
          src={"/images/services/7.jpeg"}
          alt=""
          className="h-[263px] w-full rounded-2xl"
          width={400}
          height={263}
        />
        <Image
          src={"/images/services/8.jpeg"}
          alt=""
          className="h-[263px] w-full rounded-2xl"
          width={400}
          height={263}
        />
      </div>
    </div>
  );
};

export default Recentwork;
