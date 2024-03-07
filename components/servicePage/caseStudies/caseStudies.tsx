import Image from "next/image";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

function CaseStudies() {
  const data = [
    {
      title: "Hotel Renovation Services",
      description:
        " Join us on a captivating journey as Luxe transforms a sleek urban space into a luxurious retreat. This case study unfolds the narrative of innovative design, where every corner is a testament to meticulous execution and elevated city living.",
      img: "/images/services/case1.jpeg",
    },
    {
      title: "Hotel Renovation Services",
      description:
        " Join us on a captivating journey as Luxe transforms a sleek urban space into a luxurious retreat. This case study unfolds the narrative of innovative design, where every corner is a testament to meticulous execution and elevated city living.",
      img: "/images/services/case2.png",
    },
    {
      title: "Hotel Renovation Services",
      description:
        " Join us on a captivating journey as Luxe transforms a sleek urban space into a luxurious retreat. This case study unfolds the narrative of innovative design, where every corner is a testament to meticulous execution and elevated city living.",
      img: "/images/services/case1.jpeg",
    },
  ];
  return (
    <div className="bg-[#0F0F0F] p-16 grid grid-cols-5 gap-16">
      <div className="col-span-3 col-start-3 mb-9">
        <div className="text-[#DDAE31] font-archivo text-lg mb-3">CASE STUDIES</div>
        <div className="text-white floral-reg text-6xl mb-5">
          Unveiling Excellence in Every Detail Through Luxe
        </div>
        <div className=" font-archivo text-white text-xl">
          Join us on a captivating journey as Luxe transforms a sleek urban
          space into a luxurious retreat. This case study unfolds the narrative
          of innovative design, where every corner is a testament to meticulous
          execution and elevated city living.
        </div>
      </div>
      {data?.map((item, index) => (
        <>
          <div className="col-span-2 flex flex-col justify-between text-white font-archivo">
            <div className="flex flex-col gap-12">
              <div className="border-t border-white w-fit flex gap-6 pt-5 text-2xl ">
                <div className="">{item.title}</div>
                <RiArrowRightUpLine className="text-white my-auto" />
              </div>
              <div className="text-xl">{item.description}</div>
            </div>
            {data?.length === index + 1 && (
              <button className="bg-[#E7E7E7] p-4 flex gap-2 w-fit text-[#282828] font-semibold rounded-full text-lg">
                SEE ALL CASES
                <RiArrowRightUpLine className=" my-auto" />
              </button>
            )}
          </div>
          <div className="col-span-3">
            <Image
              src={item.img}
              alt=""
              width={762}
              height={464}
              className="w-full max-h-[464px] rounded-2xl"
            />
          </div>
        </>
      ))}
    </div>
  );
}

export default CaseStudies;
