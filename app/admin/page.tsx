import MobilDesign from '@/components/MobilDesign'
import FormUpdate from '@/components/Admin/Form/FormUpdate'


export default function Settings() {
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
                    <MobilDesign></MobilDesign>
                </div>
            </div>
        </main>
    )
}