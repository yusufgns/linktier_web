'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { BsGlobe2, BsTwitter, BsYoutube, BsInstagram, BsDribbble, BsBehance, BsGithub } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'
import { useUser } from '@/stores/User';
import Avatars from '../../uı/Avatar'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { FaTimesCircle } from 'react-icons/fa'
import { useStore } from '@/stores/zustand'

import Notif, { ErrorNotify, SuccesNotify } from '@/components/Notification'


export default function Profil() {
    const [profil, setProfil] = useState(false)
    const [menu, setMenu] = useState('')

    const { useUsers, text_color, user_lastname, user_firstname, user_name, bio, linkData, avatar_url } = useUser()
    const users: any = useUsers ? useUsers : [];
    const bio_links: any = linkData ? linkData : {};

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const profil_link = useRef<any>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (profil_link.current && !profil_link.current.contains(event.target as Node)) {
            setProfil(false);
        }
    };

    const openProfilLink = (e: string) => {
        setProfil(!profil)
        navigator.clipboard.writeText('https://mdiary.vercel.app/' + e)
            .then(() => {
                SuccesNotify('linktier.vercel.app/' + e)
            })
            .catch((error) => {
                ErrorNotify('Failed to copy link')
            });
    }

    const stores = (e: any) => {
        useStore.setState({
            mobil_menu: e
        });
    }

    return (
        <>
            <Notif></Notif>
            <span>
                {users[0]?.user_firstname && users[0]?.user_name &&
                    <div>
                        <div
                            className='
                            flex 
                            items-center 
                            gap-4 
                            justify-between'
                            style={{ color: `${text_color}` }}>

                            <div className='flex gap-4 items-center'>
                                {users[0]?.avatar_url && <Avatars variant='header'></Avatars>}
                                {users[0]?.avatar_url === null && <div className='w-[50px] h-[50px] bg-yellow-500 rounded-full'></div>}
                                <div>
                                    <h1 className='font-medium'>{user_firstname} {user_lastname}</h1>
                                    <p className='mt-1 opacity-70 font-medium text-[12px]'>@{user_name}</p>
                                </div>
                            </div>


                            <span className='flex items-center gap-3'>
                                <button className='py-[2px] border px-[10px] rounded-3xl text-[12px]' onClick={() => stores('settings')}>Profil Setting</button>
                                <div className='p-[5px] text-[22px] rounded-lg bg-yellow-600' ref={profil_link} onClick={() => openProfilLink(`${user_name}`)}>
                                    <AiOutlineLink></AiOutlineLink>
                                </div>
                            </span>
                        </div>

                        <div className='mb-2 break-words px-[5px]' style={{ color: `${text_color}` }}>
                            <p className='text-[16px] mt-[15px]'>{bio}</p>

                            <div className='w-full flex items-center justify-center pt-[10px] pb-[5px] gap-3 text-[14px]'>
                                {bio_links.website !== '' && <Link href={bio_links.website} target='_blank'><BsGlobe2 /></Link>}
                                {bio_links.twitter !== '' && <Link href={bio_links.twitter} target='_blank'><BsTwitter /></Link>}
                                {bio_links.youtube !== '' && <Link href={bio_links.youtube} target='_blank'><BsYoutube /></Link>}
                                {bio_links.instagram !== '' && <Link href={bio_links.instagram} target='_blank'><BsInstagram /></Link>}
                                {bio_links.dribbble !== '' && <Link href={bio_links.dribbble} target='_blank'><BsDribbble /></Link>}
                                {bio_links.behance !== '' && <Link href={bio_links.behance} target='_blank'><BsBehance /></Link>}
                                {bio_links.github !== '' && <Link href={bio_links.github} target='_blank'><BsGithub /></Link>}
                            </div>
                        </div>

                        <div className='w-full h-[2px] rounded-full mb-[15px]' style={{ background: `${text_color}` }}></div>
                    </div>
                }
            </span>
        </>
    )
}
