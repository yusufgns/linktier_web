import React from 'react'
import SituationBlock from '../uı/SituationBloc'
import Link from 'next/link'

interface IEntries {
    comp_color: string | null,
    e: string | null,
    text_color: string | null,
    completing_color: string | null,
    overdue_color: string | null,

}

export default function Entries({e}: IEntries) {
    return (
        <>
            {e !== null &&
                {!e?.website && (
                    <div className=' rounded-lg mt-[5px] mb-[5px] flex items-center relative' style={{ background: `${comp_color}` }}>
                        <div className='h-fit px-[18px] py-[10px] w-full'>
                            <div className='flex items-center justify-between break-words max-w-[332px]'>
                                <p className='text-[14px] break-words' style={{ color: `${text_color}` }}>{e.title}</p>
                                <SituationBlock type={e.type} completing_color={completing_color} overdue_color={overdue_color} />
                            </div>
                            <div className='mt-[5px] break-words text-[11px]' style={{ color: `${text_color}` }}>
                                {e.description}
                            </div>
                        </div>
                    </div>
                )}
    
                {e?.website && (
                    <div className='relative flex items-center w-full'>
                        <Link href={'https://www.' + e.website} target='_blank' className='w-full'>
                            <div className='
                            hover:opacity-50
                            rounded-lg 
                            mt-[5px] 
                            mb-[5px]
                            flex
                            items-center'
                                style={{ background: `${comp_color}` }}>
                                <div className='h-fit px-[18px] py-[10px] w-full'>
                                    <div className='flex items-center justify-between break-words max-w-[332px]'>
                                        <p className='text-[14px] break-words' style={{ color: `${text_color}` }}>
                                            {e.title}
                                        </p>
                                        <SituationBlock type={e.type} completing_color={completing_color} overdue_color={overdue_color} />
                                    </div>
                                    <div className='mt-[5px] break-words text-[11px]' style={{ color: `${text_color}` }}>
                                        {e.description}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}
            }
        </>
    )
}
