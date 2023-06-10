import FormUpdate from '@/components/Admin/Form/FormUpdate'
import Mob from '@/components/Mobil'
import { createClient } from '@/lib/supabase-server'
import {redirect} from 'next/navigation'


async function Admin() {
    const supabase = createClient()
    const {data: session} = await supabase.auth.getSession()

    if(session.session === null) {
        redirect('/auth')
    } else if(session.session !== null) {
        const {data} = await supabase.from('user').select('*').eq('user_id', session?.session?.user?.id)
        const datas = data ? data[0]: ''
        if(datas ===  undefined) {
            redirect ('/auth/registry')
        }
    }

    // const userID = session.session.user.id;
    //     const {data: authUser} = await supabase.from('user').select('*').eq('user_id', userID)

    //     const users: any = authUser ? authUser: []

    //     if(users[0]?.user_name === null && users[0]?.user_id === null && users[0]?.user_firstname === null) {
    //       redirect('/auth/registry')
    //     } else {
    //       redirect('/admin')
    //     }
    
    return (
        <main className='w-full flex justify-center items-center relative'>
            <div className='flex'>
                <div className='text-white'>
                    <FormUpdate></FormUpdate>
                </div>

                <div className='text-white flex mt-[10%]'>
                    <Mob></Mob>
                </div>
            </div>
        </main>
    )
}

export default Admin