'use client'
import React, { useState } from 'react';
import Input from '@/components/uı/Input';
import TextArea from '@/components/uı/TextArea';
import Situation from '@/components/uı/Situations';
import { BsGlobe2 } from 'react-icons/bs';
import supabase from '@/lib/supabase-client';
import { useMobil } from '../../../stores/Mobil';
import {useRouter} from 'next/navigation'
import { useUser } from '@/stores/User';

export default function EntriesSendData() {
  const router = useRouter()
  const { EntriesData: EntryData } = useMobil();

  const {user_id, user_name} = useUser();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebSite] = useState('');
  const [type, setType] = useState('Empty');

  const currentDate: any = new Date();
  const date = currentDate.toISOString().split('T')[0];
  const time = currentDate.toTimeString().split(' ')[0];
  const userName: string | undefined = user_name;
  const uniqueId = `${date}_${time}_${userName}`;

  const entriesSendData = async (e: React.FormEvent) => {
    e.preventDefault();

    const newEntry = {
      id: uniqueId,
      title: title,
      description: description,
      website: website,
      type: type
    };

    const updatedData: any = [...EntryData[0].EntriesData, newEntry];

    const { data, error } = await supabase
      .from('user')
      .update({
        EntriesData: updatedData
      })
      .eq('user_id', user_id);

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      useMobil.getState().supabaseEntries();
    }

    router.replace('/admin')

    setDescription('');
    setTitle('');
    setType('');
    setWebSite('');
  };

  const handleSituationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  return (
    <span>
      <form
        onSubmit={entriesSendData}
        className='
            rounded-xl
            bg-[#222831]    
            h-fit
            px-[25px]
            py-[20px]
            mt-[20px]
            w-[660px]
            text-white
        '
      >
        <div className='flex items-center gap-[20px]'>
          <div className='w-full'>
            <Input
              type={'entires'}
              length={22}
              placeholder='Title'
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
            ></Input>
          </div>

          <Situation
            value1={'Over Due'}
            value2={'Completing'}
            value={type}
            onChange={handleSituationChange}
          ></Situation>
        </div>

        <div>
          <TextArea
            type={'des'}
            length={160}
            onChange={(e: any) => setDescription(e.target.value)}
            value={description}
          ></TextArea>
        </div>

        <div className='flex items-center mt-2 gap-3 ml-[5px] w-full pr-[4px]'>
          <div className='py-[5px] bottom-0 text-[20px]'>
            <BsGlobe2 />
          </div>

          <div className='w-full'>
            <Input
              length={80}
              placeholder='example.com'
              type={'website'}
              value={website}
              onChange={(e) => setWebSite(e.target.value)}
            ></Input>
          </div>
        </div>

        <div className='w-full relative h-[40px]'>
          <p className='right-0 absolute bottom-0 bg-[#393E46] text-white font-medium px-[10px] py-[2px] rounded-md text-[15px] hover:bg-opacity-40 cursor-pointer outline-none'>
            <button type='submit'>Save Entries</button>
          </p>
        </div>
      </form>
    </span>
  );
}
