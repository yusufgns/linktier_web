'use client'
import { useStore } from '@/stores/zustand'
import clsx from 'clsx';

export default function Navbar() {
    const {linktire} = useStore()
    const linktierData = (e: any) => {
        useStore.setState({
            linktire: e
        });
    }

    return (
        <span>
            <div
                className='
                    rounded-xl
                    bg-[#222831]
                    h-fit
                    px-[25px]
                    py-[20px]
                    w-[660px]
                    text-white
                    mb-[20px]
                    flex
                    items-center
                    gap-[15px]
                    justify-center
                    mt-[100px]
                '
            >
                <button onClick={() => linktierData('entries')} className={clsx('active:bg-[#393E46] focus:bg-[#393E46] py-[3px] px-[15px] rounded',
                        linktire === 'entries' && 'bg-[#393E46]'
                )}>Entries</button>
                <button onClick={() => linktierData('theme')} className='active:bg-[#393E46] focus:bg-[#393E46] py-[3px] px-[15px] rounded'>Theme</button>
                <button onClick={() => linktierData('profil')} className='active:bg-[#393E46] focus:bg-[#393E46] py-[3px] px-[15px] rounded'>Profil</button>
                <button onClick={() => linktierData('settings')} className='active:bg-[#393E46] focus:bg-[#393E46] py-[3px] px-[15px] rounded'>Settings</button>
            </div>
        </span>
  )
}
