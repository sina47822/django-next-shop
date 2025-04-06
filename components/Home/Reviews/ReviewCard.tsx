import { QuoteIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props={
    image:string,
    name:string,
    role:string,
}
const ReviewCard = ({image,name,role}:Props) => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <QuoteIcon className='w-10 h-10 text-yellow-300' />
      <p className='text-center mt-4 text-base md:text-lg lg:text-xl font-semibold text-opacity-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi eius iste architecto eligendi accusantium dolores blanditiis ad vitae magni fugiat reprehenderit eum temporibus id fugit maxime, corporis velit corrupti.</p>
      <div className='mt-8'>
        <h1 className='text-base md:text-2xl font-bold text-center'>{name}</h1>
        <p className='text-sm md:text-lg font-bold text-center'>{role}</p>
        <Image src={image} alt={name} width={80} height={80} className='mt-6 rounded-full mx-auto' />
      </div>
    </div>
  )
}

export default ReviewCard
