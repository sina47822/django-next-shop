'use client';
import Modal from './Modal';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import useSignUpModal from '../../hooks/useSignUpModal';
import CustomButton from '../Accounts/CustomButton';
import apiService from '@/app/services/apiService';
import { handleLogin } from '../../lib/actions';


const SignUpModal = () => {
    //
    //Variables

    const router = useRouter();
    const signupModal = useSignUpModal();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    //
    // Submit functionality

    const submitSignup = async () => {
        const formData = {
            username: username,
            email: email,
            password1: password1,
            password2: password2,
        }

        const response = await apiService.post('/api/auth/register/', JSON.stringify(formData))

        if (response.access) {
            handleLogin(response.user.pk.access, response.access, response.refresh);

            signupModal.close();

            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error
            })

            setErrors(tmpErrors);

        }
    }
    const content = (
        <>
            <h2 className='mb-6 text-2xl'>به رادین پدیده ایرانیان خوش آمدید برای ورود کلیک کنید</h2>
            <form 
                action={submitSignup} 
                className='space-y-4'
            >
                <input onChange={(e) => setUsername(e.target.value)} placeholder='نام کاربری' type="name" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl' />

                <input onChange={(e) => setEmail(e.target.value)} placeholder='آدرس ایمیل' type="email" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl' />

                <input onChange={(e) => setPassword1(e.target.value)} placeholder='پسورد' type="password" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl' />
                
                <input onChange={(e) => setPassword2(e.target.value)} placeholder='تکرار پسورد' type="password" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl' />

                {errors.map((error, index) => {
                    return (
                        <div
                            key={`error_${index}`}
                            className='p-5 bg-gray-700 text-white rounded-xl opacity-80'
                        
                        >
                            شما با ارور
                            {' '}
                            {error}
                            {' '}
                            مواجه شده اید
                        </div>
                    )
                })}

                <CustomButton label={'ورود'} onClick={submitSignup}/>
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
