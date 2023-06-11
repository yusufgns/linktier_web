'use client'
import React, { useEffect, useState } from 'react';
import Input from '@/components/uı/Input';
import UploadAvatar from '../uı/UploadAvatar';
import { useFileStore } from '@/stores/SelectFile';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { specialCharacterParse } from '../../helpres/parser';
import supabase from '@/lib/supabase-client';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useAuth } from '../../stores/Auth';
import { FiLogOut } from 'react-icons/fi'
import { useUser } from '@/stores/User';

export default function On_Register({ session }: any) {
  const [supabases] = useState(() => createBrowserSupabaseClient())
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { selectedFile } = useFileStore() as any;
  const users_id = session ? session.session.user.id : ''


  const { user_name } = useUser()
  const router = useRouter();
  const fileuid = uuidv4();

  const handleSendData = async (e: any) => {
    e.preventDefault();

    const { data, error } = await supabase.from('user').insert([
      {
        user_name: userName,
        user_lastname: lastName,
        user_firstname: firstName,
        avatar_url: selectedFile?.path,
        theme: {
          bg_color: '#171717',
          comp_color: '#121212',
          text_color: '#fff',
          overdue_color: '#9B6B70',
          situation_color: '#fff',
          completing_color: 'rgb(57,109,63)',
        },
        bio_links: {
          github: '',
          behance: '',
          twitter: '',
          website: '',
          youtube: '',
          dribbble: '',
          instagram: '',
        },
        user_id: users_id,
      },
    ]);

    if (error) {
      console.log('ERROR', error);
    } else {
      console.log(data);
      router.push('/')
    }

    if (selectedFile) {
      const { data: fileData, error: fileError } = await supabase.storage
        .from('avatars')
        .upload(`public/${fileuid}${selectedFile?.name}`, selectedFile, {
          cacheControl: '3600',
          upsert: false,
        });
    }
  };

  function setUsernameVal(username: any) {
    const user = specialCharacterParse(username);
    if (!user.success) {
      return;
    }
    setUserName(username.replace(/[^a-zA-Z0-9 ]/, "").trim());
  }

  async function goBack() {
    const { error } = await supabases.auth.signOut()
    useAuth.getState().supabaseUserOut();

    return router.push('/auth')
  }

  return (
    <>
      { !user_name &&
        <div className="text-white gap-[20px] w-[300px] relative">
          <button className='text-[20px] absolute bg-[#393E46] p-2 rounded-lg right-0 top-[-38px]' onClick={goBack}>
            <FiLogOut></FiLogOut>
          </button>
          <main className="flex items-center gap-[15px] mb-[15px]">
            <UploadAvatar />
          </main>
          <form className="text-white gap-[20px] w-[300px] relative">

            <section>
              <div>
                <label className='flex items-center gap-1 text-[14px]'>User Name<p className='text-red-500'>*</p></label>
                <Input
                  type="form"
                  length={22}
                  placeholder="@linktier"
                  value={userName}
                  onChange={(e: any) => setUsernameVal(e.target.value)}
                />
              </div>

              <div className='my-[15px]'>
                <label className='flex items-center gap-1 text-[14px]'>First Name<p className='text-red-500'>*</p></label>
                <Input
                  type="form"
                  length={22}
                  placeholder="First Name"

                  value={firstName}
                  onChange={(e: any) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <label className='flex items-center gap-1 text-[14px]'>Last Name</label>
                <Input
                  type="form2"
                  length={22}
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e: any) => setLastName(e.target.value)}
                />
              </div>
            </section>

            <div className="w-full text-end mt-[15px]">
              <button className="bg-[#393E46] w-fit px-[25px] py-[5px] rounded" onClick={handleSendData}>
                Save
              </button>
            </div>
          </form>
        </div>
      }

      {!users_id &&
        <div className='h-screen m-auto absolute flex items-center'>
          <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
          </svg>
        </div>
      }
    </>
  )
}
