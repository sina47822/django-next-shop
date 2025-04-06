import { ProductsCat } from '@/constant/ProductsCat'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type Props ={
  id: number;
  url: string;
  label: string;
  iconurl:string;
  underline:string;
};

const HeroCategoryItem = ({id, url, label, iconurl,underline}: Props) => {

  return (
    <div key={id} className='space-y-2 cursor-pointer flex flex-col items-center'>
      <Link href={url}>
      <div className='pb-4 border-b-2 border-white dark:border-gray-950 opacity-60 hover:border-gray-200 hover:opacity-100'>
      <img src={iconurl} alt={label} width='30px' height='auto' />
          <span className='text-xs'>{label}</span>
      </div>
      </Link>

    </div>
  )
}

export default HeroCategoryItem
