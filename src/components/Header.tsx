import React from "react";
import Logo from "../../public/images/logo.svg";
import Image from "next/image";

const headers = [
  {
    name: "CATALOGUE",
    link: "#",
  },
  {
    name: "PRODUCTS",
    link: "#",
  },
  {
    name: "PREMIUM",
    link: "#",
  },
];

const Header = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-between p-3 px-10 fixed text-sm bg-whit z-100">
        <div className="w-1/5">
          <Image src={Logo} alt="PinkCity MouthFresheners Logo" priority quality={80}/>
        </div>
        <div className="flex items-center justify-center gap-8">
          {headers.map((header) => (
            <button key={header.name}>{header.name}</button>
          ))}
          <button className="bg-[#D93A61] text-white py-2.5 px-5 rounded-[9]">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
