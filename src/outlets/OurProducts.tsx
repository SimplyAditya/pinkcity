import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import React from 'react'
import Supari from '../../public/multimedia/banarasi_paan.png'

const products = [
  {
    title: "Dry Date Products",
    image: Supari,
  },
  {
    title: "Mukhwas",
    image: Supari,
  },
  {
    title: "Paan Mukhwas",
    image: Supari,
  },
  {
    title: "Plain Supari",
    image: Supari,
  },
  {
    title: "Sweet Supari",
    image: Supari,
  },
  {
    title: "Saunf Products",
    image: Supari,
  },
  {
    title: "Silver Coated Products",
    image: Supari,
  },
  {
    title: "Confectionery Products",
    image: Supari,
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
