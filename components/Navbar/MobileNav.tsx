import { Navlinks } from '@/constant/constant'
import { XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
    showNav:boolean;
    closeNav:() => void;
};

const MobileNav = ({closeNav, showNav}:Props) => {

    const navOpen = showNav?'translate-y-0':'translate-y-[-200%]'; 

  return (
    <div>
      {/* navlinks */}
      <div className={`${navOpen} bg-gray-100 dark:bg-gray-900 fixed justify-center flex flex-col h-screen transform transition-all duration-1000 w-full space-y-6 z-[1050] top-0`}>
        {Navlinks.map((link)=>{
            return <Link key={link.id} href={link.url}>
                <p className='w-fit text-xl mr-12 border-b-[1.5px] pb-1 dark:border-white border-gray-300 sm:text-[30px]'>{link.label}</p>
            </Link>
            })}
            {/* Close icon */}
            <XIcon onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6 cursor-pointer' />
      </div>
    </div>
  )
}

export default MobileNav
