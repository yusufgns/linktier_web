'use client'
import supabase from "@/lib/supabase-client"
import { useUser } from '../stores/User'
import { useStore } from '../stores/zustand'
import {} from '../stores/Auth'


export default function Situation({ stores }: any) {
    const {linktire} = useStore()
    const {
    bg_color,
    comp_color,
    completing_color,
    overdue_color,
    situation_color,
    text_color,
    user_firstname,
    user_lastname,
    user_name,
    bio,
    linkData,
    user_id
    } = useUser()

    const updateData = async () => {
        const { data: upEntriesData, error: upEntriesError } = await supabase
            .from('entries')
            .update({
                EntriesData: stores[0]?.EntriesData
            })
            .eq('user_id', user_id)

        const {data: upUserData, error: upUserError} = await supabase
            .from('user')
            .update({
                theme: {
                    "bg_color": bg_color,
                    "comp_color": comp_color,
                    "text_color": text_color,
                    "completing_color": completing_color,
                    "situation_color": situation_color,
                    "overdue_color": overdue_color,
                },
                user_lastname: user_lastname,
                user_firstname: user_firstname,
                bio: bio,

                bio_links: {
                    website: linkData.website,
                    instagram: linkData.instagram,
                    youtube: linkData.youtube,
                    twitter: linkData.twitter,
                    github: linkData.github,
                    behance: linkData.behance,
                    dribbble: linkData.dribbble,
                }
            })
            .eq('user_id', user_id)
        
        console.log(upUserData)
        console.log(upUserError)
        console.log(upEntriesError)
        console.log(upEntriesData)
    }

    return (
        <>
            {linktire !== 'settings' &&
             <div className='flex w-full items-center justify-center'>
                <button className='items-center flex justify-center absolute bottom-1 text-center bg-gray-600 py-[3px] px-[15px] mb-[5px] rounded-lg' onClick={updateData}>
                    Update Data
                </button>
            </div>
            }
        </>
    )
}
