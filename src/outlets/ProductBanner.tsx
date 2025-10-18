import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProductBannerProps {
  title: string;
  description: string;
  image: StaticImageData;
  bgColor: string;
  titleBgColor: string;
}

const ProductBanner: React.FC<ProductBannerProps> = ({ title, description, image, bgColor, titleBgColor }) => {
  return (
    <div className={`w-full flex justify-baseline ${bgColor}`}>
      <div className="w-1/2 relative overflow-hidden translate-y-[18%]">
        <Image
          src={image}
          alt="Product Banner"
          loading="lazy"
          className="object-fill origin-bottom-left"
        />
      </div>
      <div className="w-1/2 text-white flex flex-col items-center justify-center">
        <div className="h-full w-3/4 flex flex-col justify-center items-start gap-12 px-16 pe-0">
          <div className="relative">
            <div
              className={`absolute inset-0 ${titleBgColor} transform -rotate-2 origin-left`}
            ></div>
            <h1 className="relative ps-2 pe-8 py-2 text-6xl font-extrabold">{title}</h1>
          </div>
          <p className="text-xl max-w-3/4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
