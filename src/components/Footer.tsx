import React from "react";
import Logo from "../svgs/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useMobile } from "./MobileProvider";

const Footer = () => {
  const isMobile = useMobile();

  return (
    <footer className="bg-black text-white flex flex-col items-center justify-center p-16" role="contentinfo">
      <div className={`w-full flex items-start justify-between ${isMobile ? "flex-col gap-4" : "flex-row" }`}>
        <div className="flex flex-col items-center gap-10">
          <Logo />
          <div className="text-center mb-6">
            <h3 className="font-bold text-xl mb-2">PinkCity Mouth Freshener</h3>
            <p className="text-sm opacity-90">Premium Mukhwas Since 1982</p>
            <p className="text-sm opacity-90">Jaipur, Rajasthan, India</p>
          </div>
          <div className="flex gap-4" role="navigation" aria-label="Social media links">
            <a
              href="https://www.instagram.com/pinkcitymouthfresheners?igsh=eWNtYzB0NXV2Nnh5&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow PinkCity Mouth Freshener on Instagram"
            >
              <div className="bg-pinkcity-dark p-4 rounded-lg hover:bg-pinkcity transition-colors">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
              </div>
            </a>
            <a
              href="https://www.facebook.com/share/1PAhoafFNe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow PinkCity Mouth Freshener on Facebook"
            >
              <div className="bg-pinkcity-dark p-4 rounded-lg hover:bg-pinkcity transition-colors">
                <FontAwesomeIcon icon={faFacebook} size="2x" color="black" />
              </div>
            </a>
          </div>
        </div>
        <div className={`flex opacity-90 ${isMobile ? "flex-col gap-14" : "flex-row gap-24" }`}>
          <div className="text-left flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <a href="#about" className="text-sm hover:text-pinkcity transition-colors">About Us</a>
            <a href="#products" className="text-sm hover:text-pinkcity transition-colors">Our Products</a>
            <a href="#contact" className="text-sm hover:text-pinkcity transition-colors">Contact Us</a>
            <a href="#faq" className="text-sm hover:text-pinkcity transition-colors">FAQ</a>
          </div>
          <div className="text-left flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <p className="text-sm">Paan Mukhwas</p>
            <p className="text-sm">Traditional Mukhwas</p>
            <p className="text-sm">Saunf Products</p>
            <p className="text-sm">Supari Products</p>
          </div>
          <div className="text-left flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-4">Keywords</h4>
            <p className="text-xs">Mouth Freshener Jaipur</p>
            <p className="text-xs">Mukhwas Manufacturer</p>
            <p className="text-xs">Premium Mouth Freshener</p>
            <p className="text-xs">Wholesale Mukhwas</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-16 max-w-4xl">
        <p className="text-lg opacity-90 mb-2">
          © {new Date().getFullYear()} <strong>PinkCity Mouth Freshener</strong>. All rights reserved.
        </p>
        <p className="text-sm opacity-90 mb-4">
          Premium Mukhwas Manufacturer in Jaipur | Crafted with ❤️ in the Pink City since 1982
        </p>
        <p className="text-xs opacity-75">
          <strong>PinkCity Mouth Freshener</strong> - Your trusted source for authentic Indian mouth fresheners, traditional mukhwas, paan products, and premium quality supari. Serving Jaipur, Rajasthan, and all of India with the finest mouth freshening products.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
