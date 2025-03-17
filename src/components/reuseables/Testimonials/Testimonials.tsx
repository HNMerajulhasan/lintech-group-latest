// "use client";
// import React, { useRef, useState } from "react";
// import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";

// import { testimonials } from "./data";
// import play_icon from "@/assets/icons/play.svg";
// import { motion } from "framer-motion";
// import styles from "./styles.module.css";
// import Image from "next/image";

// const parentVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.3, // Stagger child animations by 0.2 seconds
//     },
//   },
// };
// interface IImage {
//   id?: any;
//   image?: any;
//   video?: any;

// }

// const Testimonials = ({
//   title_top = "TESTIMONIALS",
//   description = "Unlock the Stories of Satisfaction: Hear from Our Valued Clients about Their Luxurious Transformation Experience",

//   title_color = "#ffffff",
//   description_color = "#ffffff",
//   images = testimonials,
// }: // video = testimonials,
// {
//   title_top?: string;
//   description?: string;
//   title_color?: string;
//   description_color?: string;
//   images?: IImage[];
//   // video?: IImage[];
// }) => {


//   const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(null);

//   const handlePlayVideo = (videoSrc: string, index: number) => {
//     const videoElement = document.getElementById(`testimonialVideo${index}`) as HTMLVideoElement;
//     if (videoElement) {
//       if (index === currentVideoIndex) {
//         if (videoElement.paused) {
//           videoElement.play();
//         } else {
//           videoElement.pause();
//         }
//       } else {
//         pauseCurrentVideo();
//         setCurrentVideoIndex(index);
//         videoElement.play();
//       }
//     }
//   };

//   const pauseCurrentVideo = () => {
//     if (currentVideoIndex !== null) {
//       const currentVideo = document.getElementById(`testimonialVideo${currentVideoIndex}`) as HTMLVideoElement;
//       if (currentVideo) {
//         currentVideo.pause();
//       }
//       setCurrentVideoIndex(null);
//     }
//   };

 


//   return (
//     <>
//       <main className={styles.main}>
//         <HeaderTitle
//           title_top={title_top}
//           description={description}
//           description_max_width="648px"
//           description_color={description_color}
//           title_color={title_color}
//           title_font_size="56px"
//         />

//         <motion.div
//           className={styles.testimonials}
//           initial="hidden"
//           whileInView="visible"
//           variants={parentVariants}
//         >
//           {images.map((item, index) => {
//             return (
//               <motion.div
//                 initial={{
//                   y: 100,
//                   opacity: 0,
//                 }}
//                 whileInView={{
//                   y: 0,
//                   opacity: 1,
//                   transition: {
//                     delay: index * 0.3,
//                   },
//                 }}
//                 viewport={{ once: true }}
//                 key={item?.id || `${index}`}
//                 className={styles.testimonial}
//               >
//                {item.video && <div className={styles.testimonial_play_overflow}>
//                   <button
//                     key={item?.id}
//                     className={styles.testimonial_play}
//                     onClick={() => handlePlayVideo(item.video, index)}
//                   >
//                     <Image
//                       src={play_icon}
//                       alt="play_icon"
//                       className={styles.testimonial_play_img}
//                     />
//                   </button>
//                 </div>}

//                 {item.video ? (
//                  <motion.video
//                     id={`testimonialVideo${index}`}
//                     width={500}
//                     height={593}
//                     src={item?.video}
//                     // autoPlay
//                     loop
//                     // muted
//                     className={styles.testimonial_video}
//                   />
//                 ) : (
//                   <motion.img
//                     width={415}
//                     height={593}
//                     src={item?.image}
//                     alt="image_testimonial"
//                     className={styles.testimonial_img}
//                   />
//                 )}
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </main>
//     </>
//   );
// };

// export default Testimonials;

"use client";

import React, { useState, useRef } from "react";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import { testimonials } from "./data";
import play_icon from "@/assets/icons/play.svg";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";

const Testimonials = ({
  title_top = "TESTIMONIALS",
  description = "Unlock the Stories of Satisfaction: Hear from Our Valued Clients about Their Luxurious Transformation Experience",
  title_color = "#ffffff",
  description_color = "#ffffff",
  videos = testimonials,
}: {
  title_top?: string;
  description?: string;
  title_color?: string;
  description_color?: string;
  videos?: { id: string; video: string }[];
}) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleTogglePlay = (index: number) => {
    const video = videoRefs.current[index];

    if (video) {
      if (video.paused) {
        video.play();
        setPlayingIndex(index);
      } else {
        video.pause();
        setPlayingIndex(null);
      }
    }
  };

  return (
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {videos.map((item, index) => (
          <div key={item.id} className="relative w-full h-full">
            {/* Mux Video Player */}
            <MuxPlayer
              ref={(el) => (videoRefs.current[index] = el as HTMLVideoElement)}
              playbackId={item.video}
              streamType="on-demand"
              autoPlay={false}
              loop
              className="w-full h-full object-cover"
              muted={false} // Default sound ON
              controls={false} // No UI controls
              no-controls // Explicitly removes progress bar & sound icon
            />

            {/* Play Button */}
            {playingIndex !== index && (
              <button
                onClick={() => handleTogglePlay(index)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image src={play_icon} alt="Play" width={80} height={80} />
              </button>
            )}
          </div>
        ))}
      </motion.div>
    </main>
  );
};

export default Testimonials;
