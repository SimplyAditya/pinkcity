import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import Arrow from "../../public/images/arrow.svg";

interface ProductModalProps {
  product: {
    title: string;
    image: StaticImageData;
    description: string;
  };
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center"
      onClick={onClose}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
    >
      <div
        className="w-4/5 md:w-3/5 max-h-3/4 rounded-[25px] p-1 bg-gradient-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white p-8 rounded-[22px] flex flex-col md:flex-row items-start justify-around">
          <div className="w-1/2 h-full flex flex-col justify-center items-center gap-8 mb-16">
            <div className="w-4/5">
              <h2
                className="text-4xl md:text-5xl mb-4 text-black"
                style={{ fontFamily: "var(--font-bentham)" }}
              >
                {product.title}
              </h2>
            </div>
            <div className="w-full flex items-stretch">
              <div className="w-2/12 flex justify-center items-center">
                <div className="w-3/5 hover:bg-[#D9D9D9] py-4 pr-1 opacity-70 rounded-md flex items-center justify-center">
                  <Image src={Arrow} alt="Arrow" />
                </div>
              </div>
              <div className="relative w-8/12 aspect-square">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="rounded-full object-cover"
                  fill
                />
              </div>
              <div className="w-2/12 flex justify-center items-center">
                <div className="w-3/5 hover:bg-[#D9D9D9] py-4 pr-1 opacity-70 rounded-md flex items-center justify-center">
                  <Image
                    src={Arrow}
                    alt="Arrow"
                    className="transform scale-x-[-1]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 md:pl-8 flex flex-col justify-start p-12">
            <p className="text-gray-700 mb-6">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
