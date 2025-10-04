import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TopSellerItem = () => {
  return (
    <div className="w-3/12 flex flex-col justify-evenly items-center gap-4 p-4">
      <div className="w-full bg-[radial-gradient(circle,_#FE5E85,_#D93A61)] rounded-t-[20px] pt-4 flex flex-col items-center justify-baseline overflow-hidden">
        heelo
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
