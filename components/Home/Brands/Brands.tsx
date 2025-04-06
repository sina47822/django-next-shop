import React from 'react'
import Link from 'next/link';
import { BrandsName } from '@/constant/BrandsName';

type Props ={
    id: number;
    url: string;
    label: string;
  };
  const Brands = ({ id, url, label }: Props) => {
    return (
      <div className='pt-16 pb-16 dark:bg-gray-900 bg-white'>
        <div className='flex flex-col w-[80%] mx-auto'>
            <h1 className='pb-8 text-2xl'>brands</h1>
          <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4'>
            {BrandsName.map((link) => (
              <div  key={link.id}>
              <li className='flex'>
                <Link href={link.url}>
                  <div className='bg-gray-100 dark:bg-gray-800 py-2 px-5 rounded-lg border border-gray-200 hover:bg-gray-300 dark:hover:bg-red-400 transition-all duration-300 delay-50 ease-in-out hover:shadow-sm hover:translate-y-[-2px]'>
                    <span>{link.label}</span>
                  </div>
                </Link>
              </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default Brands
