"use client";
import Alert from "@/components/Alert";
import ContactUsCard from "@/components/ContactUsCard";
import { useMobile } from "@/components/MobileProvider";
import React, { useState } from "react";

const ContactUs = () => {
  const [alert, setAlert] = useState<{
    show: boolean;
    message: string;
    variant: "success" | "error";
  } | null>(null);
  const isMobile = useMobile();
  const showAlert = (message: string, variant: "success" | "error") => {
    setAlert({ show: true, message, variant });
  };

  return (
    <div
      id="contact"
      className={`w-screen bg-pinkcity-dark flex flex-col justify-center items-center text-white ${
        isMobile ? "py-20 px-10" : "p-20"
      }`}
    >
      {alert?.show && (
        <Alert
          message={alert.message}
          variant={alert.variant}
          onClose={() => setAlert(null)}
        />
      )}
      <div
        className={`flex flex-col gap-6 justify-center items-center text-center ${
          isMobile ? "w-full" : "max-w-5xl"
        }`}
      >
        <h2
          className={`${
            isMobile ? "text-3xl" : "text-6xl"
          } font-extrabold tracking-wide`}
        >
          Contact PinkCity Mouth Fresheners
        </h2>
        <p className={`${isMobile ? "text-xs" : "text-xl"} max-w-4xl`}>
          Get in touch with <strong>PinkCity Mouth Freshener</strong>, your
          trusted source for premium mukhwas, paan, and traditional mouth
          fresheners in Jaipur. Wholesale and bulk orders welcome!
        </p>
      </div>
      <div
        className={`w-full flex justify-around items-center gap-10 tracking-wider font-semibold ${
          isMobile ? "py-20 px-4" : " p-20"
        }`}
      >
        <div className={` ${isMobile ? "w-full" : "w-2/5"}`}>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full transform -translate-x-[10%] translate-y-[10%] z-10">
              <ContactUsCard showAlert={showAlert} />
            </div>
            <div className="z-0">
              <div className="bg-white p-6 rounded-lg shadow-md aspect-square w-full"></div>
            </div>
          </div>
        </div>
        {!isMobile && (
          <div className="max-w-1/2 text-center">
            <h3 className="text-7xl mb-6">
              {'"'}Where
              <br />
              tradition
              <br />
              meets taste,
              <br />
              and quality
              <br />
              never fades{'"'}
            </h3>
            <p className="text-xl mt-8">
              <strong>PinkCity Mouth Freshener</strong> - Serving authentic
              Jaipur taste since 1982
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
