import AboutBanner from "@/outlets/AboutBanner";
import AboutUs from "@/outlets/AboutUs";
import Hero from "@/outlets/Hero";
import ProductBanner from "@/outlets/ProductBanner";

export default function Home() {
  return <>
  <div className="mx-auto">
  <Hero />
  <AboutBanner />
  <AboutUs />
  <ProductBanner />
  </div> 
  </>;
}
