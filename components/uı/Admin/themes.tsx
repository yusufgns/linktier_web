'use client'
import React from 'react'

interface themesI {
    onClick: React.MouseEventHandler<HTMLDivElement>;
    bg_c?: string | null,
    cp_c?: string | null,
}

const Themes: React.FC<themesI> = ({ onClick, bg_c, cp_c }: themesI) => {
    const style1 = bg_c ? { backgroundColor: bg_c } : {};
    const style2 = cp_c ? { backgroundColor: cp_c } : {};

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