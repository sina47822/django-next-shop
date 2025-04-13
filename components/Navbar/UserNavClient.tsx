'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { User2Icon } from "lucide-react";
import useLoginModal from "@/hooks/useLoginModal";
import useSignUpModal from "@/hooks/useSignUpModal";
import LogoutButton from "../LogoutButton";
import { useRouter } from "next/navigation";
import fetchUser from "@/hooks/fetchUser";

const UserNavClient = () => {
  const loginModal = useLoginModal();
  const signupModal = useSignUpModal();

  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    fetchUser(setUserId);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
  
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      <User2Icon onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer w-9 h-9 pr-3 text-white transition-all duration-200"/>
      
      {isOpen && (
        <div 
            className='flex flex-col cursor-pointer bg-white text-black w-[220px] absolute top-[60px] border border-gray-800 rounded-xl shadow-md'
            ref={menuRef}
        >
          {!userId ? (
            <>
              <p 
                onClick={() => {
                  setIsOpen(false);
                  loginModal.open();
                }}
                className='cursor-pointer text-xl hover:bg-gray-100 p-4 rounded-xl transition'
              >
                ورود
              </p>
              <p
                className='cursor-pointer text-xl hover:bg-gray-100 p-4 rounded-xl transition'
                onClick={() => {
                  setIsOpen(false);
                  signupModal.open();
                }}
              >
                عضویت
              </p>
            </>
          ) : (
            <>
              <p 
                    className='text-xl p-4 hover:bg-gray-100'
                    onClick={() => {
                        setIsOpen(false);
                        router.push('/dashboard');
                      }}
                >
                    داشبورد

              </p>
              <LogoutButton onLogout={() => setIsOpen(false)} />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UserNavClient;
