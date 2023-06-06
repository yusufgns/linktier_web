'use client'
import React from 'react'

interface themesI {
    onClick: React.MouseEventHandler<HTMLDivElement>;
    bg_c?: string | null,
}

const Themes: React.FC<themesI> = ({onClick, bg_c}: themesI) => {
    const style1 = bg_c ? { backgroundColor: bg_c } : {};

    return (
        <div
            onClick={onClick}
            className='
            flex 
            items-center 
            h-[30px]
            w-[42px]
            rounded
            z-20
            overflow-hidden
        '>
            <div className='w-[60px] h-full' style={style1}></div>
        </div>
    )
}

export default Themes