import { ProductsItem } from '@/constant/Productsitem'
import React from 'react'
import ProductsCard from './ProductsCard';
import Link from 'next/link';
import { Item } from '@radix-ui/themes/components/checkbox-group.primitive';


const Products = () => {
  return (
    <div className='max-w-[1500px] mx-auto px-6 bg-white dark:bg-gray-950 pt-16 pb-16'>
        <div className='w-[80%] mx-auto mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          { ProductsItem.map((item) => {
            return (
              <ProductsCard id={item.id} key={item.id} url={item.url} label={item.label} iconurl={item.iconurl} underline={item.underline} />
            )
          })}
        </div>
    </div>
  )
}

export default Products
