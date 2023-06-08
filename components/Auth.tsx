'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { BsDiscord, BsGoogle } from 'react-icons/bs'
import supabase from '@/lib/supabase-client';

export default function Auth() {
  const router = useRouter()

  async function deneme() {
    const { data } = await supabase.auth.getSession()
    if(data.session !== null) {
      router.push('/admin')
    }
  }

  function getUrl() {
    let url =
    "http://localhost:3000/auth";
    url = url.includes("http") ? url : `https://${url}`;
    return url;
  }

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: getUrl()
      },
    });
  }
  return (
    <div className="flex items-center flex-col gap-[10px] justify-center w-[250px]">
        <button
        onClick={signInWithGoogle}
          className="
            bg-white 
            w-[250px] 
            px-[25px] 
            py-[9px] 
            flex 
            items-center 
            gap-4 
            font-medium 
            rounded-sm"
        >
          <BsGoogle></BsGoogle>
          Login Google
        </button>

        <div className="bg-white w-[250px] px-[25px] py-[9px] flex items-center gap-4 font-medium rounded-sm">
          <BsDiscord></BsDiscord>
          Login Discord
        </div>

        <div className="relative h-[2px] flex justify-center">
          <div className="h-[2px] w-[250px] my-[16px] bg-white"></div>
          <div className="absolute text-white top-[3px] bg-[#191F26] w-fit px-[5px]">or</div>
        </div>

        <div className="flex flex-col mt-[25px]">
          <label className="mb-[2px] font-medium text-white">Email</label>
          <input type="email" className="w-[250px] h-[35px] rounded-sm px-[7px] py-[2px]" placeholder="email@example.com" />
        </div>

        <div>
          <div className="bg-slate-800 text-white font-medium py-[3px] px-[15px] rounded mt-[10px]">Email Login</div>
        </div>
    </div>
  )
}
