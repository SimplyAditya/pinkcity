'use client';
import SectionHeading from "@/components/SectionHeading";
import React, { useState, useEffect } from "react";
import VideoCard from "@/components/VideoCard";
import videosData from "@/data/socialVideos.json";

const SocialMediaSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [startBounce, setStartBounce] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setStartBounce(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  return (
    <div className="p-20 pb-0 flex flex-col items-center justify-center">
      <SectionHeading title="Social Media" />
      <div
        className="w-full h-screen relative cursor-pointer -mt-30"
        onClick={() => setIsExpanded(true)}
      >
        {videosData.videos.map((video, index) => {
          const rotation = (index - 2) * 5;
          const cardWidthPercentage = 18;
          const gapPercentage = (100 - 5 * cardWidthPercentage) / 6;
          const leftPosition =
            gapPercentage + index * (cardWidthPercentage + gapPercentage);

          const isBounceUp = index % 2 === 0;
          const isHovered = hoveredIndex === index;

          const bounceClass =
            startBounce && !isHovered
              ? isBounceUp
                ? "bounce-up"
                : "bounce-down"
              : "";

          let transform;
          if (isHovered) {
            transform = "translateY(-50%)";
          } else if (isExpanded) {
            transform = `translateY(${isBounceUp ? -40 : -20}%)`;
          } else {
            transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
          }

          const left = isExpanded ? `${leftPosition}%` : "50%";

          let zIndex = index < 3 ? index : 4 - index;
          if (isHovered) {
            zIndex = 10;
          }

          return (
            <div
              key={index}
              className={`w-[18%] aspect-[9/16] absolute transition-all ease-in-out duration-1000 ${bounceClass}`}
              style={{
                top: "50%",
                left: left,
                transform: transform,
                zIndex: zIndex,
              }}
            >
              <VideoCard
                src={video.src}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMediaSection;
