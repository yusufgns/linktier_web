'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Home() {
    const router = useRouter()

    return (
        <main
            className="
    h-screen
    bg-[#302C42]
    ">
            <div className='max-w-[1440px] h-screen m-auto px-[150px]'>
                <header className='fixed h-[40px] mt-[15px]'>
                    <Link href={'/'} className='flex items-center gap-2 text-[22px]'>
                        <p className='font-bold text-white'>Link</p>
                        <p className='text-white'>Tier</p>
                    </Link>
                </header>

                <section className='
        h-screen
         pt-[55px] 
         pb-[55px] 
         flex
         items-center
         justify-between
         '>
                    <div>
                        <div
                            className='text-[40px] flex items-center gap-3 font-semibold text-white'>
                            Make
                            <p className='opacity-60'>
                                Your Plan
                            </p>
                        </div>

                        <div
                            className='text-[40px] flex items-center gap-3 font-semibold text-white'>
                            <p className='opacity-60'>
                                Share
                            </p>
                            Anywhere
                        </div>

                        <p className='w-[450px] text-white opacity-40 my-4'>
                            It is designed for you to share your social media accounts, daily plans and more with your followers.
                        </p>

                        <button
                            onClick={() => router.push('/auth')}
                            className='flex items-center gap-[35px] pt-[15px]'>
                            <p className='py-[10px] px-[30px] bg-slate-600 rounded-md font-medium text-white'>
                                Build Your Profil
                            </p>

                            <div className='text-[35px] text-white'>
                                <BsArrowRight />
                            </div>
                        </button>
                    </div>

                    <div className='relative w-[351.11px] h-[701.29px] text-white'>
                        <Image src={'/iphones.svg'} alt='Mobil' width={351.11} height={701.29} className='absolute' />
                        <div className='absolute px-[30px] mt-[50px]'>
                            <div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Home