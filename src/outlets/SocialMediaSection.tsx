'use client';
import SectionHeading from "@/components/SectionHeading";
import React, { useState, useEffect, TouchEvent } from "react";
import VideoCard from "@/components/VideoCard";
import videosData from "@/data/socialVideos.json";
import { useMobile } from "@/components/MobileProvider";

const SocialMediaSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [startBounce, setStartBounce] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cards, setCards] = useState(videosData.videos);
  const numVideos = cards.length;
  const isMobile = useMobile();

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStartFunc = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveFunc = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndFunc = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    if (isSwipe) {
      const newCards = [...cards];
      const swipedCard = newCards.pop();
      if (swipedCard) {
        newCards.unshift(swipedCard);
        setCards(newCards);
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (isExpanded && !isMobile) {
      const timer = setTimeout(() => {
        setStartBounce(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, isMobile]);

  useEffect(() => {
    setCards(videosData.videos);
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="p-8 flex flex-col items-center justify-center">
        <SectionHeading title="Social Media" />
        <div className="w-full h-[70vh] relative -mt-10">
          {cards.map((video, index) => {
            const isTopCard = index === numVideos - 1;
            const cardProps = isTopCard
              ? {
                  onTouchStart: onTouchStartFunc,
                  onTouchMove: onTouchMoveFunc,
                  onTouchEnd: onTouchEndFunc,
                }
              : {};

            return (
              <div
                key={video.src}
                className={`w-[60%] aspect-[9/16] absolute transition-all ease-in-out duration-500`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) translateY(${
                    (index - (numVideos - 1)) * 20
                  }px) scale(${1 - (numVideos - 1 - index) * 0.05})`,
                  zIndex: index,
                }}
                {...cardProps}
              >
                <VideoCard src={video.src} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="p-20 pb-0 flex flex-col items-center justify-center">
      <SectionHeading title="Social Media" />
      <div
        className="w-full h-screen relative cursor-pointer -mt-30"
        onClick={() => setIsExpanded(true)}
      >
        {videosData.videos.map((video, index) => {
          const rotation = (index - Math.floor(videosData.videos.length / 2)) * 5;
          const cardWidthPercentage = 18;
          const gapPercentage =
            (100 - videosData.videos.length * cardWidthPercentage) /
            (videosData.videos.length + 1);
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

          let zIndex =
            index < Math.ceil(videosData.videos.length / 2)
              ? index
              : videosData.videos.length - 1 - index;
          if (isHovered) {
            zIndex = 10;
          }

          return (
            <div
              key={video.src}
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
