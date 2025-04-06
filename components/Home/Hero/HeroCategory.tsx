import React from 'react'
import HeroCategoryItem from './HeroCategoryItem'
import { ProductsCat } from '@/constant/ProductsCat';

const HeroCategory = () => {
  return (
    <div className='pt-4 pb-16 flex space-x-6 justify-center bg-white dark:bg-gray-950'>
      {ProductsCat.map((cat) => {
        return (
          <HeroCategoryItem key={cat.id} id={cat.id} url={cat.url} label={cat.label} iconurl={cat.iconurl} underline={cat.underline} />
        )
      })}
    </div>
  )
}

export default HeroCategory
