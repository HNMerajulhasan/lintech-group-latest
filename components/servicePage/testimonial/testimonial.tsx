import Image from "next/image";
import React from "react";

function Testimonial() {
  return (
    <div className="p-16">
      <div className=" w-full flex flex-col mb-12">
        <h1 className="text-2xl md:text-5xl floral-reg">TESTIMONIALS</h1>
        <div className="text-xl font-archivo text-[#4E4E4E] w-1/2">
          Recent projects reflecting our commitment to high-quality
          craftsmanship and exceptional results.
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
      <div className="perks-items-container">
              <div className="perks-items shadow-none rounded-3xl relative min-w-[250px] min-h-[200px] md:min-w-[400px] md:min-h-[400px]  lg:min-w-[450px] cursor-grab  flex flex-col justify-between">
                <Image
                  src={"/images/services/testimonial.jpeg"}
                  alt="review images"
                  className=" w-full rounded-2xl"
                  width={400}
                  height={600}
                />


                {/* play button */}
                <Image
                  src={"/icons/play.svg"}
                  alt=""
                  width={50}
                  height={50}
                  className="absolute top-[40%] left-[40%]  md:w-24 md:h-24"
                />
              </div>
            </div>
      <div className="perks-items-container">
              <div className="perks-items shadow-none rounded-3xl relative min-w-[250px] min-h-[200px] md:min-w-[400px] md:min-h-[400px]  lg:min-w-[450px] cursor-grab  flex flex-col justify-between">
                <Image
                  src={"/images/services/testimonial.jpeg"}
                  alt="review images"
                  className=" w-full rounded-2xl"
                  width={400}
                  height={600}
                />


                {/* play button */}
                <Image
                  src={"/icons/play.svg"}
                  alt=""
                  width={50}
                  height={50}
                  className="absolute top-[40%] left-[40%]  md:w-24 md:h-24"
                />
              </div>
            </div>
      <div className="perks-items-container">
              <div className="perks-items shadow-none rounded-3xl relative min-w-[250px] min-h-[200px] md:min-w-[400px] md:min-h-[400px]  lg:min-w-[450px] cursor-grab  flex flex-col justify-between">
                <Image
                  src={"/images/services/testimonial.jpeg"}
                  alt="review images"
                  className=" w-full rounded-2xl"
                  width={400}
                  height={600}
                />


                {/* play button */}
                <Image
                  src={"/icons/play.svg"}
                  alt=""
                  width={50}
                  height={50}
                  className="absolute top-[40%] left-[40%]  md:w-24 md:h-24"
                />
              </div>
            </div>
      
      </div>
    </div>
  );
}

export default Testimonial;
