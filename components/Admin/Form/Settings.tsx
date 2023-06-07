'use client'
import React, {useState} from 'react'
import {useUser} from '@/stores/User'
import Input from '@/components/uı/Input'
import { useRouter } from 'next/navigation'
import supabase from '@/lib/supabase-client'
import UploadAvatar from '@/components/uı/UploadAvatar'
import {useFileStore} from '@/stores/SelectFile'
import { v4 as uuidv4 } from "uuid";

export default function ProfilSendData() {
    const {useUsers, setLastName, setFirstName, setUserName, setBio, user_firstname, user_lastname, bio, avatar_url, setAvatarUrl, user_name} = useUser()
    const {selectedFile, previewImage} = useFileStore() as any

    const router = useRouter()

    let userName: any = user_name
    const [iusername, setInputUserName] = useState(user_name)
    
    const fileuid = uuidv4()
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setUserName(iusername)

        if (selectedFile) {
            const { data: fileData, error: fileError } = await supabase.storage
            .from('avatars')
            .upload(`public/${fileuid}${selectedFile?.name}`, selectedFile, {
            cacheControl: '3600',
            upsert: false,
            });
            
            
            if (fileError) {
                console.error('File Update Failed', fileError);
            } else {
                setAvatarUrl(fileData?.path);

                const { data: userFileData, error: userFileError } = await supabase
                .from('user')
                .update({
                    avatar_url: fileData?.path,
                    user_name: iusername,
                })
                .eq('user_id', '12108e77-baa6-44dc-8d6c-f998e4b98973')

                if(userFileError) {
                    console.error('Image Update Failed', userFileError)
                } else {
                    console.log('Image Update Successful')
                    setAvatarUrl(fileData?.path)
                }
            }

        }

        router.refresh()
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
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[15px]'>
                            <UploadAvatar></UploadAvatar>
                            <Input type={'edit'} length={50} placeholder={userName} value={iusername} onChange={(e: any) => setInputUserName(e.target.value)}></Input>
                        </div>
                        <button onClick={handleSubmit}
                        className='bg-[#393E46] text-white font-medium px-[10px] py-[2px] rounded text-[15px] hover:bg-opacity-40 cursor-pointer outline-none'
                        >Update Profil</button>
                    </div>
            </form>
        </span>
    )
}
