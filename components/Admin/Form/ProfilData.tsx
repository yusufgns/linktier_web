'use client'
import React, {useState} from 'react'
import TextArea from '@/components/uı/TextArea'
import {useUser} from '@/stores/User'
import Input from '@/components/uı/Input'
import {useFileStore} from '@/stores/SelectFile'

export default function ProfilSendData() {
    const {useUsers, setLastName, setFirstName, setUserName, setBio, user_firstname, user_lastname, bio, avatar_url, setAvatarUrl} = useUser()
    const {selectedFile, previewImage} = useFileStore()

    const users: any = useUsers ? useUsers : [];
    const [ifirstname, setInputFirstName] = useState(user_firstname)
    const [ilastname, setInputLastName] = useState(user_lastname)
    const [iavatar, setInputAvatar] = useState(avatar_url)
    const [ibio, setInputBio] = useState(bio)
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setFirstName(ifirstname);
        setLastName(ilastname);
        setBio(ibio);
        setAvatarUrl(iavatar)
    };
    return (
        <span>
            <form
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
                        <Input type={'edit'} length={50} placeholder='First Name' value={ifirstname} onChange={(e: any) => setInputFirstName(e.target.value)}></Input>
                        <Input type={'edit'} length={50} placeholder='Last Name' value={ilastname} onChange={(e: any) => setInputLastName(e.target.value)}></Input>
                    </div>

                    <div>
                        <TextArea type={'bio'} length={160} onChange={(e: any) => setInputBio(e.target.value)} value={ibio}></TextArea>
                    </div>

                    <div className='w-full relative h-[40px]'>
                        <p className='right-0 absolute bottom-0 bg-[#393E46] text-white font-medium px-[10px] py-[2px] rounded-md text-[15px] hover:bg-opacity-40 cursor-pointer outline-none'>
                            <button onClick={handleSubmit}>Preview Profil</button>
                        </p>
                    </div>
            </form>
        </span>
    )
}
