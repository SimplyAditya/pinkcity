import AboutBanner from "@/outlets/AboutBanner";
import AboutUs from "@/outlets/AboutUs";
import Hero from "@/outlets/Hero";
import OurProducts from "@/outlets/OurProducts";
import ProductBanner from "@/outlets/ProductBanner";
import SocialMediaSection from "@/outlets/SocialMediaSection";
import TopSellers from "@/outlets/TopSellers";

export default function Home() {
  return <>
  <div className="mx-auto no-scrollbar">
  <Hero />
  <AboutBanner />
  <AboutUs />
  <ProductBanner />
  <TopSellers />
  <OurProducts />
  <ProductBanner />
  <SocialMediaSection />
  </div> 
  </>;
}
