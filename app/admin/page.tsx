import FormUpdate from '@/components/Admin/Form/FormUpdate'
import Mob from '@/components/Admin/Mobil'
import On_Register from '@/components/Admin/On_Register'
import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'


async function Admin() {
    const supabase = createClient()
    const { data: session } = await supabase.auth.getSession()

    if (!session.session) {
        redirect('/auth')
    }

    return (
        <main className='w-full flex justify-center items-center relative'>
            <div className='flex'>
                <div className='text-white'>
                    <FormUpdate></FormUpdate>
                </div>

                <div className='text-white flex mt-[10%]'>
                    <Mob></Mob>
                </div>
                <div className='text-white flex justify-center items-center h-screen'>
                    <On_Register session={session}></On_Register>
                </div>
            </div>
        </main>
    )
}

export default Admin