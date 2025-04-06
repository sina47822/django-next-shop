import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'
import { ProductsCat } from '@/constant/ProductsCat'
import Link from 'next/link';
import Image from 'next/image';

type Props ={
  id: number;
  url: string;
  label: string;
};

// Utility function to chunk an array into smaller arrays of a specific size
const chunkArray = (array: any[], size: number) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  );
};

const Footer = ({id,url,label}: Props) => {
    // Flatten all links from categories
    const allLinks = ProductsCat.flatMap(category => category.label);

    // Split links into groups of 5 for each column
    const columns = chunkArray(allLinks, 5);

  return (
    <div className='pt-16 pb-16 bg-[#01286d]'>
      <div className='w-[80%] mx-auto items-start grid grid-cols-5'>
        {/* 1st part */}
        <div className='space-y-5 col-span-3'>
            <h1 className='text-lg font-bold text-yellow-300'>دسته بندی محصولات</h1>
        </div>
        {/* part 2 */}
        <div className='col-span-1 space-y-5'>
          <h1 className='text-lg font-bold text-yellow-300'>پیوندها</h1>
          <p className='text-gray-200 font-medium cursor-pointer text-sm hover:text-blue-700'>
            <Link href={'#'}>
              اخبار و مقالات 
            </Link>
          </p>
          <p className='text-gray-200 font-medium cursor-pointer text-sm hover:text-blue-700'>
            <Link href={'#'}>
              قوانین و مقررات
            </Link>
          </p>
          <p className='text-gray-200 font-medium cursor-pointer text-sm hover:text-blue-700'>
            <Link href={'#'}>
              درباره آر پی آی  
            </Link>
          </p>
          <p className='text-gray-200 font-medium cursor-pointer text-sm hover:text-blue-700'>
            <Link href={'#'}>
              تماس با ما              
            </Link>
          </p>
          <p className='text-gray-200 font-medium cursor-pointer text-sm hover:text-blue-700'>
            <Link href={'#'}>
              فرصت‌های شغلی   
            </Link>
          </p>
        </div>
        {/* part 3 */}
        <div className='col-span-1 space-y-5 flex flex-col'>
          <h1 className='text-white text-center p-3 py-5 bg-red-600 rounded-xl text-bold text-2xl'>RPI</h1>
          <div className='flex gap-2'>
            <div className='p-1 bg-white rounded-xl'>
              <img src="/images/footer/enamad.svg" alt="enamad" width={30}/>
            </div>
            <div className='p-1 bg-white rounded-xl items-center flex justify-center'>
              <img src="/images/footer/hampad.svg" alt="hampad" width={30}/>
            </div>
            <div className='p-1 bg-white rounded-xl items-center flex justify-center'>
              <img src="/images/footer/mojavez-faaliat.svg" alt="mojavez" width={30} />
            </div>
            <div className='p-1 bg-white rounded-xl items-center flex justify-center'>
              <img src="/images/footer/samandehi.svg" alt="samandehi" width={30} />
            </div>
            <div className='p-1 bg-white rounded-xl items-center flex justify-center'>
              <img src="/images/footer/samandehi.svg" alt="samandehi" width={30} />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div className='mt-8 w-[90%] mx-auto border-t p-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
        <p className='text-center md:text-left text-white'> تمامی حقوق مادی و معنوی این سایت برای سایت ای پی آی محفوظ و مربوط به این شرکت است.</p>
        <div className='flex items-center gap-4 mt-4 md:mt-0'>
            <span className='text-white'>شبکه های اجتماعی :‌ </span>
            <span  className='text-white'><FaFacebook /></span>
            <span  className='text-white'><FaTwitter /></span>
            <span  className='text-white'><FaDribbble /></span>

        </div>
      </div>
    </div>
  )
}

export default Footer
