import React from "react";
import TopSellerItem from "@/components/TopSellerItem";
import SectionHeading from "@/components/SectionHeading";
import Banarasi from "../../public/multimedia/banarasi_paan.png";
import CalcultiPaanGold from "../../public/multimedia/calcutti_pan_gold.png";
import DryPaan from "../../public/multimedia/dry_paan.png";

const topSellersData = [
  { text: "Banarasi Paan", imageSrc: Banarasi },
  { text: "Calcutti Pan Gold", imageSrc: CalcultiPaanGold },
  { text: "Dry Paan", imageSrc: DryPaan },
];

const TopSellers = () => {
  return (
    <div className="w-full py-24 flex flex-col justify-center items-center gap-14 relative">
      <SectionHeading title="Top Sellers" />
      <div className="w-full p-16 pb-0 flex justify-around items-center gap-6">
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