"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import AboutUsLogo from "../../public/images/about_us.svg";
import AboutUs1 from "../../public/multimedia/about_us_1.png";
import AboutUs2 from "../../public/multimedia/about_us_2.png";
import SectionHeading from "@/components/SectionHeading";

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
        threshold: 0.2, // Trigger when 30% of the element is visible
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
      <div className="sticky top-20 w-full flex justify-center bg-white z-20 py-4">
        <SectionHeading title="About Us" />
      </div>
      {/* About Us Content */}
      <div className="flex items-start justify-between w-full mt-14">
        <div className="bg-pinkcity-dark rounded-r-[50] max-w-1/3 overflow-hidden z-10 sticky top-45">
          <Image src={AboutUsLogo} alt="About Us Illustration" />
        </div>
        <div className="max-w-3/5 text-lg px-18 py-4 flex flex-col gap-12">
          <h2 className="font-semibold text-2xl sticky top-40 bg-white py-2 z-10">
            Celebrating Tradition, Crafting Flavor
          </h2>
          <p className="text-justify">
            Welcome to Pink City Mouth Freshener, where every blend is a
            reflection of India’s timeless hospitality and Jaipur’s rich
            cultural heritage.
            <br />
            <br />
            Since 1982, we have been dedicated to creating premium mouth
            fresheners that combine authentic flavors, unmatched freshness, and
            uncompromising hygiene. What began as a small initiative rooted in
            tradition has today grown into a trusted household name across India
            and beyond.
            <br />
            <br />
            Our journey is built on passion and precision. From sourcing the
            finest ingredients to perfecting each blend, every step is guided by
            our commitment to purity, quality, and consistency.
            <br />
            <br />
            At Pink City, we don’t just make mouth fresheners — we curate
            experiences. With a legacy grounded in trust and a future driven by
            innovation, we invite you to join us in this flavorful journey —{" "}
            <b>where every pinch tells a story.</b>
          </p>
        </div>
      </div>
      {/* Philosophy Section */}
      <div className="w-full flex items-start justify-between py-20 px-14">
        <div className="max-w-2/5 text-lg text-justify flex flex-col gap-12">
          <p>
            At Pink City, we believe taste is tradition. Our mouth fresheners
            are more than just an after-meal ritual — they’re a symbol of
            warmth, culture, and connection. We craft each product with the same
            care and respect that has defined Indian hospitality for centuries.
            <br />
            <br />
            Our philosophy is centered around three promises — authentic flavor,
            premium quality, and absolute freshness. Every ingredient is
            handpicked and processed under hygienic conditions to ensure that
            what reaches you is nothing short of perfection.
            <br />
            <br />
            We understand that modern consumers seek both taste and trust.
            That’s why our blends bring together traditional recipes and
            contemporary flavors — offering something for every generation, from
            the nostalgic to the adventurous.
            <br />
            <br />
            Choosing Pink City means choosing a brand that values honesty,
            craftsmanship, and care. We don’t just want to satisfy your taste
            buds — we want to become a part of your family’s everyday moments,
            celebrations, and traditions.
            <br />
            <br />
            <b>Pink City Mouth Freshener — Where Taste Meets Tradition.</b>
          </p>
        </div>
        <div
          className="max-w-2/5 h-full flex items-center justify-center sticky top-45"
          id="aboutUsImages"
          ref={imageContainerRef}
        >
          <div className={`parent ${isInView ? "animate-on-scroll" : ""}`}>
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
