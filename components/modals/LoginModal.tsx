'use client';

import React, { useState } from 'react'
import Modal from './Modal';
import useLoginModal from '../hooks/useLoginModal';
import CustomButton from '../Accounts/CustomButton';


const LoginModal = () => {

    const loginModal = useLoginModal()

    const content = (
        <>
            <h2 className='mb-6 text-2xl'>به رادین پدیده ایرانیان خوش آمدید برای ورود کلیک کنید</h2>
            <form action="" className='space-y-4'>
                <input placeholder='آدرس ایمیل' type="email" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl' />

                <input placeholder='پسورد' type="password" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl' />
            
                <div className='p-5 bg-gray-700 text-white rounded-xl opacity-80'>
                    شما با ارور مواجه شده اید
                </div>
                <CustomButton label={'ورود'} onClick={()=>console.log('loged in')}/>
            </form>
        </>
    )
  return (
    <>
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="ورود"
            content = {content}

        />
    </>
  )
}

export default LoginModal
