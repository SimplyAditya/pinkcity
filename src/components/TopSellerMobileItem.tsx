import Image, { StaticImageData } from "next/image";
import React from "react";
import Star from "../../public/images/star.svg";

type Props = {
  text: string;
  imageSrc: StaticImageData;
};

const TopSellerMobileItem = ({ text, imageSrc }: Props) => {
  return (
    <div className="w-full h-48 aspect-square relative bg-[radial-gradient(circle,_#FE5E85,_#D93A61)] rounded-[20px] overflow-hidden">
      <Image
        src={Star}
        alt="star"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-4/6 w-3/5 opacity-50 scale-[1.8] origin-top"
      />
      <p
        className="absolute top-4 left-4 text-white text-2xl z-10"
        style={{ fontFamily: "var(--font-bentham)" }}
      >
        {text}
      </p>
      <Image
        src={imageSrc}
        alt={text}
        className="absolute bottom-0 right-0 translate-1/3 scale-[1.4] object-cover z-10"
      />
    </div>
  );
};

export default TopSellerMobileItem;
