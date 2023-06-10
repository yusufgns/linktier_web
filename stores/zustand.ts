import {create} from 'zustand'
import supabase from '../lib/supabase-client'


interface linDataI {
    website: string | null,
    instagram: string | null,
    youtube: string | null,
    twitter: string | null,
    github: string | null,
    behance: string | null,
    dribbble: string | null,
}

interface profilDataI {
    bio: string | null,
    user_name: string | null,
    user_lastname: string | null,
    user_firstname: string | null,
    //avatar: string | null,
}

interface themeI {
    component?: string | null,
    background?: string | null,
    text?: string | null,
    completing_c?: string | null,
    overDue_c?: string | null,
    situationText?: string | null,
}

interface Store {
    setProfilData: (data: profilDataI[]) => void,

    profilData: profilDataI,
    linkData: linDataI,

    linktire: string | null,
    
    comp_color: string | null,
    bg_color: string | null,
    text_color: string | null,
    completing_color: string | null,
    overdue_color: string | null,
    situation_color: string | null,
}

async function supabaseData() {
    // const { data: entries } = await supabase.from('user').select('*');
    // const transformedEntries: Entry[] = entries ? entries.map((entry: any) => ({
    //     id: entry.id,
    //     description: entry.description,
    //     title: entry.title,
    //     type: entry.type,
    //     website: entry.website
    // })) : [];
    // useStore.getState().setEntriesData(transformedEntries);

    const { data: user } = await supabase.from('user').select('*')
    const userData: any  = user ? user.map((use: any) => ({
        user_name: use.user_name,
        user_firstname: use.user_firstname,
        user_lastname: use.user_lastname,
        bio: use.bio,
        avatar: use.avatar
    })): [];

    const userTheme: any = user ? user.map((use: any) => ({
        comp_color: '#171717',
        bg_color: '#121212',
        text_color: '#ffff',
        completing_color: 'rgb(57,109,63)',
        overdue_color: '#B33030',
        situation_color: '#fff'
    })) : [];
    
    useStore.getState().setProfilData(userData);
}

supabaseData();


const store = (set: any): Store => ({

    setProfilData: (data: any) => set({ profilData: data }),
    
    profilData: {
        user_name: '',
        user_firstname: '',
        user_lastname: '',
        bio: '',
        //avatar: use.avatar
    },

    linkData: {
        website: '',
        instagram: '',
        youtube: '',
        twitter: '',
        github: '',
        behance: '',
        dribbble: ''
    },

    linktire: 'entries',

    comp_color: '#171717',
    bg_color: '#121212',
    text_color: '#ffff',
    completing_color: 'rgb(57,109,63)',
    overdue_color: '#B33030',
    situation_color: '#fff'
})
export const useStore = create(store)