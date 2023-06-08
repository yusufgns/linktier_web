'use client'
import React, {useEffect} from 'react'
import EntriesSendData from './EntriesSendData'
import LinkSendData from './LinkSendData'
import ProfilSendData from './ProfilData'
import ThemeData from './ThemeData'
import Navbar from './Navbar'
import { useStore } from '@/stores/zustand'
import { useUser } from '@/stores/User'
import { useMobil } from '@/stores/Mobil'
import { useAuth } from '../../../stores/Auth'
import {redirect} from 'next/navigation'
import Settings from './Settings'


export default function FormUpdate() {
    const {session} = useAuth();
    const {linktire} = useStore();

    if(!session) {
        redirect('/')
    }

    useEffect(() => {
        useMobil.getState().supabaseEntries()
        useUser.getState().supabaseUsers()
    }, [])


    return (
        <section className='mx-[25px] h-fit w-[700px] relative flex flex-col items-center mr-[100px]'>
            <div>
                <Navbar />
                {linktire === 'profil' &&
                    <span>
                        <ProfilSendData />
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
            </div>
        </section>
    )
}