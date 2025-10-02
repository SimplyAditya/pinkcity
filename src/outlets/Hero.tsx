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
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-white flex items-center justify-center pt-16 px-10">
        <div className="relative w-full h-11/12 text-center bg-[radial-gradient(circle,_#FE5E85,_#D93A61)] rounded-[59] flex flex-col items-center justify-end gap-10">
          {/* Background Stars and Elaichi */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[59]">
            {/* Elaichi Background Elements */}
            <Image
              src="/images/elaichi.svg"
              alt="Elaichi decoration"
              width={104}
              height={104}
              className={`absolute z-5 transform rotate-45 transition-all duration-1000 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 ${
                isAnimated
                  ? "top-[-6%] right-[5%] scale-120"
                  : "top-[-20%] right-[-20%] scale-160"
              }`}
            />
            <Image
              src="/images/elaichi.svg"
              alt="Elaichi decoration"
              width={112}
              height={112}
              className={`absolute z-5 transform rotate-12 transition-all duration-1000 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 ${
                isAnimated
                  ? "top-[8%] left-[15%] scale-75"
                  : "top-[5%] left-[5%] scale-100"
              }`}
            />
            <Image
              src="/images/elaichi.svg"
              alt="Elaichi decoration"
              width={112}
              height={112}
              className={`absolute z-5 transform -rotate-15 transition-all duration-1000 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 ${
                isAnimated
                  ? "bottom-[20%] left-[8%] scale-75"
                  : "bottom-[5%] left-[5%] scale-100"
              }`}
            />
            <Image
              src="/images/elaichi.svg"
              alt="Elaichi decoration"
              width={112}
              height={112}
              className={`absolute z-5 transform rotate-25 transition-all duration-1000 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 ${
                isAnimated
                  ? "bottom-[25%] right-[25%] scale-75"
                  : "bottom-[5%] right-[5%] scale-100"
              }`}
            />
            {/* Top area stars */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[10%] left-[8%] text-[#FE5E85] text-lg sm:text-xl md:text-2xl transform rotate-12 opacity-80" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[15%] right-[12%] text-[#D93A61] text-sm sm:text-lg md:text-xl transform -rotate-45 opacity-80" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[8%] left-[25%] text-[#FE5E85] text-xs sm:text-sm md:text-lg transform rotate-90 opacity-80" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[12%] right-[30%] text-[#D93A61] text-sm sm:text-lg transform -rotate-30 opacity-80" 
            />
            
            {/* Around main title stars */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[22%] left-[15%] text-[#D93A61] text-lg sm:text-xl md:text-2xl transform rotate-45 opacity-80" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[28%] right-[18%] text-[#FE5E85] text-sm sm:text-lg transform -rotate-60 opacity-80" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[25%] left-[40%] text-[#D93A61] text-xs sm:text-sm md:text-lg transform rotate-15 opacity-80" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[32%] right-[45%] text-[#FE5E85] text-sm sm:text-lg transform -rotate-75 opacity-80" 
            />
            
            {/* Between title and subtitle stars */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[38%] left-[10%] text-[#FE5E85] text-lg sm:text-xl transform rotate-90 opacity-80" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[42%] right-[8%] text-[#D93A61] text-sm sm:text-lg md:text-xl transform -rotate-12 opacity-80" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[40%] left-[35%] text-[#FE5E85] text-xs sm:text-sm transform rotate-135 opacity-80" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[44%] right-[35%] text-[#D93A61] text-sm sm:text-lg transform -rotate-45 opacity-80" 
            />
            
            {/* Around subtitle stars */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[52%] left-[12%] text-[#D93A61] text-lg sm:text-xl transform rotate-60 opacity-65" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[48%] right-[15%] text-[#FE5E85] text-sm sm:text-lg transform -rotate-90 opacity-50" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[55%] left-[25%] text-[#FE5E85] text-xs sm:text-sm md:text-lg transform rotate-30 opacity-35" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[50%] right-[25%] text-[#D93A61] text-sm sm:text-lg transform -rotate-105 opacity-55" 
            />
            
            {/* Around tagline stars */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[62%] left-[8%] text-[#FE5E85] text-lg sm:text-xl transform rotate-45 opacity-60" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[66%] right-[10%] text-[#D93A61] text-sm sm:text-lg md:text-xl transform -rotate-75 opacity-50" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[64%] left-[30%] text-[#D93A61] text-xs sm:text-sm transform rotate-120 opacity-40" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[68%] right-[30%] text-[#FE5E85] text-sm sm:text-lg transform -rotate-15 opacity-45" 
            />
            
            {/* Bottom area stars */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[75%] left-[15%] text-[#D93A61] text-lg sm:text-xl transform rotate-75 opacity-55" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[72%] right-[20%] text-[#FE5E85] text-sm sm:text-lg transform -rotate-30 opacity-50" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[78%] left-[40%] text-[#FE5E85] text-xs sm:text-sm md:text-lg transform rotate-90 opacity-35" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[74%] right-[40%] text-[#D93A61] text-sm sm:text-lg transform -rotate-60 opacity-60" 
            />
            
            {/* Additional scattered stars for density */}
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[18%] left-[60%] text-[#FE5E85] text-xs sm:text-sm transform rotate-45 opacity-30" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[35%] left-[65%] text-[#D93A61] text-sm transform -rotate-90 opacity-40" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[58%] left-[55%] text-[#FE5E85] text-xs sm:text-sm transform rotate-15 opacity-35" 
            />
            <FontAwesomeIcon 
              icon={faStar} 
              className="absolute top-[45%] left-[70%] text-[#D93A61] text-sm transform -rotate-45 opacity-45" 
            />
          </div>

          <div className="flex items-center justify-center text-8xl text-white font-bold gap-6 relative z-10">
            <h1 className="">Aisa</h1>
            <div className="relative">
              <div
                className={`absolute inset-0 bg-[#51914E] transform -rotate-2 origin-left transition-transform duration-1000 ${
                  isAnimated ? "scale-x-100" : "scale-x-10"
                }`}
              ></div>
              <h1 className="relative px-6 py-2">SWAAD,</h1>
            </div>
          </div>
          <div className="relative z-10">
            <h1 className="text-white text-8xl font-bold">
              Jo Sada Rahe Yaad
            </h1>
          </div>
          <div className="relative z-10">
            <p className="text-white text-2xl mb-2">
              Authentic Mouthfreshener Manufacturer
            </p>
          </div>
          <div className="relative h-1/10 min-h-38 w-full flex justify-center overflow-hidden">
            <button
              className={`absolute left-1/2 -translate-x-1/2 transition-all duration-1000 ${
                isAnimated ? "bottom-[60%]" : "bottom-[-10%]"
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
