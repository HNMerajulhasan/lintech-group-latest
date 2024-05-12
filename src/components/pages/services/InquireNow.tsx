import React from "react";

import Button from "@/components/reuseables/Button/Button";
import Link from "next/link";

const InquireNow = ({}) => {
  return (
    <div className="w-full md:mb-[20px] text-black flex flex-col-reverse gap-10 justify-between md:py-[50px] py-5 lg:flex-row  xl:py-[100px]">
     <Link href={"/contact"}>
     <div className="w-48">
        <Button
          title="INQUIRE NOW"
          background="#100E10"
          width="170px"
          color="#ffffff"
          rightIcon={"/icons/arrorw_top_right_white.svg"}
        />
      </div>
     </Link>
    

      <section
        className="font-archivo px-4
        flex  flex-col justify-between gap-[32px] sm:gap-[50px] 3xl:gap-[100px]
        w-full
        lg:w-[clamp(100px,calc(890/1420*100vw),1200px)]
        text-[clamp(18px,calc(18/1420*100vw),50px)]
         md:text-start text-justify"
      >
        <ul className="flex flex-col gap-5">
          {data.map((item, idx) => (
            <li key={idx} className="list-disc font-archivo "  style={{ fontFamily: 'Archivo, sans-serif' }} >
              <p className="flex flex-col gap-2 md:block ">
               <strong>
               {item.title}
                </strong> 

                <span className=" whitespace-normal  text-[#4E4E4E]">{item.text} </span>
              </p>
            </li>
          ))}
        </ul>
      </section>



    </div>
  );
};

export default InquireNow;




export const data = [
  {
    id: 1,
    title:"Dedicated to Residential : ",
    text: "Specialising in home renovations and house refurbishments, our expertise is tailored to renovating and restoring residential properties.",
  },
  {
    id: 2,
    title: "Customised Services : ",
    text: "We understand that each home is unique. Our bespoke home renovations and fitout services are designed to meet the specific needs and desires of each homeowner.",
  },
  {
    id: 3,
    title: "High Standards of Quality : ",
    text: "We commit to the highest standards in every project, ensuring that your home refurbishment or internal house renovation is completed with unparalleled attention to detail.",
  },
  {
    id: 4,
    title: "Client-Centric Approach : ",
    text: "Effective communication is key to our process. We ensure that you are involved and informed throughout the planning and execution of your home fitout, from the onsite consultation meeting to the final walk-through.",
  },
];



// flex  flex-col justify-between gap-[32px] sm:gap-[50px] 3xl:gap-[100px] 
