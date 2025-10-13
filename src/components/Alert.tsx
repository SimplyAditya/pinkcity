import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface AlertProps {
  message: string;
  variant: "success" | "error";
  onClose: () => void;
}

function Alert({ message, variant, onClose }: AlertProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const bgColor = variant === "success" ? "bg-green-600" : "bg-red-600";

  return (
    <div className="fixed bottom-10 right-10 w-96 z-50">
      <div
        className={`w-full h-fit flex flex-col justify-between items-center ${bgColor} overflow-hidden text-white rounded-xl shadow-lg`}
      >
        <div className="w-full p-4 flex justify-between items-center">
          <p>{message}</p>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="w-full h-1">
          <div className="bg-white h-full progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Alert;