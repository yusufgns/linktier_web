import React from "react"
import clsx from 'clsx'

interface InputI {
    type: string | null
}


const Input: React.FC<InputI> = ({
    type
}) => {
    return (
        <button className={clsx(`
            rounded-md py-[2px] px-[20px] text-[14px]
        `,
            type === 'edit' && 'bg-gray-700',
            type === 'change' && 'bg-gray-700'

        )}>
            {type === 'edit' && 'Edit'}
            {type === 'change' && 'Change'}

        </button>
    )
}

export default Input