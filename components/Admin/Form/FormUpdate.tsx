'use client'
import React, {useState} from 'react'
import EntriesSendData from './EntriesSendData'
import LinkSendData from './LinkSendData'
import ProfilSendData from './ProfilSendData'
import ThemeData from './ThemeData'
import Navbar from './Navbar'
import { useStore } from '@/stores/zustand'


export default function FormUpdate() {
    const {linktire} = useStore()
    


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
                
            </div>
        </section>
    )
}