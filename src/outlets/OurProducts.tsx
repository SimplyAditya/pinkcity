import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import React from 'react'
import DryDate from "../../public/multimedia/products/dry_date_main.png";
import Mukhwas from "../../public/multimedia/products/mukhwas_main.png";
import PaanMukhwas from "../../public/multimedia/products/paan_mukhwas_main.png";
import PlainSupari from "../../public/multimedia/products/plain_supari_main.png";
import SweetSupari from "../../public/multimedia/products/sweet_supari_main.png";
import SaufProduct from "../../public/multimedia/products/sauf_product_main.png";
import SilverProduct from "../../public/multimedia/products/silver_product_main.png";
import ConfectioneryProduct from "../../public/multimedia/products/confectionery_product_main.png";

const products = [
  {
    title: "Dry Date Products",
    image: DryDate,
  },
  {
    title: "Mukhwas",
    image: Mukhwas,
  },
  {
    title: "Paan Mukhwas",
    image: PaanMukhwas,
  },
  {
    title: "Plain Supari",
    image: PlainSupari,
  },
  {
    title: "Sweet Supari",
    image: SweetSupari,
  },
  {
    title: "Saunf Products",
    image: SaufProduct,
  },
  {
    title: "Silver Coated Products",
    image: SilverProduct,
  },
  {
    title: "Confectionery Products",
    image: ConfectioneryProduct,
  },
];

const OurProducts = () => {
  return (
    <div id="products" className='w-full p-10 flex flex-col justify-center items-center'>
        <SectionHeading title="Our Products" />
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 py-20'>
          {products.map((product, index) => (
            <ProductCard key={index} title={product.title} image={product.image} />
          ))}
        </div>
    </div>
  )
}

export default OurProducts
