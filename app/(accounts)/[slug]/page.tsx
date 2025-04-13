'use client';

import CustomButton from '@/components/Accounts/CustomButton';
import Products from '@/components/Home/Products/Products';
import Image from 'next/image';
import React from 'react'
import { Toaster, useSonner } from 'sonner';

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
            <aside className='col-span-1 mb-4'>
                <div className='flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl'>
                    <Image
                        src={'/images/avatar/Untitled.jpeg'}
                        alt='avatar imaged'
                        width={100}
                        height={100}
                        className='rounded-full'
                    />
                    <h1 className='mt-6 text-2xl'>سینا افشار</h1>
                    <CustomButton label='تماس با سینا' onClick={() => console.log('09120038055')}/>
                </div>
            </aside>
            <div className='col-span-1 md:col-span-3 pl-0 md:pl-6'>
                <Products />
            </div>
        </div>
    </div>
      
  );
};

export default AccountsPage;
