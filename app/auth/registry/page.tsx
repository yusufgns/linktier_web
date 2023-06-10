import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase-server';
import Input from '@/components/uı/Input';
import Forms from '@/components/Register/On_Register';

const Registry = async () => {
    const supabase = createClient()
    const {data: session} = await supabase.auth.getSession()
    const userID = session?.session?.user.id;
    const {data: authUser} = await supabase.from('user').select('*').eq('user_id', userID)
    const users: any = authUser ? authUser: []

    if(Object.keys(authUser as object).length !== 0 && users[0]?.user_name) {
      redirect('/admin')
    }

    if(session.session === null) {
      redirect('/auth')
    }

      

  return (
    <div className="flex items-center justify-center h-screen w-full">
        <Forms users={users}></Forms>
    </div>
  );
};
export default Registry