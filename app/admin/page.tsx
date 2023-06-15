import FormUpdate from '@/components/Admin/Form/FormUpdate'
import Mobil from '@/components/Admin/Mobil'
import On_Register from '@/components/Admin/On_Register'
import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import Edit from '@/components/Admin/Form/Edit'


async function Admin() {
    const supabase = createClient()
    const { data: session } = await supabase.auth.getSession()

    if (!session.session) {
        redirect('/auth')
    }

    return (
        <main className='w-full flex justify-center items-center relative'>
            <div className='flex items-center justify-center'>
                <div className='text-white flex'>
                    <Mobil></Mobil>
                </div>

                {session.session &&
                    <div className='text-white flex justify-center items-center h-screen'>
                        <On_Register session={session}></On_Register>
                    </div>
                }
            </div>
        </main>
    )
}

export default Admin