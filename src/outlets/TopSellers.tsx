import React from "react";
import TopSellerItem from "@/components/TopSellerItem";
import SectionHeading from "@/components/SectionHeading";
import Supari from "../../public/multimedia/supari.svg";

const topSellersData = [
  { text: "Royal Mukhwas", imageSrc: Supari },
  { text: "Shahi Pan", imageSrc: Supari },
  { text: "Sweet Gulkand", imageSrc: Supari },
];

const TopSellers = () => {
  return (
    <div className="w-full py-24 flex flex-col justify-center items-center gap-14 relative">
      <SectionHeading title="Top Sellers" />
      <div className="w-full p-16 flex justify-around items-center gap-6">
        {topSellersData.map((item, index) => (
          <TopSellerItem
            key={index}
            text={item.text}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSellers;