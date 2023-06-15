'use client'
import React, {useState} from 'react'
import {useUser} from '@/stores/User'
import Input from '@/components/uı/Input'
import { useRouter } from 'next/navigation'
import supabase from '@/lib/supabase-client'
import UploadAvatar from '@/components/uı/UploadAvatar'
import {useFileStore} from '@/stores/SelectFile'
import { v4 as uuidv4 } from "uuid";
import clsx from 'clsx'

export default function ProfilSendData({className}: {className?: string | null}) {
    const {setUserName, setAvatarUrl, user_name} = useUser()
    const { 
        selectedFile,
        previewImage,
        isHovered,
        setSelectedFile,
        setPreviewImage,
        setIsHovered,
        currentUser
    } = useFileStore() as any

    const router = useRouter()
    const {user_id} = useUser()

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
                .eq('user_id', user_id)

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
            <div
                className='
                rounded-xl
                bg-[#222831]
                h-fit
                px-[25px]
                py-[20px]
                text-white
                '>
                    <div className={clsx('flex items-center justify-between', className)}>
                        <div className='flex items-center gap-[15px]'>
                            <UploadAvatar></UploadAvatar>
                            <Input type={'edit'} length={22} placeholder={userName} value={iusername} onChange={(e: any) => setInputUserName(e.target.value)}></Input>
                        </div>
                        <button onClick={handleSubmit}
                        className='bg-[#393E46] text-white font-medium px-[10px] py-[2px] rounded text-[15px] hover:bg-opacity-40 cursor-pointer outline-none'
                        >Update Profil</button>
                    </div>
            </div>
        </span>
    )
}
