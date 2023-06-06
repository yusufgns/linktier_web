import { create } from 'zustand'
import supabase from '../lib/supabase-client'
import { UserType } from '../types/user'

interface Entry {
    [x: string]: any;
    id: string;
    title: string;
    description: string;
    website: string;
    type: string;
}

interface Store {
    setEntriesData: (data: Entry[]) => void;
    EntriesData: Entry[];
}

export async function supabaseEntries() {
    const { data: Entries } = await supabase.from('entries').select('*').eq('user_id', '12108e77-baa6-44dc-8d6c-f998e4b98973')

    const supaEntries: any = Entries ? Entries.map((e: any) => ({
        created_at: e.created_at,
        EntriesData: e.EntriesData,
        id: e.id,
        user_id: e.user_id,
        user_name: e.user_name,
    })) : [];

    useEntries.getState().setEntriesData(supaEntries);
}
supabaseEntries();

const store = (set: any): Store => ({
    // setProfilData: (data: any) => set({ profilData: data }),
    // profilData: {
    //     user_name: '',
    //     user_firstname: '',
    //     user_lastname: '',
    //     bio: '',
    //     //avatar: use.avatar
    // }

    setEntriesData: (data: Entry[]) => set({ EntriesData: data }),
    EntriesData: [],
})

export const useEntries = create(store)