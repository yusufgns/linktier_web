import React from "react"
import clsx from 'clsx'

interface Situation {
    type: string | null
}


const UserPayment: React.FC<Situation> = ({
    type
}) => {
    return (
        <div className={clsx(`
        font-medium
        my-auto
        text-[18px]
        px-[20px]
        rounded-md
        w-fit
        `,
            type === 'freeRole' && 'bg-[#7b4ea1]',
            type === 'proRole' && 'border-[#7b4ea1] border-2',
        )}>
            {type === 'freeRole' && 'Upgrade to Pro'}
            {type === 'proRole' && 'Pro'}
        </div>
    )
}

export default UserPayment