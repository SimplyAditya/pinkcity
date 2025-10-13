import React, { useRef } from "react";

interface VideoCardProps {
  src: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, onMouseEnter, onMouseLeave }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full rounded-2xl overflow-hidden shadow-lg"
    >
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoCard;