import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase-server';
import Auths from '@/components/Auth';

const Auth = async () => {
  const supabase = createClient()
  const {data: session} = await supabase.auth.getSession()

  if(session.session) {
    const userID = session.session.user.id;
    const {data: authUser} = await supabase.from('user').select('*').eq('user_id', userID)

    if(Object.keys(authUser as object).length === 0) {
      redirect('/auth/registry')
    } else {
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