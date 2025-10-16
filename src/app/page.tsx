import AboutBanner from "@/outlets/AboutBanner";
import AboutUs from "@/outlets/AboutUs";
import ContactUs from "@/outlets/ContactUs";
import Hero from "@/outlets/Hero";
import OurProducts from "@/outlets/OurProducts";
import ProductBanner from "@/outlets/ProductBanner";
import SocialMediaSection from "@/outlets/SocialMediaSection";
import TopSellers from "@/outlets/TopSellers";
import Banner from "../../public/multimedia/banner.svg";

const productBanners = [
  {
    title: "MUKHWAS",
    description: "A royal blend of paan flavors enriched with crunchy supari, delivering the perfect balance of freshness and bold taste.",
    image: Banner,
    bgColor: "bg-[radial-gradient(circle,_#FE5E85,_#D93A61)]",
    titleBgColor: "bg-[#51914E]",
  },
  {
    title: "FRESHNER",
    description: "A refreshing burst of mint and fennel, crafted to invigorate your senses and leave you with a lasting cool sensation.",
    image: Banner, // You can use a different image here
    bgColor: "bg-[radial-gradient(circle,_#4B79A1,_#283E51)]",
    titleBgColor: "bg-pinkcity-dark",
  },
];

export default function Home() {
  return (
    <>
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
