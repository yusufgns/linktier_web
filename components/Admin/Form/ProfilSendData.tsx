'use client'
import React, {useState} from 'react'
import TextArea from '@/components/uı/TextArea'
import {useStore} from '@/stores/zustand'
import Input from '@/components/uı/Input'

export default function ProfilSendData() {
    const {profilData} = useStore()

    const [name, setName] = useState(profilData.fullname)
    const [avatar, setAvatar] = useState('')
    const [bio, setBio] = useState(profilData.bio)

    const profilSendData = (e: any) => {
        e.preventDefault();
        
        useStore.setState({
            profilData: {
                bio: bio,
                fullname: name
            },
        });
    }

    return (
        <span>
            <form onSubmit={profilSendData} 
                className='
                rounded-xl
                bg-[#222831]
                h-fit
                px-[25px]
                py-[20px]
                w-[660px]
                text-white
                '>
                    <div className='flex items-center gap-[20px]'>
                        {/* <UploadAvatar></UploadAvatar> */}
                        <Input type={'edit'} length={50} placeholder='Full Name' value={name} onChange={(e: any) => setName(e.target.value)}></Input>
                    </div>

                    <div>
                        <TextArea type={'bio'} length={160} onChange={(e: any) => setBio(e.target.value)} value={bio}></TextArea>
                    </div>

                    <div className='w-full relative h-[40px]'>
                        <p className='right-0 absolute bottom-0 bg-[#393E46] text-white font-medium px-[10px] py-[2px] rounded-md text-[15px] hover:bg-opacity-40 cursor-pointer outline-none'>
                            <button onClick={profilSendData}>Save Profil</button>
                        </p>
                    </div>
            </form>
        </span>
    )
}
