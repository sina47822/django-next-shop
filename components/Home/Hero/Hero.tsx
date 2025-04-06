'use client';
import CardHero from '@/components/Home/Hero/CardHero';
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import { CardMinHero } from '@/constant/cardminhero';
import axios from 'axios';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { toast } from 'sonner';
import HeroCategory from './HeroCategory';

const Hero = () => {

    const [promt, setPromt] = useState('');
    const [image, setImage]= useState('');
    const [loading, setLoading]= useState(false);

    const [firstPart, setFirstPart] = useState("");
    const [thirdPart, setThirdPart] = useState("");
    const [cityCode, setCityCode] = useState("");

  return (
    <>

    <div
      className="relative w-full bg-cover bg-white dark:bg-gray-950 bg-center flex flex-col items-center justify-center"
    >
      {/* لایه تیره برای خوانایی بهتر */}
      <div
        className="h-[200px] pt-10 pb-10 mb-10 w-full "
        style={{
          background: "#333 url(/images/hero/b-annr_carparts__bg.jpg) no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-white text-5xl font-bold pr-10">شرکت رادین پدیده ایرانیان</h1>
        <p className="text-white text-xl pr-10 pt-4">فروش قطعات اصلی نیسان</p>
      </div>
      {/* دسته بندی */}
      <div className='max-w-[1500px] mx-auto flex flex-col items-center'>
        <HeroCategory />
      </div>
      {/* کارت‌ها */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-10">
        <CardHero id={1} url='#' label='نیسان قدیم' src_img='/images/hero/neisanabipng.png' underline='نیسان کاربراتی بنزینی H20' />
        <CardHero id={2} url='#' label='نیسان جونیور' src_img='/images/hero/neisanabipng.png' underline='نیسان انژکتوری بنزینی Z24' />
        <CardHero id={3} url='#' label='نیسان دیزل' src_img='/images/hero/neisanabipng.png' underline='نیسان کاربراتی دیزل ND28' />
      </div>
    </div>
    </>
  )
}

export default Hero
