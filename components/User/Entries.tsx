import React from 'react'
import SituationBlock from '../uı/SituationBloc'
import Link from 'next/link'

export default function Entries({ entries, theme }: any) {
    return (
        <>
            <div className='w-[550px]'>
                {entries.map((entry: any) => (
                    <div key={entry.id}>
                        {!entry?.website && (
                            <div className=' rounded-lg mt-[5px] mb-[5px] flex items-center relative' style={{ background: `${theme.comp_color}` }}>
                                <div className='h-fit px-[18px] py-[10px] w-full'>
                                    <div className='flex items-center justify-between break-words'>
                                        <p className='text-[14px] break-words' style={{ color: `${theme.text_color}` }}>{entry.title}</p>
                                        <SituationBlock type={entry.type} completing_color={theme.completing_color} overdue_color={theme.overdue_color} />
                                    </div>
                                    <div className='mt-[5px] break-words text-[11px]' style={{ color: `${theme.text_color}` }}>
                                        {entry.description}
                                    </div>
                                </div>
                            </div>
                        )}

                        {entry?.website && (
                            <div className=' rounded-lg hover:opacity-50 mt-[5px] mb-[5px] flex items-center relative' style={{ background: `${theme.comp_color}` }}>
                                <Link href={'https://www.' + entry.website} target='_blank' className='w-full'>
                                    <div className='
                                rounded-lg 
                                mt-[5px] 
                                mb-[5px]
                                flex
                                items-center'
                                        style={{ background: `${theme.comp_color}` }}>
                                        <div className='h-fit px-[18px] py-[10px] w-full'>
                                            <div className='flex items-center justify-between break-words'>
                                                <p className='text-[14px] break-words' style={{ color: `${theme.text_color}` }}>
                                                    {entry.title}
                                                </p>
                                                <SituationBlock type={entry.type} completing_color={theme.completing_color} overdue_color={theme.overdue_color} />
                                            </div>
                                            <div className='mt-[5px] break-words text-[11px]' style={{ color: `${theme.text_color}` }}>
                                                {entry.description}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}
