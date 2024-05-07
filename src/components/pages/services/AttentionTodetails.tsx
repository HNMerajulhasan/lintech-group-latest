import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
// import img1 from "../../../../public/images//Gallery_Images/residential/5.webp"
import React from "react";

const AttentionTodetails = () => {
  return (
    <main>
      <HeaderTitle
        title_top="ATTENTION TO DETAILS"
        description="From the precision of finely crafted joinery to the exacting standards of our bespoke interior finishes, every element of your renovation is executed with uncompromising precision."
        description_max_width="648px"
        description_color="#4E4E4E"
        title_color=""
        title_font_size="56px"
      />

      <div className="flex flex-col gap-10 md:flex-row cursor-pointer ">

       {data.map((item, idx) => (
        <div className="" key={idx}>
        <img src={item.img} alt="attention to details images" />
        </div>
       ))}
      </div>
    </main>
  );
};

export default AttentionTodetails;

export const data = [
    {id:1,  img: "/images/Gallery_Images/residential/5.webp"},
    {id:2,  img: "/images/Gallery_Images/residential/6.webp"},
    {id:3,  img: "/images/Gallery_Images/residential/15.webp"}
]