'use client';

import { Navlinks } from '@/constant/constant'
import { MenuIcon, PhoneCallIcon, Search, ShoppingCart, User2Icon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaInstagram, FaTelegram } from 'react-icons/fa';
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from '../ui/ModeToggle';
import UserNavClient from './UserNavClient';

type Props = {
    openNav:() => void;
};

const Nav = ({openNav}:Props) => {

    const [navBg, setNavBg]=useState(false);
    const [marginTop, setMarginTop] =useState(false);
    const [textScroll, setTextScroll] =useState(false);
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(()=>{
        const handler = ()=> {
            if(window.scrollY>=90) setNavBg(true), setMarginTop(true), setTextScroll(true);
            if(window.scrollY<90) setNavBg(false), setMarginTop(false), setTextScroll(false);    
        };

        window.addEventListener('scroll', handler);

        return () => window.removeEventListener('scroll', handler);
    }, []);

    const bg_style = navBg?'bg-gray-700/95 shadow-md h-[8vh]':'';
    const margin_style = marginTop?'':'';
    const text_scroll = textScroll?'text-white':'';
  return (
    <div>
      <div className={`flex ${bg_style} ${margin_style} items-center justify-between fixed z-[100] w-[100%] h-[8vh] mx-auto transition-all duration-200`} 
        style={{
          background: "#333 url(/images/header-bg.png) repeat 0 0",
          position: "relative",
          minHeight: "44px",
          color: "#fff",
        }}
      >
        {/* Button and icons */}
        <div className='flex items-center mr-3 md:mr-16'>
          <div className='flex'>
            <div className='mx-2'>
              <ModeToggle />
            </div>      
            <Search className={`cursor-pointer w-9 h-9 pl-3 text-white`}/>
            <MenuIcon onClick={openNav} className={`cursor-pointer w-9 h-9 pl-3 text-white`}/>
          </div>
          <Separator orientation="vertical" className='py-3' />
          <UserNavClient />
          
        </div>
        <div className='items-center hidden'>
        {/* Navlink */}
          {Navlinks.map((link)=>{
              return ( 
              <Link key={link.id} href={link.url} className="relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[8vh] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                  <p className='px-5'>{link.label}</p>
              </Link>
              )
          })}
        </div>
        {/* LOGO */}
          <Link href={'/'} >
            <h1 className='text-3xl font-bold px-3 md:px-8 text-white bg-red-600 py-4'>RPI</h1>
          </Link>
        </div>
    </div>
  )
}

export default Nav
