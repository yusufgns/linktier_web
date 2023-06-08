
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase-server';
import Auths from '@/components/Auth';

const Auth = async () => {
    const supabase = createClient()
    const {data: session} = await supabase.auth.getSession()

    if(session.session) {
        return redirect('/admin')
    }

  return (
    <div className="flex items-center justify-center h-screen w-full">
        <Auths></Auths>
    </div>
  );
};
export default Auth