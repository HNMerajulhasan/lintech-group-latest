import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import React, { useState } from "react";
import play_icon from "@/assets/icons/play.svg";
import Image from "next/image";

const LuxeInAction: React.FC = () => {
  //___________________________________________ functon not in use ____________________________________________

  const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(
    null
  );

  const handlePlayVideo = (videoSrc: string, index: number) => {
    const videoElement = document.getElementById(
      `reelVideos${index}`
    ) as HTMLVideoElement;
    if (videoElement) {
      if (index === currentVideoIndex) {
        if (videoElement.paused) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      } else {
        pauseCurrentVideo();
        setCurrentVideoIndex(index);
        videoElement.play();
      }
    }
  };

  const pauseCurrentVideo = () => {
    if (currentVideoIndex !== null) {
      const currentVideo = document.getElementById(
        `reelVideos${currentVideoIndex}`
      ) as HTMLVideoElement;
      if (currentVideo) {
        currentVideo.pause();
      }
      setCurrentVideoIndex(null);
    }
  };

  return (
    <main className="py-[20px] sm:py-[30px] xl:py-[60px] h-auto">
      <HeaderTitle
        title_top="LUXE IN ACTION"
        title_color="#fff"
        title_font_size="56px"
      />

      <div className="flex flex-col justify-between gap-10 lg:flex-row h-auto ">
        {actionVideos.map((item, index) => (
          <div key={index} className="relative w-full h-auto cursor-wait">
            <video
              id={`reelVideos${index}`}
              src={item?.video}
              loop
            />

            <button
              key={item?.id}
              onClick={() => handlePlayVideo(item.video, index)}
              className="absolute top-1/2 left-40 translate-x-1/2  translate-y-1/2"
            >
              <Image
                src={play_icon}
                alt="play_icon"
              />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default LuxeInAction;

export const actionVideos = [
  {
    id: "3",
    video: "/reel-01.mp4",
  },

  {
    id: "2",
    video: "/reel-02.mp4",
  },

  {
    id: "1",
    video: "/reel-03.mp4",
  },
];
