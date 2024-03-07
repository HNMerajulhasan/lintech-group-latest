import React from "react";

function WorkingBenefits() {
  const data = [
    {
      title: "Enhance Property Value",
      description:
        "Renovations and refurbishments can significantly increase the value of your property, providing a high return on investment.",
    },
    {
      title: "Enhance Comfort",
      description:
        "Improvements to your home can enhance comfort levels, making it a more enjoyable and functional space for you and your family.",
    },
    {
      title: "Energy Efficiency",
      description:
        "Upgrades such as insulation, energy-efficient appliances, and windows can help reduce energy consumption and lower utility bills.",
    },
    {
      title: "Personalization",
      description:
        "Allow you to personalize your home to suit your unique style and preferences, creating a space that truly reflects your personality.",
    },
    {
      title: "Improved Safety",
      description:
        "Refurbishments work can help prolong the lifespan of your home's components, saving you money on costly repairs in the long run.",
    },
    {
      title: "Improved Safety",
      description:
        "Upgrades to electrical, plumbing, and structural systems can improve the safety and security of your home.",
    },
  ];
  return (
    <div className="p-16 grid grid-cols-2 gap-5">
      <div>
        <h1 className="text-2xl md:text-5xl floral-reg w-1/2">
          BENEFITS WORKING WITH US
        </h1>
      </div>
      <div className="flex flex-col gap-8 text-[#100E10] font-archivo">
      {data?.map((item, index)=>
      <>
        <div className="flex flex-col gap-4 ">
          <div className="text-[28px] ">{item.title}</div>
          <div>
           {item.description}
          </div>
        </div>
    {index+1 !== data?.length && <div className="h-[1px] w-full bg-[#E5E5E5]" />}
      </>
        
          )}
      </div>
    </div>
  );
}

export default WorkingBenefits;
