import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props ={
    id: number;
    url: string;
    label: string;
    iconurl:string;
    underline:string;
  };

const ProductsCard = ({id, url, label, iconurl,underline}: Props) => {
  return (
    <div key={id}>
        <Link  href={url} className="cursor-pointer">
            <div className='relative mx-auto overflow-hidden aspect-square rounded-xl'>
                  <Image 
                    fill
                    sizes='(max-width:768px) 768px,(max-width:1200px) 768px, 768px'
                    src={iconurl} 
                    alt={label} 
                    className='hover:scale-110 object-cover transition h-full w-full'
                  />
            </div>
            <div className='mt-2'>
              <p className='font-bold text-lg text-center'>{label}</p>
            </div>
            <div className='mt-2'>
              <p className='font-bold text-gray-700 dark:text-gray-300 text-sm text-center'><strong>300 هزار تومان</strong></p>
            </div>
            <div><span className='text-sm'>{underline}</span></div>
        </Link>
    </div>
  )
}

export default ProductsCard
