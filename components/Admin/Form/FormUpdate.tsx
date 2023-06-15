'use client'
import React, { useEffect } from 'react'
import EntriesSendData from './EntriesSendData'
import LinkSendData from './LinkSendData'
import ProfilSendData from './ProfilData'
import ThemeData from './ThemeData'
import Navbar from './Navbar'
import { useStore } from '@/stores/zustand'
import { useUser } from '@/stores/User'
import Settings from './Settings'
import Edit from './Edit'


export default function FormUpdate() {
    const { linktire } = useStore();
    const { useUsers } = useUser()
    const users: any = useUsers ? useUsers : []

    useEffect(() => {
        useUser.getState().supabaseUsers()
    }, [])


    return (
        <>
            {users[0]?.user_name &&
                <section className='mx-[25px] h-fit w-[700px] relative flex flex-col items-center mr-[100px]'>
                    <div>
                        <Navbar />
                        {linktire === 'profil' &&
                            <span>
                                <ProfilSendData className={'py-[20px]'} />
                                <LinkSendData />
                            </span>
                        }

                        {linktire === 'entries' &&
                            <EntriesSendData />
                        }

                        {linktire === 'theme' &&
                            <ThemeData />
                        }

                        {linktire === 'settings' &&
                            <Settings />
                        }

                        {linktire === 'edit' &&
                            <Edit />
                        }
                    </div>
                </section>
            }
        </>
    )
}