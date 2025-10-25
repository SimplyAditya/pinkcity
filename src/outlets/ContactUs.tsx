"use client"
import Alert from "@/components/Alert";
import ContactUsCard from "@/components/ContactUsCard";
import React, { useState } from "react";

const ContactUs = () => {
  const [alert, setAlert] = useState<{
    show: boolean;
    message: string;
    variant: "success" | "error";
  } | null>(null);

  const showAlert = (message: string, variant: "success" | "error") => {
    setAlert({ show: true, message, variant });
  };

  return (
    <div id="contact" className="w-screen p-20 bg-pinkcity-dark flex flex-col justify-center items-center text-white">
      {alert?.show && (
        <Alert
          message={alert.message}
          variant={alert.variant}
          onClose={() => setAlert(null)}
        />
      )}
      <div className="flex flex-col gap-6 justify-center items-center max-w-5xl text-center">
        <h2 className="text-6xl font-extrabold tracking-wide">Contact PinkCity Mouth Freshener</h2>
        <h3 className="text-3xl font-semibold tracking-wide">
          Jaipur{"'"}s Leading Mukhwas Manufacturer
        </h3>
        <p className="text-xl max-w-4xl">
          Get in touch with <strong>PinkCity Mouth Freshener</strong>, your trusted source for premium mukhwas, paan, and traditional mouth fresheners in Jaipur. Wholesale and bulk orders welcome!
        </p>
      </div>
      <div className="w-full flex justify-around items-center gap-10 p-20 tracking-wider font-semibold">
        <div className="w-2/5">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full transform -translate-x-[10%] translate-y-[10%] z-10">
              <ContactUsCard showAlert={showAlert} />
            </div>
            <div className="z-0">
              <div className="bg-white p-6 rounded-lg shadow-md aspect-square"></div>
            </div>
          </div>
        </div>
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
            <strong>PinkCity Mouth Freshener</strong> - Serving authentic Jaipur taste since 1982
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
