import React from 'react'
import Profil from '@/components/User/Profil'
import { createClient } from '@/lib/supabase-server'
import Entries from '@/components/User/Entries'
import { redirect } from 'next/navigation'
import Navbar from '@/components/User/Navbar'

export default async function page({ params }: any) {
  const userName = params.user[0] as any
  const supabase = createClient()

  const { data: user } = await supabase.from('user').select('*').eq('user_name', userName)
  const userData: any = user ? user[0] : ''
  const theme: any = user ? userData?.theme : ''

  const { data: entries } = await supabase.from('entries').select('*').eq('user_name', userName)
  const entry: any = entries ? entries[0] : ''

  if (Array.isArray(user) && user.length === 0) {
    return (
      <div className='flex justify-center flex-col items-center text-[18px] font-medium h-screen w-full bg-[#302C42] text-white'>
        <Navbar></Navbar>
        User not found, please check user name...
      </div>
    )

  }

  return (
    <main className='flex flex-col items-center h-screen w-full' style={{ background: `${theme.bg_color}` }}>
      <Profil userData={userData} />
        <Entries theme={theme} entries={entries}></Entries>
    </main>
  )
}
