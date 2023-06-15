'use client'
import React from 'react'

interface themesI {
    onClick: React.MouseEventHandler<HTMLDivElement>;
    color_1?: string | null,
    color_2?: string | null,
    color_3?: string | null,
    color_4?: string | null,
    color_5?: string | null,
}

const Themes: React.FC<themesI> = ({ onClick, color_1, color_2, color_3, color_4, color_5 }: themesI) => {
    const style1 = color_1 ? { backgroundColor: color_1 } : {};
    const style2 = color_2 ? { backgroundColor: color_2 } : {};
    const style3 = color_3 ? { backgroundColor: color_3 } : {};
    const style4 = color_4 ? { backgroundColor: color_4 } : {};
    const style5 = color_5 ? { backgroundColor: color_5 } : {};

    return (
        <div
            onClick={onClick}
            className='
            flex
            items-center
            h-[35px]
            rounded
            w-fit
            z-20
            overflow-hidden
        '>
            <div className='w-[30px] h-full' style={style1}></div>
            <div className='w-[30px] h-full' style={style2}></div>
        </div>
    )
}

export default Themes