import React from "react";
import Image from "next/image";
import Banner from "../../public/multimedia/banner.svg";

const ProductBanner = () => {
  return (
    <div className="w-full bg-pinkcity flex justify-baseline bg-[radial-gradient(circle,_#FE5E85,_#D93A61)]">
      {/* parent div at 50% (you can also use w-1/2 instead of w-2/3) */}
      <div className="w-1/2 relative overflow-hidden">
        <Image
          src={Banner}
          alt="Product Banner"
          className="
            object-cover 
            scale-[1.2]
            origin-bottom-left
          "
        />
      </div>
      <div className="w-1/2 text-white flex flex-col items-center justify-center">
      <div className="h-full w-3/4 flex flex-col justify-center items-start gap-12 px-16">
        <div className="relative">
              <div
                className={`absolute inset-0 bg-[#51914E] transform -rotate-2 origin-left`}
              ></div>
              <h1 className="relative ps-2 pe-8 py-2 text-6xl font-extrabold">MUKHWAS</h1>
            </div>
        <p className="text-xl max-w-3/4">
          A royal blend of paan flavors enriched with crunchy supari, delivering the perfect balance of freshness and
          bold taste.
        </p>
      </div>
      </div>
    </div>
  );
};

export default ProductBanner;
