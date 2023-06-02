import React from "react"
import clsx from 'clsx'

interface InputI {
    type: string | null
}


const Input: React.FC<InputI> = ({
    type
}) => {
    return (
        <input type="text" className={clsx(`
            h-[30px] w-[100px]
        `,
            type === 'completing' && 'bg-[rgb(57,109,63)]',
            type === 'overdue' && 'bg-[#9B6B70]',
            type === 'planned' && 'bg-[#7b4ea1]',

        )} />
    )
}

export default Input