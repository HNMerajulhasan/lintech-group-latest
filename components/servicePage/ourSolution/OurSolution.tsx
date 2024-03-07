import React from "react";
import StickyButton from "../../button/ArrowBtn";
// import allCases from "../../public/icons/service-white-arr.svg";
import Image from "next/image";

const OurSolution = () => {
  return (
    <div className="w-full mb-28 text-black flex flex-col gap-10  px-5 md:px-0 py-10 lg:flex-row  xl:py-10">
      <div className="w-1/3" data-aos="fade-right">
        <button className="all-cases text-white hover:px-14 flex items-center gap-5 bg-black px-8 py-3 md:px-6 md:py-3 lg:px-10 lg:py-3 rounded-full text-sm xl:text-xl">
          {/* See All Case Studies */}
          <div className="wave text-base uppercase whitespace-nowrap">
            <span style={{ "--i": 1 }}>Our</span>
            <span style={{ "--i": 4 }}>&nbsp;</span>
            <span style={{ "--i": 5 }}>Solution</span>
          </div>

          <div>
            <Image
              src={'/icons/service-white-arr.svg'}
              alt=""
              className="all-cases-arrow"
              width={20}
              height={20}
            />
          </div>
        </button>
      </div>

      <div
        className="w-full flex flex-col gap-5"
        data-aos="fade-left"
        data-aos-duration="600"
      >
        <div className="flex flex-col gap-10 md:gap-5 lg:gap-10 text-base xl:text-3xl font-thin">
          <p>
          Our journey is more than a narrative; it's a testament to our passion for transforming spaces into timeless havens of luxury. At the heart of our mission is a commitment to excellence that has evolved with us from our humble beginnings. As we continue to redefine luxury renovation, our commitment to delivering unmatched solutions has become the cornerstone of our success. Every project is an opportunity for us to showcase our dedication to innovation, collaboration, and attention to detail, creating spaces that transcend the ordinary.
          </p>
          <p>
          In our pursuit of excellence, we've developed solutions that not only meet but exceed the expectations of our clients. Through a fusion of cutting-edge technology, sustainable practices, and a deep understanding of design aesthetics, we've crafted solutions that stand as a testament to our unwavering commitment to quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurSolution;
