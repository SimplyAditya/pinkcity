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
        <div className="max-w-3/5 text-lg px-14 py-4 flex flex-col gap-12">
          <h2 className="font-semibold text-2xl sticky top-40 bg-white py-2 z-10">
            Celebrating Tradition, Crafting Flavor
          </h2>
          <p className="text-justify">
            Welcome to Pink City Mouth Freshener, where every blend is a tribute
            to India{"'"}s timeless hospitality and the rich cultural heritage
            of Jaipur. Nestled in the heart of the Pink City, we take pride in
            offering products that are not just flavourful but also rooted
            deeply in tradition and care.
            <br />
            Since our founding in 1982, we{"'"}ve remained committed to creating
            premium mouth fresheners that blend authentic Indian flavors with
            modern expectations of freshness and hygiene. What began as a humble
            initiative has grown into a trusted household name—across India and
            beyond—carried forward with passion and integrity. 
            <br/>
            Our journey is
            built on a simple yet powerful philosophy: every pinch should
            delight. Whether it{"'"}s the comforting taste of classic blends
            cherished for generations or exciting new flavours designed for
            today{"'"}s evolving palate, we focus on delivering products that
            leave a lasting impression. At Pink City, quality is non-negotiable.
            From sourcing the finest ingredients to ensuring hygienic,
            state-of-the-art packaging, we take every step to maintain the
            highest standards. Each product reflects our unwavering commitment
            to purity, freshness, and exceptional taste. But we don{"'"}t just
            make mouth fresheners — we curate experiences. Each blend tells a
            story of tradition, culture, and innovation, creating little moments
            of joy in everyday life. It{"'"}s this unique blend of legacy and
            creativity that keeps our customers coming back for more. As we look
            to the future, we remain deeply rooted in the values that built our
            brand. With innovation at the forefront and trust as our foundation,
            we invite you to continue this flavorful journey with us.
          </p>
        </div>
      </div>
      {/* Philosophy Section */}
      <div className="w-full flex items-start justify-between py-20 px-14">
        <div className="max-w-2/5 text-lg text-justify flex flex-col gap-12">
          <p>
            Our philosophy is simple: <b>every pinch should delight.</b> From
            classic blends loved for generations to innovative flavors crafted
            for today{"'"}s tastes, we ensure that every product carries our
            promise of quality, purity, and care.
            <br />
            <br />
            At Pink City, we don{"'"}t just make mouth fresheners — we curate
            experiences. With a legacy built on trust and a future driven by
            innovation, we invite you to join us in this flavorful journey.
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
