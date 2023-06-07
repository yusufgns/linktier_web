'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '../stores/Auth';
import { useUser } from '@/stores/User';

function Cart() {
  const auth: any = useAuth.getState().session;
  const {avatar_url} = useUser()

  let url: any = 'https://nmcceegbiexzqgkclyxx.supabase.co/storage/v1/object/public/avatars/' + `${avatar_url}`
  //let fullname = user.length > 0 ? `${user[0]?.user_firstname} ${user[0]?.user_lastname}` : '';

  useEffect(() => {
    useAuth.getState().supabaseUsers();
  }, []);

  return (
    <div 
      className='
        absolute 
        right-6 
        bottom-6 
        w-fit 
        px-[10px] 
        py-[10px] 
        bg-[#222831]
        text-white
        font-medium
        rounded-full
      '
    >
      <div>
        <Image src={url} alt='' width={50} height={50} className='rounded-full w-[50px] h-[50px]' />
      </div>
    </div>
  );
}

export default Cart;
