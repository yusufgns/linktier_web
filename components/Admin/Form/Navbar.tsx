'use client'
import React, {useState} from 'react'
import { useStore } from '@/stores/zustand'

export default function Navbar() {
    const store = useStore()
    
    const linktierData = (e: any) => {
        useStore.setState({
            linktire: e
        });
    }

    return (
        <span>
            <div 
                className='
                    rounded-xl
                    bg-[#222831]
                    h-fit
                    px-[25px]
                    py-[20px]
                    w-[660px]
                    text-white
                    mb-[20px]
                    flex
                    items-center
                    gap-[25px]
                    justify-center
                    mt-[100px]
                '
            >
                <div onClick={() => linktierData('entries')}>Entries</div>
                <div onClick={() => linktierData('theme')}>Theme</div>
                <div onClick={() => linktierData('profil')}>Profil</div>
            </div>
        </span>
  )
}
