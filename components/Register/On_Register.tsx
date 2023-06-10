'use client'
import React, { useEffect, useState } from 'react';
import Input from '@/components/uı/Input';
import UploadAvatar from '../uı/UploadAvatar';
import { useFileStore } from '@/stores/SelectFile';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import supabase from '@/lib/supabase-client';
import { specialCharacterParse } from '../../helpres/parser';

export default function On_Register({ session }: any) {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [user_id, setUserID] = useState<any>(null);
  const { selectedFile } = useFileStore() as any;

  useEffect(() => {
    setUserID(session.session.user.id);
  }, []);

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
        user_id: user_id,
      },
    ]);

    if (error) {
      console.log('ERROR', error);
    } else {
      console.log(data);
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

  return (
    <form className="text-white gap-[20px] w-[300px]">
      <main className="flex items-center gap-[15px] mb-[15px]">
        <UploadAvatar />
        <Input
          type="form"
          length={22}
          placeholder="@linktier"
          value={userName}
          onChange={(e: any) => setUsernameVal(e.target.value)}
        />
      </main>

      <section>
        <div>
          <Input
            type="form"
            length={50}
            placeholder="First Name"
            value={firstName}
            onChange={(e: any) => setFirstName(e.target.value)}
          />
        </div>

        <div className="mt-[15px]">
          <Input
            type="edit"
            length={50}
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
  );
}
