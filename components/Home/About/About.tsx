import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='pt-16 pb-16 '>
        <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
            {/* Image */}
            <div data-aos="zoom-in" data-aos-anchore-placement="top-center" className='order-2 xl:order-1'>
                <Image src="/images/individual-coaching.png" alt='about' width={400} height={400} className='rounded-lg w-full' />
            </div>
            {/* content */}
            <div className='order-1 xl:order-2'>
                <h1 className='dark:text-gray-300 text-gray-700 mb-4 font-semibold text-lg capitalize'>What we do</h1>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>Create your own AI Bussiness</h1>
                <p className='text-base dark:text-gray-400 text-gray-700 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos alias pariatur voluptatum ab nihil libero eveniet id, explicabo eaque sapiente ipsa eius quis quisquam, quasi praesentium culpa illo ullam.</p>
                <Button className='bg-rose-500 h-12 w-36 text-base uppercase' size={'lg'}>About Us</Button>
            </div>
        </div>
      
    </div>
  )
}

export default About
