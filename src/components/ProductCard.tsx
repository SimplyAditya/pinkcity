import React from "react";
import Image, { StaticImageData } from "next/image";
import Star from "../../public/images/star.svg";
import Design from "../../public/images/design.svg";

interface ProductCardProps {
  title: string;
  image: string | StaticImageData;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image }) => {
  return (
    <div className="group rounded-[25px] p-1 bg-gradient-border transition-transform duration-1000 hover:scale-[1.1] relative">
      <div className="bg-white pb-6 md:pb-10 rounded-[22px] flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle,_#FF7E9E,_#E34F73)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="relative w-[80%] flex flex-col justify-center items-center pt-4">
          <Image
            src={Star}
            alt="Star Icon"
            className="w-full transition-opacity duration-1000 delay-500 group-hover:opacity-0 z-0"
          />
          <Image
            src={image}
            alt="Product Image"
            className="absolute w-[60%] pb-6 md:pb-10 transition-transform duration-1000 scale-[1.3] group-hover:scale-[1.5]"
          />
        </div>
        <h3
          className="relative font-bold text-2xl md:text-3xl -mt-8 md:-mt-12 product-title-animation"
          style={{ fontFamily: "var(--font-bentham)" }}
        >
          {title}
        </h3>
      </div>
      {/* Corner Designs */}
      <Image src={Design} alt="design" className="absolute top-2 left-2 w-6 h-6 md:w-10 md:h-10 opacity-0 group-hover:opacity-100" />
      <Image src={Design} alt="design" className="absolute top-2 right-2 w-6 h-6 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 rotate-90" />
      <Image src={Design} alt="design" className="absolute bottom-2 right-2 w-6 h-6 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 rotate-180" />
      <Image src={Design} alt="design" className="absolute bottom-2 left-2 w-6 h-6 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 -rotate-90" />
    </div>
  );
};

export default ProductCard;