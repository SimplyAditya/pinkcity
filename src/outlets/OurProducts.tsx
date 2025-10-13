import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import React from 'react'
import Supari from '../../public/multimedia/supari.svg'

const products = [
  {
    title: "Product 1",
    image: Supari,
  },
  {
    title: "Product 2",
    image: Supari,
  },
  {
    title: "Product 3",
    image: Supari,
  },
  {
    title: "Product 4",
    image: Supari,
  },
  {
    title: "Product 5",
    image: Supari,
  },
  {
    title: "Product 6",
    image: Supari,
  },
  {
    title: "Product 7",
    image: Supari,
  },
  {
    title: "Product 8",
    image: Supari,
  },
];

const OurProducts = () => {
  return (
    <div className='w-full p-10 flex flex-col justify-center items-center'>
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
