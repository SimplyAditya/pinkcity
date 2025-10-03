import Image from "next/image";
import React from "react";
import Leaf from "../../public/images/leaf.svg";
import AboutUsLogo from "../../public/images/about_us.svg";

const AboutUs = () => {
  return (
    <div className="w-full py-14 px-0 flex flex-col justify-center items-center gap-6 relative">
      <h1 className="relative inline-block text-5xl font-extrabold tracking-[0.02em] my-auto">
        About Us
        <div className="absolute bottom-[-25%] right-[-15%] z-[-1] opacity-80">
          <Image src={Leaf} alt="Leaf Design" />
        </div>
      </h1>
      <div className="flex items-center justify-between w-full mt-16">
        <div className="bg-pinkcity-dark rounded-r-[50] max-w-1/3">
          <Image src={AboutUsLogo} alt="About Us Illustration" />
        </div>
        <div className="max-w-1/2 text-lg text-justify px-14 flex flex-col gap-12">
          <h2 className="font-semibold text-2xl">
            Celebrating Tradition, Crafting Flavor
          </h2>
          <p>
            Welcome to Pink City Mouth Freshener, where every blend is a
            reflection of India{"'"}s timeless hospitality and Jaipur{"'"}s rich
            cultural heritage. <br /> Since 1982, we have been dedicated to
            creating premium mouth fresheners that combine authentic flavors,
            unmatched freshness, and uncompromising hygiene. What began as a
            small initiative rooted in tradition has today grown into a trusted
            name across households in India and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
