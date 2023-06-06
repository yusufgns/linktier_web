'use client'
import React from 'react'
import Link from 'next/link'
import {BsGlobe2, BsTwitter, BsYoutube, BsInstagram, BsDribbble, BsBehance, BsGithub} from 'react-icons/bs'
import { useUser } from '@/stores/User';
import Avatars from '../../uı/Avatar'
import { useAuth } from '@/stores/Auth';


export default function Profil() {
    const {useUsers, text_color, user_lastname, user_firstname, user_name, bio, linkData} = useUser()
    const users: any = useUsers ? useUsers : [];
    const bio_links: any = linkData ? linkData : {};
    
    const auth: any = useAuth.getState().session
    let url: any = auth?.session?.user?.user_metadata?.avatar_url

  return (
    <span>
        {users[0]?.user_lastname && users[0]?.user_firstname && users[0]?.user_name &&
        <div>
            <div 
            className='
            flex 
            items-center 
            gap-4 
            justify-between'
            style={{color: `${text_color}`}}
            >
            <div className='flex gap-4 items-center'>
            <Avatars variant='header' srcs={url}></Avatars>
                <div>
                <h1 className='font-medium'>{user_firstname} {user_lastname}</h1>
                <p className='mt-1 opacity-70 font-medium text-[12px]'>@{user_name}</p>
                </div>
            </div>
        </div>

        <div className='mb-2 break-words px-[5px]' style={{color: `${text_color}`}}>
            <p className='text-[16px] mt-[15px]'>{bio}</p>

            <div className='w-full flex items-center justify-center pt-[10px] pb-[5px] gap-3 text-[14px]'>
                {bio_links.website !== '' && <Link href={bio_links.website} target='_blank'><BsGlobe2/></Link>}
                {bio_links.twitter !== '' && <Link href={bio_links.twitter} target='_blank'><BsTwitter/></Link>}
                {bio_links.youtube !== '' && <Link href={bio_links.youtube} target='_blank'><BsYoutube/></Link>}
                {bio_links.instagram !== '' && <Link href={bio_links.instagram} target='_blank'><BsInstagram/></Link>}
                {bio_links.dribbble !== '' && <Link href={bio_links.dribbble} target='_blank'><BsDribbble/></Link>}
                {bio_links.behance !== '' && <Link href={bio_links.behance} target='_blank'><BsBehance/></Link>}
                {bio_links.github !== '' && <Link href={bio_links.github} target='_blank'><BsGithub/></Link>}
            </div>
        </div>

        <div className='w-full h-[2px] rounded-full mb-[15px]' style={{background: `${text_color}`}}></div>
        </div>
    }
    </span>
  )
}
