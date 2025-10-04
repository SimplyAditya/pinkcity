"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import Star from "../../public/images/star.svg";
import Supari from "../../public/multimedia/supari.svg";
import Image from "next/image";

const TopSellerItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [initialHeight, setInitialHeight] = useState<number | undefined>(
    undefined
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && initialHeight === undefined) {
      setInitialHeight(containerRef.current.offsetHeight);
    }
  }, [initialHeight]);

  return (
    <div
      className="w-3/12 flex flex-col justify-start items-center gap-4 pb-4 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ minHeight: initialHeight }} className="relative w-full">
        <div
          ref={containerRef}
          id="container"
          className={`w-full absolute bottom-0 left-0 rounded-t-[20px] overflow-hidden bg-[radial-gradient(circle,_#FE5E85,_#D93A61)] flex flex-col items-center transition-all duration-1500 ${isHovered ? "" : "pt-20"}`}
        >
          <div className="h-full w-4/5 flex items-center justify-center relative">
            <Image
              src={Star}
              alt="star"
              className="w-full opacity-50 scale-[1.2] -translate-y-[10%] transition-all duration-1500 origin-top group-hover:scale-[1] group-hover:scale-y-80 group-hover:translate-y-[10%]"
            />
          </div>
          <p
            className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[110%] text-white text-5xl text-center transition-all duration-1500 group-hover:opacity-0 group-hover:-translate-y-[400%]"
            style={{ fontFamily: "var(--font-bentham)" }}
          >
            SWEET
            <br />
            SUPARI
          </p>
          <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 flex justify-center">
            <Image
              src={Supari}
              alt="Mukhwas"
              className="w-full z-10 object-cover transition-all duration-1500 transform scale-[1.1] translate-y-[70%] group-hover:scale-[.5] group-hover:rotate-180 group-hover:translate-y-0"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center text-xl">
        <h2 className="text-2xl font-medium">Mukhwas</h2>
        <div>
          <FontAwesomeIcon icon={faArrowRight} className="text-pinkcity" />
        </div>
      </div>
    </div>
  );
};

export default TopSellerItem;
