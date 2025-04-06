import { Check } from 'lucide-react'
import React from 'react'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
        {/* content */}
        <div>
            <h1 className='uppercase  mb-6 font-bold'>Flexible and affortable</h1>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mb-6 '>Our Pricing Plans</h1>
            <p className=' font-medium text-opacity-70 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat pariatur quia recusandae voluptates commodi quas magni doloremque libero, porro nostrum tempora atque placeat, velit saepe tenetur impedit, praesentium voluptatum.</p>
            <div className='mt-8'>
                {/* Check */}
                <div className='flex items-center space-x-3 mb-3'>
                    <Check className='w-6 h-6 text-green-500' />
                    <p className='text-lg font-semibold text-opacity-70'>High Quality</p>
                </div>
                {/* Check */}
                <div className='flex items-center space-x-3 mb-3'>
                    <Check className='w-6 h-6 text-green-500' />
                    <p className='text-lg font-semibold text-opacity-70'>24/7 Customer Support</p>
                </div>
                {/* Check */}
                <div className='flex items-center space-x-3 mb-3'>
                    <Check className='w-6 h-6 text-green-500' />
                    <p className='text-lg font-semibold text-opacity-70'>Affortable Rates</p>
                </div>
            </div>
        </div>
        {/* Price card content */}
        <div className='grid grid-cols 1 md:grid-cols-2 gap-4'>
            <div data-aos="fade-right" data-aos-anchore-placement="top-center">
                <PriceCard price="4" user="1" type="Silver Pack" />
            </div>
            <div data-aos="fade-right" data-aos-anchore-placement="top-center" data-aos-delay="100">
                <PriceCard price="8" user="3" type="Golden Pack" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Price
