
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import React from 'react'

type Props ={
    price:string,
    user:string,
    type:string,
};

const PriceCard = ({price, user , type} :Props) => {
  return (
    <div className='bg-black p-8 rounded-lg text-center'>
      <p className='mt-12 mb-2 text-3xl font-semibold'>{type}</p>
      <p className=''>Great for rivate individuals</p>
      <Separator className='opacity-20 my-8' />
      <div className='font-semibold text-2xl'>
        <span className='text-5xl'>${price}</span> /mo
      </div>
      <Separator className='opacity-20 my-8' />
        <div className='mt-6 space-y-3 text-opacity-50'>
            <p>{user} User</p>
            <p>Unlimited Projects</p>
            <p>Download Prototypes</p>
        </div>
        <div className='mt-6'>
            <Button variant={"ghost"}  size={"lg"}>Get Now</Button>
        </div>
    </div>
  );
};

export default PriceCard
