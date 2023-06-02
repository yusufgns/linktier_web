
'use client'
import { useRouter } from "next/navigation"
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'


 const SettingHeader = () => {
    const router = useRouter()

    const handleRouter = () => {
        return router.push('/')
    }
    
    return (
        <button onClick={() => handleRouter()} className="flex items-center gap-[10px] text-[28px]">
            <BsFillArrowLeftSquareFill />
            <p className="text-[20px]">Settings</p>
        </button>
    )
}

export default SettingHeader