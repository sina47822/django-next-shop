'use client';

import React, { useState } from 'react'
import Modal from './Modal';
import CustomButton from '../Accounts/CustomButton';
import useSignUpModal from '../hooks/useSignUpModal copy';


const SignUpModal = () => {

    const signupModal = useSignUpModal()

    const content = (
        <>
            <h2 className='mb-6 text-2xl'>به رادین پدیده ایرانیان خوش آمدید برای ورود کلیک کنید</h2>
            <form action="" className='space-y-4'>
                <input placeholder='آدرس ایمیل' type="email" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl' />

                <input placeholder='پسورد' type="password" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl' />
                
                <input placeholder='تکرار پسورد' type="password" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl' />

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
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="عضویت"
            content = {content}

        />
    </>
  )
}

export default SignUpModal
