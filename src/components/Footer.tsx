import React from "react";
import Logo from "../svgs/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center p-16">
      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col items-center gap-10">
          <Logo />
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/pinkcitymouthfresheners?igsh=eWNtYzB0NXV2Nnh5&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-pinkcity-dark p-4 rounded-lg">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
              </div>
            </a>
            <a
              href="https://www.facebook.com/share/1PAhoafFNe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-pinkcity-dark p-4 rounded-lg">
                <FontAwesomeIcon icon={faFacebook} size="2x" color="black" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex gap-24 opacity-90">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113859.99999999999!2d75.70000000000001!3d26.900000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4b8886e0001%3A0x6124000000000000!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <div className="text-left flex flex-col gap-4">
            <h2 className="font-bold text-lg mb-4">Company</h2>
            <p className="text-sm">About</p>
            <p className="text-sm">Contact us</p>
          </div>
          <div className="text-left flex flex-col gap-4">
            <h2 className="font-bold text-lg mb-4">Legal</h2>
            <p className="text-sm">Terms & Conditions</p>
            <p className="text-sm">Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <p className="text-lg opacity-90">
          © {new Date().getFullYear()} PinkCity MouthFresheners. All rights
          reserved.
        </p>
        <p className="text-sm opacity-90">
          Crafted with ❤️ in Jaipur, India.
        </p>
      </div>
    </div>
  );
};

export default Footer;
