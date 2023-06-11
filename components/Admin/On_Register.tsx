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

  const {user_name} = useUser()




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
      {users_id && !user_name &&
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
    </>
  )
}
