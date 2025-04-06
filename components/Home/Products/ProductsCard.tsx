import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props ={
    id: string;
    imageurl: string;
    title: string;
    description: string;
    slug: string;
    price: string;
    offerprice: string;
  };

const ProductsCard = ({id, imageurl, title,description,slug, price,offerprice}: Props) => {
  return (
    <div key={id}>
        <Link  href='/products/${slug}' className="cursor-pointer">
            <div className='relative mx-auto overflow-hidden aspect-square rounded-xl'>
                  <Image 
                    fill
                    sizes='(max-width:768px) 768px,(max-width:1200px) 768px, 768px'
                    src={imageurl} 
                    alt={title} 
                    className='hover:scale-110 object-cover transition h-full w-full'
                  />
            </div>
            <div className='mt-2'>
              <p className='font-bold text-lg text-center'>{title}</p>
            </div>
            <div className='mt-2'>
              <p className='font-bold text-gray-700 dark:text-gray-300 text-sm text-center'><strong>{price} هزار تومان</strong></p>
              <p className='font-bold text-gray-700 dark:text-gray-300 text-sm text-center'><strong>{offerprice} هزار تومان</strong></p>
            </div>
            <div><span className='text-sm'>{description}</span></div>
        </Link>
    </div>
  )
}

export default ProductsCard
