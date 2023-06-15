'use client'
import React, { useEffect, useState } from 'react';
import Input from '@/components/uı/Input';
import TextArea from '@/components/uı/TextArea';
import Situation from '@/components/uı/Situations';
import { BsGlobe2 } from 'react-icons/bs';
import supabase from '@/lib/supabase-client';
import { useRouter } from 'next/navigation'
import { useUser } from '@/stores/User';
import { useStore } from '@/stores/zustand';

import { useEdit } from '@/stores/Edit'

export default function EntriesSendData() {
    const router = useRouter()
    const { EditData, setEditData } = useEdit()
    const { user_id, EntriesData: EntryData } = useUser();

    const [title, setTitle] = useState<string | null>();
    const [description, setDescription] = useState<string | null>();
    const [website, setWebSite] = useState<string | null>();
    const [type, setType] = useState('');
    const [uid, setUid] = useState('')

    useEffect(() => {
        setTitle(EditData.title)
        setDescription(EditData.description)
        setWebSite(EditData.website)
        setType(EditData.type)
        setUid(EditData.id)
    }, [EditData])

    const entriesSendData = async (e: React.FormEvent) => {
        e.preventDefault();

        const newEntry = {
            id: uid,
            title: title,
            description: description,
            website: website,
            type: type
        };

        const updatedEntries = EntryData.map((entry: any) =>
            entry.id === uid ? newEntry : entry
        );

        const { data, error } = await supabase
            .from('user')
            .update({
                EntriesData: updatedEntries
            })
            .eq('user_id', user_id);

        if (error) {
            console.log(error);
        } else {
            console.log(data);
            useUser.getState().supabaseUsers();
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

    const editClose = () => {
        console.log('deneme')
        setEditData({
            id: null,
            title: null,
            description: null,
            type: null,
            website: null
        })
        useStore.setState({
            linktire: 'entries'
        });
    }

    return (
        <span>
            {title !== null &&
                <>
                    <form
                        onSubmit={entriesSendData}
                        className='
                        rounded-xl
                        bg-[#222831]    
                        w-[660px]
                        h-fit
                        px-[25px]
                        py-[20px]
                        mt-[20px]
                        text-white'>

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
                                <button type='submit'>Save Edit</button>
                            </p>
                        </div>
                    </form>

                    <div className='relative h-[40px] w-[660px]'>
                        <p className='right-0 w-fit absolute bg-[#222831] text-white font-medium px-[10px] py-[2px] mt-[20px] rounded-md text-[15px] hover:bg-opacity-40 cursor-pointer outline-none'>
                            <button onClick={editClose}>Close Edit</button>
                        </p>
                    </div>
                </>
            }
        </span>
    );
}
