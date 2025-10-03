import React from 'react'
import DesignBanner from "../../public/images/design_banner.svg";
import HawMahal from "../../public/images/hawaMahal.svg";
import Image from 'next/image';

const AboutBanner = () => {
  return (
    <div className='w-full bg-pinkcity-dark p-0 flex flex-col gap-0 mt-12'>
        <Image src={DesignBanner} alt="Design Banner" layout="responsive" />
        <div className='-mt-52 xl:-mt-68 z-5'>
        <Image src={HawMahal} alt="Hawa Mahal" layout="responsive" />
        </div>
    </div>
  )
}


export default AboutBanner