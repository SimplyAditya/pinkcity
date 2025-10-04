import React from "react";
import Logo from "../svgs/Logo";

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
    <div className="w-full flex items-center justify-between p-3 px-10 fixed text-sm bg-white/80 z-20 backdrop-blur-lg shadow-xs">
      <div className="w-1/5">
        <Logo />
      </div>
      <div className="flex items-center justify-center gap-8">
        {headers.map((header) => (
          <button key={header.name}>{header.name}</button>
        ))}
        <button className="bg-pinkcity-dark text-white py-2.5 px-5 rounded-[9]">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Header;
