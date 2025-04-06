import React from 'react'
import { Button } from '../../ui/button'
import Link from 'next/link'
import { CardMinHero } from '@/constant/cardminhero'
import Image from 'next/image';

type Props ={
  id:number,
  url:string,
  label: string,
  src_img:string,
  underline:string,
};

const CardHero = ({id, url , label,src_img,underline} :Props) => {
  return (
    <div key={id} >
        <Link href={url}>
          <div className="bg-white/90 dark:bg-gray-800/85 p-6 rounded-2xl shadow-xl flex flex-col text-center justify-center">
            <h3 className="text-lg font-semibold">{label}</h3>
            <p className="text-gray-600 dark:text-gray-400">{underline}</p>
            <Image src={src_img} width={300} height={300} alt='{label}' />
          </div>
        </Link>
    </div>
  )
}

export default CardHero
