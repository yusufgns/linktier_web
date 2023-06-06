'use client'
import React from 'react'

interface themesI {
    onClick: React.MouseEventHandler<HTMLDivElement>;
    over_c?: string | null,
    completing_c?: string | null,
}

const Themes: React.FC<themesI> = ({onClick, over_c, completing_c}: themesI) => {
    const style1 = over_c ? { backgroundColor: over_c } : {};
    const style2 = completing_c ? { backgroundColor: completing_c } : {};

    return (
        <div
            onClick={onClick}
            className='
            flex
            items-center
            h-[80px]
            rounded-md
            w-fit
            z-20
            overflow-hidden
        '>
            <div className='w-[60px] h-full' style={style1}></div>
            <div className='w-[60px] bg-[#033e59] h-full' style={style2}></div>
        </div>
    )
}

export default Themes