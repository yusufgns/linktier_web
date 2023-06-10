import { create } from 'zustand';
import supabase from '../lib/supabase-client';
import { UserType } from '../types/user';
import { useUser } from './User';

interface Entry {
    EntriesData: any;
    id: string;
    title: string;
    description: string;
    website: string;
    type: string;
}

interface Store {
    setEntriesData: (data: Entry[]) => void;
    EntriesData: Entry[];
    supabaseEntries: () => Promise<void>;
}

const store = (set: any): Store => ({
    setEntriesData: (data: Entry[]) => set({ EntriesData: data }),
    EntriesData: [],

    supabaseEntries: async () => {
        const { data } = await supabase.auth.getSession();
        const { data: Entries } = await supabase
            .from('entries')
            .select('*')
            .eq('user_id', data.session?.user.id);

        const supaEntries: any = Entries
            ? Entries.map((e: any) => ({
                created_at: e.created_at,
                EntriesData: e.EntriesData,
                id: e.id,
                user_id: e.user_id,
                user_name: e.user_name,
            }))
            : [];

        set({ EntriesData: supaEntries });
    },
});

export const useMobil = create(store);
