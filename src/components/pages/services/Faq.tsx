import { useState } from "react";
import { DiVim } from "react-icons/di";
import faqWhiteSquare from "../../../../public/images/services/FaqWhiteSquare.svg";
import faqBlackSquare from "../../../../public/images/services/FaqBlackSquare.svg";
import faqPlusIcon from "../../../../public/images/services/faqPlusIcon.svg";
import faqMinusIcon from "../../../../public/images/services/faqMinusIcon.svg";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";

import Image from "next/image";

interface Homefaqs {
  id: string;
  item: string;
}

interface HomefaqProps {
  data?: Homefaqs[];
}


const FaqSection = ({data}:HomefaqProps) => {
  const FaqData = [
    // {
    //   id: "01",
    //   title: "How long does the luxury renovation process typically take?",
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas. Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas. Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas. Lorem ipsum dolor sit amet consectetur.",
    // },
    // {
    //   id: "02",
    //   title: "What sets your luxury renovation process apart from others?",
    //   content:
    //     "Our process is a meticulous blend of vision, precision, and innovation, categorized into distinct stages. From conceptualization to the final touches, each step is designed to elevate your space with unparalleled craftsmanship and attention to detail.",
    // },
    // {
    //   id: "03",
    //   title:
    //     "Can I be involved in the decision-making process during the renovation?",
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas. Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas. Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Tellus felis sed pretium in egestas. Lorem ipsum dolor sit amet consectetur.",
    // },
    {
      id: "01",
      title: "What makes Luxe Transformations different from other renovation companies?",
      content:
        "At Luxe Tranformations, we distinguish ourselves through our unwavering commitment to bespoke craftsmanship and meticulous attention to detail. Each project is approached with a deep understanding of our client's vision and is executed using high-quality materials and cutting-edge design. Our dedication to creating uniquely personalized spaces that enhance and reflect the lifestyles of our clients sets us apart in the industry.   ",
    },
    {
      id: "02",
      title: "How do you ensure a project meets the client's expectations?",
      content:
        "We begin each project with a thorough consultation to fully understand your expectations and preferences. Throughout the renovation process, we maintain open lines of communication, offering regular updates and modifications as needed to ensure the final outcome aligns perfectly with your vision. Our project managers are committed to excellence, ensuring each detail is perfected to your satisfaction.  ",
    },
    {
      id: "03",
      title:
        "What should I consider before beginning a renovation project?",
      content:
        " Before embarking on a renovation, consider the scope of your project, your budget, and the timeline. It's crucial to have a clear idea of what you want to achieve and any specific requirements, such as eco-friendly materials or technologies. We recommend consulting with our design team who can provide expert guidance and help outline a clear plan that ensures your renovation goals are met efficiently and effectively.  ",
    },
  ];

  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <div className="md:px-14 px-5 pt-[32px] lg:pt-[60px] pb-[60px] lg:pb-[100px]">
      <HeaderTitle
        title_top="FREQUENTLY ASKED"
        title_bottom="QUESTIONS"
        title_color="#ffffff"
        title_font_size="56px"
      />

      <div className="md:mt-9 mt-7">
        <div>
          {FaqData.map(({ id, title, content }, idx) => (
            <div
              key={id || `${idx}`}
              className={`my-[8px]  py-7 md:px-5 px-2 rounded-[10px] ${
                openAccordionId === id ? "bg-[#fff]" : "bg-[#222222]"
              } `}>
              <div className="flex md:gap-0 gap-3 justify-between items-center ">
                <div className="flex items-center md:gap-4 gap-2">
                  {openAccordionId === id ? (
                    <Image
                      src={faqBlackSquare}
                      alt="faqSquare"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src={faqWhiteSquare}
                      alt="faqSquare"
                      width={20}
                      height={20}
                    />
                  )}
                  <h2
                    className={`md:text-[26px] text-[17px] font-medium  ${
                      openAccordionId === id ? "text-[#000]" : "text-[#fff]"
                    }`}>
                    {title}
                  </h2>
                </div>

                <button
                  onClick={() => toggleAccordion(id)}
                  className={` focus:outline-none`}>
                  {openAccordionId === id ? (
                    <Image src={faqMinusIcon} alt="faqMinusIcon" />
                  ) : (
                    <Image src={faqPlusIcon} alt="faqPlusIcon" />
                  )}
                </button>
              </div>
              {openAccordionId === id && (
                <p
                  className={`mt-3 ml-2 text-justify md:text-[18px] text-[15px] ${
                    openAccordionId === id ? "text-[#000]" : "text-[#fff] "
                  }`}>
                  {content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;



