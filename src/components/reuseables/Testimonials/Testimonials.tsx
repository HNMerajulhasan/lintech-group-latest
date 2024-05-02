"use client";
import React, { useRef, useState } from "react";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";

import { testimonials } from "./data";
import play_icon from "@/assets/icons/play.svg";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Image from "next/image";

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Stagger child animations by 0.2 seconds
    },
  },
};
interface IImage {
  id?: any;
  image?: any;
  video?: any;

}

const Testimonials = ({
  title_top = "TESTIMONIALS",
  description = "Unlock the Stories of Satisfaction: Hear from Our Valued Clients about Their Luxurious Transformation Experience",

  title_color = "#ffffff",
  description_color = "#ffffff",
  images = testimonials,
}: // video = testimonials,
{
  title_top?: string;
  description?: string;
  title_color?: string;
  description_color?: string;
  images?: IImage[];
  // video?: IImage[];
}) => {


  // const handlePlayVideo = (videoSrc: string, index: number) => {
  //   const videoElement = document.getElementById(`testimonialVideo${index}`) as HTMLVideoElement;
  //   if (videoElement) {
  //     if (videoElement.paused) {
  //       videoElement.src = videoSrc;
  //       videoElement.play();
  //     } else {
  //       videoElement.pause();
  //     }
  //   }
  // };

  const handlePlayVideo = (videoSrc: string, index: number) => {
    const videoElement = document.getElementById(`testimonialVideo${index}`) as HTMLVideoElement;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };



  // const handlePlayVideo = (videoSrc: string, index: number) => {
  //   const videoElement = document.getElementById(`testimonialVideo${index}`) as HTMLVideoElement;
  //   if (videoElement) {
  //     videoElement.src = videoSrc;
  //   }
  // };
  

 


  return (
    <>
      <main className={styles.main}>
        <HeaderTitle
          title_top={title_top}
          description={description}
          description_max_width="648px"
          description_color={description_color}
          title_color={title_color}
          title_font_size="56px"
        />

        <motion.div
          className={styles.testimonials}
          initial="hidden"
          whileInView="visible"
          variants={parentVariants}
        >
          {images.map((item, index) => {
            return (
              <motion.div
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: index * 0.3,
                  },
                }}
                viewport={{ once: true }}
                key={item?.id || `${index}`}
                className={styles.testimonial}
              >
                <div className={styles.testimonial_play_overflow}>
                  <button
                    key={item?.id}
                    className={styles.testimonial_play}
                    onClick={() => handlePlayVideo(item.video, index)}

                    // onClick={() => handlePlayVideo(item.video)}
                  >
                    <Image
                      src={play_icon}
                      alt="play_icon"
                      className={styles.testimonial_play_img}
                    />
                  </button>
                </div>

                {item.video ? (
                 <motion.video
                    id={`testimonialVideo${index}`}
                    width={500}
                    height={593}
                    src={item?.video}
                    // autoPlay
                    loop
                    // muted
                    className={styles.testimonial_video}
                  />
                ) : (
                  <motion.img
                    width={415}
                    height={593}
                    src={item?.image}
                    alt="image_testimonial"
                    className={styles.testimonial_img}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </main>
    </>
  );
};

export default Testimonials;
