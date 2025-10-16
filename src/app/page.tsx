'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import AboutBanner from "@/outlets/AboutBanner";
import AboutUs from "@/outlets/AboutUs";
import ContactUs from "@/outlets/ContactUs";
import Hero from "@/outlets/Hero";
import OurProducts from "@/outlets/OurProducts";
import ProductBanner from "@/outlets/ProductBanner";
import SocialMediaSection from "@/outlets/SocialMediaSection";
import TopSellers from "@/outlets/TopSellers";
import Banner from "../../public/multimedia/banner.svg";
import Banner2 from "../../public/multimedia/banner_2.svg";
import Header from '@/components/Header';

const BrochureOverlay = dynamic(() => import('@/components/BrochureOverlay'), { ssr: false });

const productBanners = [
  {
    title: "PAAN MUKHWAS",
    description: "A royal blend of paan flavors enriched with crunchy supari, delivering the perfect balance of freshness and bold taste.",
    image: Banner,
    bgColor: "bg-[radial-gradient(circle,_#FE5E85,_#D93A61)]",
    titleBgColor: "bg-[#51914E]",
  },
  {
    title: "MUKHWAS",
    description: "A refreshing burst of mint and fennel, crafted to invigorate your senses and leave you with a lasting cool sensation.",
    image: Banner2, // You can use a different image here
    bgColor: "bg-[radial-gradient(circle,_#FE5E85,_#D93A61)]",
    titleBgColor: "bg-[#51914E]",
  },
];

export default function Home() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const openBrochure = () => setIsBrochureOpen(true);
  const closeBrochure = () => setIsBrochureOpen(false);

  return (
    <>
      <Header onBrochureClick={openBrochure} />
      {isBrochureOpen && <BrochureOverlay onClose={closeBrochure} />}
      <div className="mx-auto no-scrollbar">
        <Hero />
        <AboutBanner />
        <AboutUs />
        <ProductBanner {...productBanners[0]} />
        <TopSellers />
        <OurProducts />
        <ProductBanner {...productBanners[1]} />
        <SocialMediaSection />
        <ContactUs />
      </div>
    </>
  );
}
