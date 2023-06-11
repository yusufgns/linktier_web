import React from 'react'
import HomePage from '@/components/Home/HomePage';
import { createClient } from '../lib/supabase-server';
import { redirect } from 'next/navigation';
import On_Register from '@/components/Register/On_Register';


const Home = async () => {
  const supabase = createClient()
  const {data: session} = await supabase.auth.getSession()
  const auths: any = session ? session : ''
  const {data: user} = await supabase.from('user').select('*').eq('user_id', session?.session?.user?.id)
  
  if(session.session) {
    if(Array.isArray(user) && user.length !== 0) {
      redirect('/admin')
    }
  }

  
  return (
    <div className='w-screen h-screen'>
      {Array.isArray(user) && user.length === 0 &&
        <div className='flex items-center justify-center h-screen'>
          <On_Register></On_Register>
        </div>
      }
    </div>
  );
};

export default Home