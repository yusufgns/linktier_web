'use client'
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useAuth } from '../../stores/Auth';
import { useUser } from '@/stores/User';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { CgProfile } from 'react-icons/cg'
import { AiFillEdit, AiFillHome } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

function Cart() {
  const [supabases] = useState(() => createBrowserSupabaseClient())
  const [sessionData, setSessionData] = useState<any>()
  const { useUsers } = useUser()
  const users: any = useUsers ? useUsers : [];

  const router = useRouter()
  const [menu, setMenu] = useState(false);

  const { avatar_url, user_id, user_name } = useUser();
  let url: any = 'https://nmcceegbiexzqgkclyxx.supabase.co/storage/v1/object/public/avatars/' + `${avatar_url}`;
  
  useEffect(() => {
    useUser.getState().supabaseUsers();
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openMenu = () => {
    if (menu === false) {
      setMenu(true)
    } else {
      setMenu(false)
    }
  }
  const menuRef = useRef<HTMLButtonElement | null>(null);
  
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenu(false);
    }
  };

  async function goBack() {
    const { error } = await supabases.auth.signOut()
    useAuth.getState().supabaseUserOut();
    setSessionData(error)

    return router.push('/auth')
  }

  return (
    <>
      {users[0]?.user_id && sessionData !== null &&
        <button
          onClick={openMenu}
          ref={menuRef}
          className={clsx('absolute right-10 bottom-10 w-fit px-[10px] py-[10px] bg-[#222831] text-white font-medium rounded-full transition duration-1000 ease-in-out',
            menu === true && 'translate-y-1'
          )}>

          {menu &&
            <div className={clsx(menu === true && 'transition duration-500 ease-in-out', 'mb-[20px] flex items-center flex-col gap-[25px]')}>

              <button className='text-[20px] mt-[10px]' onClick={() => router.push('/home')}>
                <AiFillHome></AiFillHome>
              </button>

              <button className='text-[20px]' onClick={() => router.push(`/${user_name}`)}>
                <CgProfile></CgProfile>
              </button>

              <button className='text-[20px]' onClick={() => router.push('/admin')}>
                <AiFillEdit></AiFillEdit>
              </button>


              <button className='text-[20px]' onClick={goBack}>
                <FiLogOut></FiLogOut>
              </button>
            </div>
          }

          <div>
            {url !== 'https://nmcceegbiexzqgkclyxx.supabase.co/storage/v1/object/public/avatars/null' &&
              <Image src={url} alt='' width={50} height={50} className='rounded-full w-[50px] h-[50px]' />
            }

            {url == 'https://nmcceegbiexzqgkclyxx.supabase.co/storage/v1/object/public/avatars/null' &&
              <div className='w-[50px] h-[50px] bg-yellow-500 rounded-full'></div>
            }
          </div>
        </button>
      }

      {!users[0]?.user_id &&
        <button
          className={clsx('absolute right-10 bottom-10 w-fit px-[10px] py-[3px] bg-[#222831] text-white font-medium rounded transition duration-1000 ease-in-out')} onClick={() => router.push('/auth')}>
            Create Profil</button>
      }
    </>
  );
}

export default Cart;
