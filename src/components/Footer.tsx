import React from "react";
import Logo from "../../public/images/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black text-white text-center flex items-start justify-between p-16">
      <div className="flex flex-col items-center gap-10">
        <Image
          src={Logo}
          alt="PinkCity MouthFresheners Logo"
          priority
          quality={80}
        />
        <div>
          <p className="text-sm opacity-90 mt-4">
            © {new Date().getFullYear()} PinkCity MouthFresheners. All rights
            reserved.
          </p>
          <p className="text-sm opacity-90">
            Crafted with ❤️ in Jaipur, India.
          </p>
        </div>
      </div>
      <div className="flex gap-24 opacity-90">
        <div className="text-left flex flex-col gap-4">
          <h2 className="font-bold text-lg mb-4">Company</h2>
          <p className="text-sm">About</p>
          <p className="text-sm">Contact us</p>
        </div>
        <div className="text-left flex flex-col gap-4">
          <h2 className="font-bold text-lg mb-4">Quick Link</h2>
          <p className="text-sm">Share Location</p>
          <p className="text-sm">Contact us</p>
        </div>
        <div className="text-left flex flex-col gap-4">
          <h2 className="font-bold text-lg mb-4">Legal</h2>
          <p className="text-sm">Terms & Conditions</p>
          <p className="text-sm">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
