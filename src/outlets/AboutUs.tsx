'use client';
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Leaf from "../../public/images/leaf.svg";
import AboutUsLogo from "../../public/images/about_us.svg";
import AboutUs1 from "../../public/multimedia/about_us_1.png";
import AboutUs2 from "../../public/multimedia/about_us_2.png";

const AboutUs = () => {
  const [isInView, setIsInView] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTimeout(() => {
          setIsInView(entry.isIntersecting);
        }, 500); // Delay of 500ms
        //
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: "0px 0px -10% 0px", // Trigger slightly before the element is fully visible
      }
    );

    if (imageContainerRef.current) {
      observer.observe(imageContainerRef.current);
    }

    return () => {
      if (imageContainerRef.current) {
        observer.unobserve(imageContainerRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full py-14 px-0 flex flex-col justify-center items-center gap-6 relative">
      <h1 className="relative inline-block text-5xl font-extrabold tracking-[0.02em] my-auto">
        About Us
        <div className="absolute bottom-[-25%] right-[-15%] z-[-1] opacity-80">
          <Image src={Leaf} alt="Leaf Design" />
        </div>
      </h1>
      {/* About Us Content */}
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
            reflection of India{"\'"}s timeless hospitality and Jaipur{"\'"}s rich
            cultural heritage. <br /> Since 1982, we have been dedicated to
            creating premium mouth fresheners that combine authentic flavors,
            unmatched freshness, and uncompromising hygiene. What began as a
            small initiative rooted in tradition has today grown into a trusted
            name across households in India and beyond.
          </p>
        </div>
      </div>
      {/* Philosophy Section */}
      <div className="w-full flex items-center justify-between py-20 px-14">
        <div className="max-w-2/5 text-lg text-justify flex flex-col gap-12">
          <p>
            Our philosophy is simple: <b>every pinch should delight.</b> From
            classic blends loved for generations to innovative flavors crafted
            for today{"\'"}s tastes, we ensure that every product carries our promise of
            quality, purity, and care.
            <br />
            <br />
            At Pink City, we don{"\'"}t just make mouth fresheners — we curate
            experiences. With a legacy built on trust and a future driven by
            innovation, we invite you to join us in this flavorful journey.
            <br />
            Pink City Mouth Freshener — Where Taste Meets Tradition.
          </p>
        </div>
        <div
          className="max-w-2/5 h-full flex items-center justify-center"
          id="aboutUsImages"
          ref={imageContainerRef}
        >
          <div className={`parent ${isInView ? 'animate-on-scroll' : ''}`}>
            <Image
              src={AboutUs1}
              alt="About Us Image 1"
              className="div1 rounded-4xl"
            />

            <Image
              src={AboutUs2}
              alt="About Us Image 2"
              className="div2 rounded-4xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
