'use client'
import React from "react"
import clsx from 'clsx'
import Image  from 'next/image'
import {useUser} from '@/stores/User'

interface Situation {
    variant: 'header' | 'avatar',
    srcs: string
}


const Situation: React.FC<Situation> = ({
    variant,
    srcs
}) => {
    const {useUsers} = useUser()
    const users: any = useUsers ? useUsers : [];
    return (
        <Image
            src={'https://nmcceegbiexzqgkclyxx.supabase.co/storage/v1/object/public/avatars/users/' + `${users[0].avatar_url}`}
            alt=""
            width={100}
            height={100}
            className={clsx('rounded-full bg-white',
                variant === 'avatar' && 'bg-blue-500 w-[40px] h-[40px]',
                variant === 'header' && 'bg-yellow-500 w-[65px] h-[65px]',
            )}
        ></Image>
    )
}

export default Situation