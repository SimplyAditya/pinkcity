"use client";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="hero" className="w-full h-screen bg-white flex items-center justify-center pt-24 px-10">
        <div className="relative w-full h-11/12 text-center bg-[radial-gradient(circle,_#FE5E85,_#D93A61)] rounded-[59] flex flex-col items-center justify-end lg:gap-6 xl:gap-10">
          {/* Background Stars and Elaichi */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[59]">
            {/* Elaichi Background Elements */}
            <Image
              src="/images/elaichi.svg"
              alt="Premium cardamom elaichi used in PinkCity mouth freshener mukhwas"
              width={104}
              height={104}
              className={`absolute z-5 transform transition-all duration-2000 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 ${
                isAnimated
                  ? "top-[-6%] right-[5%] scale-120 rotate-25"
                  : "top-[-20%] right-[-20%] scale-160 rotate-75"
              }`}
            />
            <Image
              src="/images/elaichi.svg"
              alt="Natural ingredients for authentic Jaipur mukhwas"
              width={112}
              height={112}
              className={`absolute z-5 transform transition-all duration-2000 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 ${
                isAnimated
                  ? "top-[8%] left-[15%] scale-75 rotate-30"
                  : "top-[5%] left-[5%] scale-100 rotate-2"
              }`}
            />
            <Image
              src="/images/elaichi.svg"
              alt="Fresh ingredients for PinkCity mouth freshener products"
              width={112}
              height={112}
              className={`absolute z-5 transform transition-all duration-2000 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 ${
                isAnimated
                  ? "bottom-[20%] left-[8%] scale-75 -rotate-45"
                  : "bottom-[5%] left-[5%] scale-100 -rotate-5"
              }`}
            />
            <Image
              src="/images/elaichi.svg"
              alt="Quality elaichi cardamom for traditional Indian mukhwas"
              width={112}
              height={112}
              className={`absolute z-5 transform transition-all duration-2000 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 ${
                isAnimated
                  ? "bottom-[25%] right-[25%] scale-75 rotate-40"
                  : "bottom-[5%] right-[5%] scale-100 rotate-13"
              }`}
            />
            {/* Top area stars */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[10%] left-[8%] text-pinkcity text-lg sm:text-2xl md:text-4xl transform rotate-12 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[15%] right-[12%] text-pinkcity-dark text-sm sm:text-lg md:text-xl transform -rotate-45 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[8%] left-[25%] text-pinkcity text-xs sm:text-sm md:text-lg transform rotate-90 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[12%] right-[30%] text-pinkcity-dark text-sm sm:text-lg transform -rotate-30 opacity-90" 
            />
            
            {/* Around main title stars */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[22%] left-[15%] text-pinkcity-dark text-lg sm:text-xl md:text-2xl transform rotate-45 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[28%] right-[18%] text-pinkcity text-sm sm:text-lg transform -rotate-60 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[25%] left-[40%] text-pinkcity-dark text-xs sm:text-sm md:text-lg transform rotate-15 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[32%] right-[45%] text-pinkcity text-sm sm:text-lg transform -rotate-75 opacity-90" 
            />
            
            {/* Between title and subtitle stars */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[38%] left-[10%] text-pinkcity text-lg sm:text-xl transform rotate-90 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[42%] right-[8%] text-pinkcity-dark text-sm sm:text-lg md:text-xl transform -rotate-12 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[40%] left-[35%] text-pinkcity text-xs sm:text-sm transform rotate-135 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[44%] right-[35%] text-pinkcity-dark text-sm sm:text-lg transform -rotate-45 opacity-90" 
            />
            
            {/* Around subtitle stars */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[52%] left-[12%] text-pinkcity-dark text-lg sm:text-xl transform rotate-60 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[48%] right-[15%] text-pinkcity text-sm sm:text-lg transform -rotate-90 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[55%] left-[25%] text-pinkcity text-xs sm:text-sm md:text-lg transform rotate-30 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[50%] right-[25%] text-pinkcity-dark text-sm sm:text-lg transform -rotate-105 opacity-90" 
            />
            
            {/* Around tagline stars */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[62%] left-[8%] text-pinkcity text-lg sm:text-xl transform rotate-45 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[66%] right-[10%] text-pinkcity-dark text-sm sm:text-lg md:text-xl transform -rotate-75 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[64%] left-[30%] text-pinkcity-dark text-xs sm:text-sm transform rotate-120 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[68%] right-[30%] text-pinkcity text-sm sm:text-lg transform -rotate-15 opacity-90" 
            />
            
            {/* Bottom area stars */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[75%] left-[15%] text-pinkcity-dark text-lg sm:text-xl transform rotate-75 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[72%] right-[20%] text-pinkcity text-sm sm:text-lg transform -rotate-30 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[78%] left-[40%] text-pinkcity text-xs sm:text-sm md:text-lg transform rotate-90 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[74%] right-[40%] text-pinkcity-dark text-sm sm:text-lg transform -rotate-60 opacity-90" 
            />
            
            {/* Additional scattered stars for density */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[18%] left-[60%] text-pinkcity text-xs sm:text-sm transform rotate-45 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[35%] left-[65%] text-pinkcity-dark text-sm transform -rotate-90 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[58%] left-[55%] text-pinkcity text-xs sm:text-sm transform rotate-15 opacity-90" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[45%] left-[70%] text-pinkcity-dark text-sm transform -rotate-45 opacity-90" 
            />
          </div>

          <div className="flex items-center justify-center text-7xl xl:text-8xl text-white font-bold gap-6 relative z-10">
            <span className="text-7xl xl:text-8xl">Aisa</span>
            <div className="relative">
              <div
                className={`absolute inset-0 bg-[#51914E] transform -rotate-2 origin-left transition-transform duration-2000 ${
                  isAnimated ? "scale-x-100" : "scale-x-10"
                }`}
              ></div>
              <span className="relative px-6 py-2 text-7xl xl:text-8xl">SWAAD,</span>
            </div>
          </div>
          <div className="relative z-10">
            <span className="text-white text-7xl xl:text-8xl font-bold">
              Jo Sada Rahe Yaad
            </span>
          </div>
          <div className="relative z-10">
            <h1 className="text-white text-2xl md:text-3xl mb-2 font-semibold">
              PinkCity Mouth Freshener - Premium Mukhwas Manufacturer in Jaipur Since 1982
            </h1>
          </div>
          <div className="relative h-4/10 lg:h-3/10 xl:h-1/10 min-h-42 w-full flex justify-center overflow-hidden">
            <button
              className={`absolute left-1/2 -translate-x-1/2 transition-all duration-2000 ${
                isAnimated ? "bottom-[60%] opacity-100" : "bottom-[-10%] opacity-0"
              } bg-[#51914E] rounded-[10] p-6 py-2`}
            >
              <h1 className="text-white text-3xl">EXPLORE !</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
