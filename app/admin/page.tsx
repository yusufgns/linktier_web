import FormUpdate from '@/components/Admin/Form/FormUpdate'
import Mob from '@/components/Mobil'
import { createClient } from '@/lib/supabase-server'
import {redirect} from 'next/navigation'



async function Admin() {
    const supabase = createClient()
    const {data: session} = await supabase.auth.getSession()

    console.log(session)

    if(session.session === null) {
        return redirect('/')
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
            </div>
        </main>
    )
}

export default Admin