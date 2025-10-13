import React from "react";
import Logo from "../svgs/Logo";

const headers = [
  {
    name: "PRODUCTS",
    link: "#products",
  },
  {
    name: "PREMIUM",
    link: "#",
  },
];

const Header = ({ onBrochureClick }: { onBrochureClick: () => void }) => {
  return (
    <div className="w-full flex items-center justify-between p-3 px-10 fixed text-sm bg-white/80 z-20 backdrop-blur-lg shadow-xs">
      <div className="w-1/5">
        <a href="#hero" className="cursor-pointer">
          <Logo />
        </a>
      </div>
      <div className="flex items-center justify-center gap-8">
        <button onClick={onBrochureClick} className="relative group px-3 py-2 overflow-hidden">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            CATALOGUE
          </span>
          <div className="absolute inset-0 bg-[#51914E] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 -z-10"></div>
        </button>
        {headers.map((header) => (
          <a href={header.link} key={header.name} className="relative group px-3 py-2 overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {header.name}
            </span>
            <div className="absolute inset-0 bg-[#51914E] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 -z-10"></div>
          </a>
        ))}
        <a href="#contact" className="relative group bg-pinkcity-dark text-white py-2.5 px-5 rounded-[9] overflow-hidden">
          <span className="relative z-10">CONTACT US</span>
          <div className="absolute inset-0 bg-[#51914E] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
        </a>
      </div>
    </div>
  );
};

export default Header;
