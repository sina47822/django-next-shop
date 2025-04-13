'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Modal from './Modal';
import useLoginModal from '../../hooks/useLoginModal';
import CustomButton from '../Accounts/CustomButton';
import LogoutButton from '../LogoutButton'
import { handleLogin } from '../../lib/actions';
import apiService from '@/app/services/apiService';
import fetchUser from '@/hooks/fetchUser';


const LoginModal = ({ setUserId }: { setUserId: (id: string | null) => void }) => {
        //
    //Variables

    const router = useRouter();
    const loginModal = useLoginModal();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    const submitLogin = async () => {
        const formData = {
            username: username,
            email: email,
            password: password,
        }
        const response = await apiService.post('/api/auth/login/', JSON.stringify(formData))

        const user_pk = response.user.pk
        console.log('user_pk = ',user_pk)

        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refresh);

            loginModal.close();

            if (user_pk) { 
                setUserId(user_pk);  // اینجا باید userId رو از طریق setUserId بروزرسانی کنید
                fetchUser(setUserId); // فچ کردن یوزر
            }

            router.push('/');
        
        } else {
            setErrors(response.non_field_errors);

        }
    }
    const content = (
        <>
            <h2 className='mb-6 text-2xl'>به رادین پدیده ایرانیان خوش آمدید برای ورود کلیک کنید</h2>
            <form 
                action="submitLogin" 
                className='space-y-4'
            >
                <input onChange={(e) => setEmail(e.target.value)} placeholder='آدرس ایمیل' type="email" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl' />

                <input onChange={(e) => setPassword(e.target.value)} placeholder='پسورد' type="password" className='w-full h-[54px] px-4 border border-gray-300 rounded-xl' />
            
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
                <CustomButton 
                    label={'ورود'} 
                    onClick={submitLogin}
                />
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
