"use client";
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import React, { useState } from 'react'
import DryDate from "../../public/multimedia/products/dry_date_main.png";
import Mukhwas from "../../public/multimedia/products/mukhwas_main.png";
import PaanMukhwas from "../../public/multimedia/products/paan_mukhwas_main.png";
import PlainSupari from "../../public/multimedia/products/plain_supari_main.png";
import SweetSupari from "../../public/multimedia/products/sweet_supari_main.png";
import SaufProduct from "../../public/multimedia/products/sauf_product_main.png";
import SilverProduct from "../../public/multimedia/products/silver_product_main.png";
import ConfectioneryProduct from "../../public/multimedia/products/confectionery_product_main.png";
import ProductModal from '@/components/ProductModal';
import { StaticImageData } from 'next/image';

interface Product {
  title: string;
  image: StaticImageData;
  description: string;
}

const products: Product[] = [
  {
    title: "Dry Date Products",
    image: DryDate,
    description: "Delicious dry date products."
  },
  {
    title: "Mukhwas",
    image: Mukhwas,
    description: "A refreshing mouth freshener."
  },
  {
    title: "Paan Mukhwas",
    image: PaanMukhwas,
    description: "A delightful paan flavored mouth freshener."
  },
  {
    title: "Plain Supari",
    image: PlainSupari,
    description: "A simple and classic supari."
  },
  {
    title: "Sweet Supari",
    image: SweetSupari,
    description: "A sweet and savory supari."
  },
  {
    title: "Saunf Products",
    image: SaufProduct,
    description: "Aromatic and flavorful saunf products."
  },
  {
    title: "Silver Coated Products",
    image: SilverProduct,
    description: "Exquisite silver coated products."
  },
  {
    title: "Confectionery Products",
    image: ConfectioneryProduct,
    description: "A variety of confectionery products."
  },
];

const OurProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div id="products" className='w-full p-10 flex flex-col justify-center items-center'>
        <SectionHeading title="Our Premium Mukhwas Products" />
        <div className="text-center max-w-4xl my-8">
          <h2 className="text-2xl font-semibold mb-4">Explore PinkCity Mouth Freshener Product Range</h2>
          <p className="text-lg text-gray-700">
            Discover our extensive collection of <strong>premium mouth fresheners</strong> and <strong>traditional mukhwas</strong> products. From classic <strong>paan mukhwas</strong> to exotic saunf blends, each product is crafted with authentic ingredients and hygienically packed to ensure the finest quality. As Jaipur{"\""}s leading <strong>mouth freshener manufacturer</strong>, we offer wholesale and retail options for all our products.
          </p>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 py-20'>
          {products.map((product, index) => (
            <div key={index} onClick={() => openModal(product)}>
              <ProductCard title={product.title} image={product.image} />
            </div>
          ))}
        </div>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={closeModal} />
        )}
    </div>
  )
}

export default OurProducts
