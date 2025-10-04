import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Star from "../../public/images/star.svg";
import Supari from "../../public/multimedia/supari.svg";
import Image from "next/image";

const TopSellerItem = () => {
  return (
    <div className="w-3/12 flex flex-col justify-evenly items-center gap-4 pb-4">
      <div
        id="container"
        className="w-full rounded-t-[20px] overflow-hidden relative bg-[radial-gradient(circle,_#FE5E85,_#D93A61)] flex flex-col items-center pt-10"
      >
        <div className="h-full w-4/5 flex items-center justify-center relative">
          <Image
            src={Star}
            alt="star"
            className="w-full opacity-50 scale-[1.2]"
          />
        </div>
        <p
          className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[110%] text-white text-5xl text-center"
          style={{ fontFamily: "var(--font-bentham)" }}
        >
          SWEET
          <br />
          SUPARI
        </p>
        <Image
          src={Supari}
          alt="Mukhwas"
          className="absolute bottom-[-50%] left-0 w-full z-10 object-cover scale-[1.1]"
        />
      </div>
      <div className="w-full flex justify-between items-center text-xl">
        <h2 className="text-2xl font-medium">Mukhwas</h2>
        <div>
          <FontAwesomeIcon icon={faArrowRight} className="text-pinkcity" />
        </div>
      </div>
    </div>
  );
};

export default TopSellerItem;
