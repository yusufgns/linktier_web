import React from 'react'
import {UserType} from '../../types/user'
import {BsGlobe2, BsTwitter, BsYoutube, BsInstagram, BsDribbble, BsBehance, BsGithub} from 'react-icons/bs'
import Link from 'next/link'
import Avatars from '../uı/Avatar'

export default function Profil({userData}: any) {
    const themes = userData ? userData.theme : '';
    const bio_links = userData ? userData.bio_links : '';
    const avatar_url = userData ? userData.avatar_url : '';
    const user_name = userData ? userData.user_name : '';
    const user_lastname = userData ? userData.user_lastname : '';
    const user_firstname = userData ? userData.user_firstname : '';
    const bio = userData ? userData.bio : '';
    

    return (
        <>
            <section className='h-fit w-[650px] py-[15px]' style={{color: `${themes.text_color}`}}>
                <div>
                    <div
                        className='
                        flex 
                        items-center 
                        gap-4 
                        justify-between'
                    >
                        <div className='flex gap-4 items-center'>
                            {avatar_url && <Avatars variant='avatar' urls={avatar_url}></Avatars>}
                            {avatar_url === null && <div className='w-[65px] h-[65px] bg-yellow-500 rounded-full'></div>}
                            <div>
                                <h1 className='font-medium'>{user_firstname}  {user_lastname}</h1>
                                <p className='mt-1 opacity-70 font-medium text-[12px]'>@{user_name}</p>
                            </div>
                        </div>
                    </div>

                    <div className='mb-2 break-words px-[5px]'>
                        <p className='text-[16px] mt-[15px]'>{bio}</p>

                        <div className='w-full flex items-center justify-center pt-[10px] pb-[5px] gap-3 text-[17px]'>
                            {bio_links.website !== '' && <Link href={bio_links.website} target='_blank'><BsGlobe2/></Link>}
                            {bio_links.twitter !== '' && <Link href={bio_links.twitter} target='_blank'><BsTwitter/></Link>}
                            {bio_links.youtube !== '' && <Link href={bio_links.youtube} target='_blank'><BsYoutube/></Link>}
                            {bio_links.instagram !== '' && <Link href={bio_links.instagram} target='_blank'><BsInstagram/></Link>}
                            {bio_links.dribbble !== '' && <Link href={bio_links.dribbble} target='_blank'><BsDribbble/></Link>}
                            {bio_links.behance !== '' && <Link href={bio_links.behance} target='_blank'><BsBehance/></Link>}
                            {bio_links.github !== '' && <Link href={bio_links.github} target='_blank'><BsGithub/></Link>}
                        </div>
                    </div>

                    <div className='w-full h-[2px] rounded-full mb-[15px]' style={{background: `${themes.text_color}`}}></div>
                </div>
            </section>
        </>
    )
}
