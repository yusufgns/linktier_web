import { useSupabase } from '@/components/providers/supabase-provider';
import { redirect } from 'next/navigation';
import { BsDiscord, BsGoogle } from 'react-icons/bs'
import { createClient } from '@/lib/supabase-server';
import Auths from '@/components/Auth';
import { useAuth } from '@/stores/Auth';

const Auth = async () => {
    const supabase = createClient()
    const {data} = await supabase.auth.getSession()

    if(data.session) {
        redirect('/admin')
    }

  return (
    <div className="flex items-center justify-center h-screen w-full">
        <Auths></Auths>
    </div>
  );
};
export default Auth