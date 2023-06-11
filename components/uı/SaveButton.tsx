import React from "react"
import clsx from 'clsx'

interface ButtonsI {
    type: 'profil' | 'entries' | 'settings' | null,
    onClick: (e: any) => void
}


const Buttons: React.FC<ButtonsI> = ({
    type,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={clsx(`
            rounded-md
            text-[15px]
            text-white
            font-medium
            `,
                type === 'profil' && 'bg-[#393E46] py-[2px] px-[10px]',
                'outline-none cursor-pointer hover:bg-opacity-40',

                type === 'entries' && 'bg-[#393E46]  py-[2px] px-[10px]',
                'outline-none cursor-pointer hover:bg-opacity-40',

                type === 'settings' && 'bg-[#393E46] py-[2px] px-[10px]',
                'outline-none cursor-pointer hover:bg-opacity-40',
            )}
            disabled>
            {type === 'profil' && 'Save Profil'}
            {type === 'entries' && 'Save Entries'}
            {type === 'settings' && 'Save Settings'}

        </button>
    )
}

export default Buttons