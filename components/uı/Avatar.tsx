'use client'
import React from "react"
import clsx from 'clsx'
import Image  from 'next/image'
import {useUser} from '@/stores/User'

interface Situation {
    variant: 'header' | 'avatar'
}


const Situation: React.FC<Situation> = ({
    variant
}) => {
    const {useUsers, avatar_url} = useUser()
    const users: any = useUsers ? useUsers : [];

    return (
        <Image
            src={'https://nmcceegbiexzqgkclyxx.supabase.co/storage/v1/object/public/avatars/' + `${avatar_url}`}
            alt=""
            width={50}
            height={50}
            className={clsx('rounded-full bg-white',
                variant === 'avatar' && 'bg-blue-500 w-[40px] h-[40px]',
                variant === 'header' && 'bg-yellow-500 w-[50] h-[50px]',
            )}
        ></Image>
    )
}

export default Situation