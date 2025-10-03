import Image from "next/image";
import React from "react";
import Leaf from "../../public/images/leaf.svg";

const AboutUs = () => {
  return (
    <div className="w-full py-14 px-0 flex flex-col justify-center items-center gap-6 relative">
      <h1 className="relative inline-block text-5xl font-extrabold tracking-[0.02em]">
        About Us
        <div className="absolute bottom-[-25%] right-[-15%] z-[-1] opacity-80">
          <Image src={Leaf} alt="Leaf Design" />
        </div>
      </h1>
    </div>
  );
};

export default AboutUs;
