import React from "react"
import clsx from 'clsx'
import Image  from 'next/image'

interface Situation {
    variant: 'header' | 'avatar',
    srcs: string
}


const Situation: React.FC<Situation> = ({
    variant,
    srcs
}) => {
    return (
        <Image
            src={srcs}
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