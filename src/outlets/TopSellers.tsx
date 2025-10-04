import React from "react";
import TopSellerItem from "@/components/TopSellerItem";
import SectionHeading from "@/components/SectionHeading";

const TopSellers = () => {
  return (
    <div className="w-full py-24 flex flex-col justify-center items-center gap-14 relative">
      <SectionHeading title="Top Sellers" />
      <div className="w-full p-16 pt-20 flex justify-around items-center gap-6">
      <TopSellerItem />
      <TopSellerItem />
      <TopSellerItem />
      </div>
    </div>
  );
};

export default TopSellers;
