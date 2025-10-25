import React from "react";
import { useMobile } from "@/components/MobileProvider";

const SectionHeading = ({ title }: { title: string }) => {
  const isMobile = useMobile();

  return (
    <h1 className={`relative inline-block font-extrabold tracking-[0.02em] ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
      {title}
      <div className={`absolute z-[-1] opacity-80 ${isMobile ? 'bottom-[-20%] right-[-10%]' : 'bottom-[-25%] right-[-15%]'}`}>
        <svg
          width={isMobile ? "120" : "186"}
          height={isMobile ? "23" : "35"}
          viewBox="0 0 186 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M84 3.97549C65.3333 8.30883 22.4 19.9755 0 31.9755C56.6667 37.3088 173.2 39.1755 186 3.97549C168 0.975492 122.4 -3.22451 84 3.97549Z"
            fill="#58A954"
          />
          <path
            d="M101.5 18.4991C82.8333 22.8324 22.4 19.9746 0 31.9746C56.6667 37.3079 173.2 39.1746 186 3.97461C169 12.4991 139.9 11.2991 101.5 18.4991Z"
            fill="#51914E"
          />
        </svg>
      </div>
    </h1>
  );
};

export default SectionHeading;
