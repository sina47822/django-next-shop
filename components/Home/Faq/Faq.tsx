import Image from 'next/image'
import React from 'react'
import FaqCard from './FaqCard'

const Faq = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        {/* image */}
        <div data-aos="zoom-out" data-aos-anchore-placement="top-center">
            <Image src="/images/individual-coaching.png" alt='faq' width={400} height={400} />
        </div>
        {/* Faq Card */}
        <div>
            <FaqCard />
        </div>
      </div>
    </div>
  )
}

export default Faq
