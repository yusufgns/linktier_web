'use client'
import React from "react"
import clsx from 'clsx'
import Image from 'next/image'
import { useUser } from '@/stores/User'

interface Situation {
    variant: 'header' | 'avatar',
    urls?: string | null
}


const Situation: React.FC<Situation> = ({
    variant,
    urls
}) => {
    const { useUsers, avatar_url } = useUser()
    const users: any = useUsers ? useUsers : [];

    return (
    <>
         {variant == 'header' &&
        <Image
            src={'https://nmcceegbiexzqgkclyxx.supabase.co/storage/v1/object/public/avatars/' + `${avatar_url}`}
            alt=""
            width={50}
            height={50}
            className={clsx('rounded-full bg-white',
                variant === 'header' && 'bg-yellow-500 w-[50] h-[50px]',
            )}
        ></Image>
        } 
        
        {variant == 'avatar' &&
            <Image
                src={'https://nmcceegbiexzqgkclyxx.supabase.co/storage/v1/object/public/avatars/' + `${urls}`}
                alt=""
                width={65}
                height={65}
                className={clsx('rounded-full bg-white',
                variant === 'avatar' && 'bg-blue-500 w-[65px] h-[65px]',
                )}
            ></Image>
        }
    </>
    )
}

export default Situation