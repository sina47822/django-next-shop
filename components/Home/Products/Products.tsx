'use client';


import { ProductsItem } from '@/constant/Productsitem'
import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard';
import Link from 'next/link';
import { Item } from '@radix-ui/themes/components/checkbox-group.primitive';

export type Props ={
  id: string;
  image_url: string;
  title: string;
  description: string;
  slug:string;
  price:string;
  offer_price:string;
};

const Products = () => {
  const [products, setProducts] = useState<Props[]>([]);
  const getProperties = async () => {
    const url = 'http://localhost:8000/api/products/'

    await fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then((json) => {
        console.log('json',json)

        setProducts(json.data)
      })
      .catch((error) => {
        console.log('error', error);
      })
  };

  useEffect (() => {
    getProperties();
  }, []);
  return (
    <div className='max-w-[1500px] mx-auto px-6 bg-white dark:bg-gray-950 pt-16 pb-16'>
        <div className='w-[80%] mx-auto mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          { products.map((product) => {
            return (
              <ProductsCard id={product.id} key={product.id} slug={product.slug} title={product.title} imageurl={product.image_url} description={product.description} price={product.price} offerprice={product.offer_price} />
            )
          })}
        </div>
    </div>
  )
}

export default Products
