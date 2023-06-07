'use client'
import React, {useEffect, useState} from 'react'
import EntriesSendData from './EntriesSendData'
import LinkSendData from './LinkSendData'
import ProfilSendData from './ProfilData'
import ThemeData from './ThemeData'
import Navbar from './Navbar'
import { useStore } from '@/stores/zustand'
import FetchButton from '@/components/FetchButton'
import { useUser } from '@/stores/User'
import { useMobil } from '@/stores/Mobil'
import supabase from '@/lib/supabase-client'
import { useAuth } from '../../../stores/Auth'
import {redirect} from 'next/navigation'
import Settings from './Settings'


export default function FormUpdate() {    
    const {session} = useAuth()
    const {linktire} = useStore()

    async function deneme() {
        const { error } = await supabase.auth.signOut()
        console.log(error)
    }

    if(!session) {
        redirect('/')
    }

    useEffect(() => {
        useMobil.getState().supabaseEntries()
        useUser.getState().supabaseUsers()
        useAuth.getState().supabaseUsers()
    }, [])


    return (
        <section className='mx-[25px] h-fit w-[700px] relative flex flex-col items-center mr-[100px]'>
            <div>
                <button onClick={deneme}>CIK</button>
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