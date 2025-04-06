'use client';

import ContactButton from '@/components/Accounts/CustomButton';
import Products from '@/components/Home/Products/Products';
import Image from 'next/image';
import React from 'react'
import Product_category from './Category/page';
import Product_tags from './Tags/page';
import ProductFilter from './ProductFilter';

interface AccountsPageProps {
  params: {
    slug: string; // The dynamic parameter from the URL
  };
}

const AccountsPage: React.FC<AccountsPageProps> = ({ params }) => {
  const { slug } = params; // Access slug directly from params

  return (
    <div className=' pt-16 px-6 bg-white'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

            <div className='col-span-1 md:col-span-3 pl-0 md:pl-6'>
                <Products />
            </div>
            <aside className='col-span-1 mb-4'>
                <div className='flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl'>
                    <ProductFilter />
                    <Product_category />
                    <Product_tags />
                </div>
            </aside>
        </div>
    </div>
      
  );
};

export default AccountsPage;
