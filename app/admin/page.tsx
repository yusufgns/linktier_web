import FormUpdate from '@/components/Admin/Form/FormUpdate'
import Mob from '@/components/Mobil'
import { createClient } from '@/lib/supabase-server'
import {useAuth} from '../../stores/Auth'


async function Settings() {
    const supabase = createClient()

    const {data} = await supabase.auth.getUser()

    // const tasks = useStore(store => store.data)

    // useEffect(() => {
    //      fetchData()
    // }, [fetchData])

    // if (!data) {
    //     return <div>Loading...</div>;
    // }
    
    return (
        <main className='w-full flex justify-center items-center relative'>
            <div className='flex'>
                <div className='text-white'>
                    <FormUpdate></FormUpdate>
                </div>

                <div className='text-white flex mt-[10%]'>
                    {/* <MobilDesign></MobilDesign> */}
                    <Mob></Mob>
                </div>
            </div>
        </main>
    )
}

export default Settings