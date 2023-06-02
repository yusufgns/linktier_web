'use client'

import {BsGlobe2, BsTwitter, BsYoutube, BsInstagram, BsDribbble, BsBehance, BsGithub, BsThreeDotsVertical} from 'react-icons/bs'
import SituationWatch from './uı/SituationWatch'
import FetchButton from '@/components/FetchButton'
import Avatars from './uı/Avatar'
import {useStore} from '../stores/zustand'
import Link from 'next/link'
import { useState } from 'react'

export default function Denemes() {
    const {entriesData: data, linkData, profilData, bg_color, comp_color, text_color} = useStore()

   const handleDetail = (e: any) => {
        console.log(e)
   }

    return (
        <section className='
                relative
                '
                >
                <div className='
                    custom-scrollbar
                    w-[400px] 
                    overflow-auto
                    h-[700px] 
                    px-[15px] 
                    py-[10px] 
                    flex 
                    flex-col 
                    rounded-3xl
                    border-2'
                    style={{background: `${bg_color}`}}
                >
                    <div className='
                        flex 
                        items-center 
                        gap-4 
                        justify-between'
                        style={{color: `${text_color}`}}
                    >
                        <div className='flex gap-4 items-center'>
                            {/* <Avatars variant='header' srcs=''></Avatars> */}
                            <div>
                                <h1 className='font-medium'>Yusuf Güneş</h1>
                                <p className='mt-1 opacity-70 font-medium text-[12px]'>@yusufgunes</p>
                            </div>
                        </div>
                    </div>

                    <div className='mb-2 break-words py-[15px] px-[5px]' style={{color: `${text_color}`}}>
                        <p>{profilData.bio}</p>

                        <div className='w-full flex items-center justify-center pt-[10px] gap-3'>
                            {linkData.website !== '' && <Link href={'https://www.' + linkData.website} target='_blank'><BsGlobe2/></Link>}
                            {linkData.twitter !== '' && <Link href={'https://www.' + linkData.twitter} target='_blank'><BsTwitter/></Link>}
                            {linkData.youtube !== '' && <Link href={'https://www.' + linkData.youtube} target='_blank'><BsYoutube/></Link>}
                            {linkData.instagram !== '' && <Link href={'https://www.' + linkData.instagram} target='_blank'><BsInstagram/></Link>}
                            {linkData.dribbble !== '' && <Link href={'https://www.' + linkData.dribbble} target='_blank'><BsDribbble/></Link>}
                            {linkData.behance !== '' && <Link href={'https://www.' + linkData.behance} target='_blank'><BsBehance/></Link>}
                            {linkData.github !== '' && <Link href={'https://www.' + linkData.github} target='_blank'><BsGithub/></Link>}
                        </div>
                    </div>

                    <div className='w-full h-[2px] rounded-full mb-[15px]' style={{background: `${comp_color}`}}></div>

                    {data.map((e: any) => (
                        <div key={e.id} className='rounded-lg mt-[5px] mb-[5px] relative' style={{background: `${comp_color}`}}>
                            <button className='absolute right-0 flex top-[40%] z-[99]'>
                                <BsThreeDotsVertical onClick={() => handleDetail(e.id)} />
                                <div className='absolute right-3 h-[50px] bg-gray-700 w-[90px] rounded-[3.5px] flex flex-col items-center px-[5px]'>
                                    <div onClick={() => console.log('aaaa')} className='border-b w-full'>Edit</div>
                                    <div onClick={() => console.log('bbbb')}>Delete</div>
                                </div>
                            </button>

                            {!e.website ? (
                                <div className=' rounded-lg mt-[5px] mb-[5px]'>
                                    <div className='h-fit px-[18px] py-[10px] w-full'>
                                    <div className='flex items-center justify-between break-words max-w-[332px]'>
                                        <p className='text-[14px] break-words' style={{color: `${text_color}`}}>{e.title}</p>
                                        <SituationWatch type={e.type}/>
                                    </div>
                                    <div className='mt-[5px] break-words text-[11px]' style={{color: `${text_color}`}}>
                                        {e.description}
                                    </div>
                                    </div>
                                </div>
                            ) : (
                                <Link key={e.id} href={'https://www.' + e.website} target='_blank' style={{background: `${comp_color}`}}>
                                    <div className='rounded-lg mt-[5px] mb-[5px]'>
                                        <div className='h-fit px-[18px] py-[10px] w-full'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-[14px]' style={{color: `${text_color}`}}>{e.title}</p>
                                            <SituationWatch type={e.type}/>
                                        </div>
                                        <div className='mt-[5px] break-words text-[11px]' style={{color: `${text_color}`}}>
                                            {e.description}
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                
                <div className='w-full items-center flex justify-center'>
                    <FetchButton />
                </div>
        </section>
    )
}