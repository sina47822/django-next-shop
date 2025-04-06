'use client';
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import RecentImage from './RecentImage/RecentImage'
import About from './About/About'
import Price from './Price/Price'
import Reviews from './Reviews/Reviews'
import Faq from './Faq/Faq'
import Products from './Products/Products';
import Brands from './Brands/Brands';

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Products />
      <Brands id={0} url={''} label={''} />

    </div>
  )
}

export default HomePage
