'use client';

import Image from 'next/image';
import React from 'react';
import ProductSidebar from '../ProductSidebar';

interface ProductDetailsProps {
  params: {
    slug: string; // The dynamic parameter from the URL
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
  const { slug } = params; // Access slug directly from params

  return (
    <div className=' pt-16 px-6 bg-white'>
      <div className='w-[100%] lg:w-[80%] mx-auto'>
        <div className='max-w-[1500px] mt-4 grid grid-cols-1 md:grid-cols-5 gap-4'>
          <div className='col-span-4 pr-6 pb-6'>
            <Image
              src='/images/products/shopping.webp'
              className='object-cover  rounded-xl'
              alt='label'
              width={500}
              height={400}
            />
            <div className='grid grid-cols-1 md:grid-cols-5'>

              <div className='col-span-3 pr-6 px-6'>
              <div className='w-full overflow-hidden'>

                <h1 className='my-4 text-4xl'>اسم یکی از محصولات</h1>
                <span className='mb-6 block text-lg text-gray-600'>مشخصاتش</span>
                <span className='mb-6 block text-lg text-gray-600'>قیمتش <strong>1000 تومان</strong></span>

                <button
                  type="button"
                  onClick={() => window.location.href = '/products/dashboard'}
                  className="cursor-pointer top-4 left-4 bg-white px-4 py-2 rounded-md"
                >
                  { slug }
                </button>
              </div>
              <hr />

              <div className='py-6 flex items-center space-x-4'>
                <Image
                    src={'/images/avatar/Untitled.jpeg'}
                    className='rounded-full'
                    alt='label' 
                    width={50}
                    height={50}
                />
                <p><strong>سینا افشار</strong> مدیر فروشگاه</p>
              </div>

              <hr />
              <p className='my-6 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla aspernatur eum impedit, iste magni, natus enim, dignissimos ipsum minima excepturi dolores doloremque tempore qui. Debitis facilis praesentium quas rem.</p>
            </div>
            <div className='col-span-2'>
              <ProductSidebar />
            </div>
            </div>



          </div>
          <div className='col-span-1'>
            <ProductSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
