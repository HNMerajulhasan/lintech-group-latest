import Image from "next/image";
import React, { Fragment } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import arrorw_top_right_white from "@/assets/icons/arrorw_top_right_white.svg";
import Button from "@/components/reuseables/Button/Button";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Link from "next/link";

interface IData {
  title?: string;
  description?: string;
  image?: string;
  percents?: {
    value?: string;
    description?: string;
  }[];
}

const default_data = [
  {
    title: "Fulham house",
    description:
      "We undertook a comprehensive fitout of a luxurious residence, meticulously designed to complement a £10 million art collection. Each room was transformed with the utmost attention to detail, ensuring that the finishes and fixtures harmonized beautifully with the esteemed artworks. High-quality materials and bespoke design elements were thoughtfully selected to both showcase and enhance the art, creating an elegant and cohesive living space that serves as both a home and a gallery.",
    image: "/images/services/Fulham_house.webp",
    percents: [
      {
        value: "90%",
        description: "Increase in customer’s satisfaction",
      },

      {
        value: "55%",
        description: "Operational efficiency boost",
      },
    ],
  },
  {
    title: "St. Athans Hotel",
    description:
      "Join us on a captivating journey as Luxe transforms a sleek urban space into a luxurious retreat. This case study unfolds the narrative of innovative design, where every corner is a testament to meticulous execution and elevated city living.",
    image: "/images/services/athans_lg.webp",
    percents: [
      {
        value: "90%",
        description: "Increase in customer’s satisfaction",
      },

      {
        value: "55%",
        description: "Operational efficiency boost",
      },
    ],
  },
];

function HomeRenoCases({
  caption_text = "CASE STUDIES",
  title_top = "Unveiling Excellence in Every Detail Through Luxe",
  description = `Showcasing the breadth and depth of our capabilities in residential renovations and fitouts. These case studies provide an in-depth look at the transformative journeys we've crafted alongside our clients, from initial concepts to stunning completions.`,
  data,
}: {
  caption_text?: string;
  title_top?: string;
  description?: string;
  data?: any;
}) {
  return (
    <div className="bg-[#0F0F0F] md:p-16 p-7 lg:grid grid-cols-5 gap-[64px]">
      <div className="col-span-3 col-start-3 mb-[36px]">
        <HeaderTitle
          captionText={caption_text}
          title_top={title_top}
          description={description}
          title_color="#fff"
          description_color="#a9a9a9"
          title_font_size="56px"
          font_Type="Arimo, sans-serif"
        />
      </div>

      {(typeof data === "object" && data?.length ? data : default_data)?.map(
        (item: IData, index?: number) => (
          <Fragment key={`${index}`}>
            <motion.div
              key={`${index}`}
              initial={{
                x: "-100%",
              }}
              whileInView={{
                x: 0,
                transition: { duration: 0.5 },
              }}
              className={styles.box_wrapper} 
            >
              <div className={styles.box_wrapper_inner}>
                <div className={styles.box_wrapper_h4_wrapper}>
                  <h4 className={styles.box_wrapper_h4}>{item.title}</h4>

                  <Link href={"/contact"}>
                    <Image
                      alt="arrorw_top_right_white"
                      src={arrorw_top_right_white}
                      className="w-[clamp(16px,calc(20/1420*100vw),50px)]"
                    />
                  </Link>
                </div>

                <div className="text-[#a9a9a9] font-normal mb-[20px] lg:mb-0 text-[clamp(16px,calc(20/1420*100vw),20px)] font-archivo">
                  {item.description}
                </div>

                {/* {item?.percents?.length
                  ? item?.percents.map((percent) => {
                      return (
                        <div
                          style={{ borderLeft: "1px solid #b5b5b5" }}
                          className="py-0 flex flex-col gap-[16px] pl-[18px] border-[#b5b5b5] border-l-[red]"
                        >
                          <h6 className=" leading-[1] p-0 m-0 text-[clamp(20px,calc(28/1420*100vw),28px)]">
                            {percent?.value}
                          </h6>
                          <h6 className="leading-[1] p-0 m-0 text-[#a9a9a9] text-[clamp(16px,calc(20/1420*100vw),20px)]">
                            {percent?.description}
                          </h6>
                        </div>
                      );
                    })
                  : null} */}
               {index === 1 && <Link href={"/contact"} className="hidden lg:block  absolute bottom-0">
                  <div className="w-48 ">
                    <Button
                      title="INQUIRE NOW"
                      background="#ffff"
                      width="170px"
                      color="#100E10"
                      rightIcon={"/icons/arrorw_top_right_black.svg"}
                    />
                  </div>
                </Link>}
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:col-span-3 mb-[40px] lg:mb-0"
              initial={{
                x: "100%",
              }}
              whileInView={{
                x: 0,
                transition: { duration: 0.5 },
              }}
            >
              <Image
                src={item.image}
                alt=""
                width={762}
                height={464}
                className="w-full  rounded-[18px] h-[clamp(231px,calc(468/1420*100vw),1054px)]"
              />
            </motion.div>
          </Fragment>
        )
      )}

      <Link href={"/contact"} className="lg:hidden">
        <div className="w-48">
          <Button
            title="INQUIRE NOW"
            background="#ffff"
            width="170px"
            color="#100E10"
            rightIcon={"/icons/arrorw_top_right_black.svg"}
          />
        </div>
      </Link>
    </div>
  );
}

export default HomeRenoCases;
