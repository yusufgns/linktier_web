import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase-server';
import Auths from '@/components/Auth';
import On_Register from '@/components/Register/On_Register';

const Auth = async () => {
  const supabase = createClient()
  const {data: session} = await supabase.auth.getSession()
  const userID = session?.session?.user.id;
  const {data: authUser} = await supabase.from('user').select('*').eq('user_id', userID)
  const auths: any = authUser ? authUser : ''

  if(session.session) {
    const {data: user} = await supabase.from('user').select('*').eq('user_id', session?.session?.user?.id)
    if(user) {
      redirect('/admin')
    }
  }
  
  return (
    <div className="flex items-center justify-center h-screen w-full">
        <Auths></Auths>
    </div>
  );
};
export default Auth