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
    <div className="w-screen p-20 bg-pinkcity-dark flex flex-col justify-center items-center text-white">
      {alert?.show && (
        <Alert
          message={alert.message}
          variant={alert.variant}
          onClose={() => setAlert(null)}
        />
      )}
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl font-extrabold tracking-wide">ENQUIRE MORE</h1>
        <h1 className="text-5xl font-extrabold tracking-wide">
          ABOUT OUR PRODUCT LINEUP
        </h1>
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
        <h1 className="text-7xl max-w-1/2">
          {'"'}Quote
          <br />
          or Personal
          <br />
          Message{'"'}
        </h1>
      </div>
    </div>
  );
};

export default ContactUs;
