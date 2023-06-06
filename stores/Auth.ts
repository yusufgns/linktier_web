import { create } from 'zustand';
import supabase from '../lib/supabase-client';

const store = (set: any): any => ({
    session: {},

    supabaseUsers: async () => {
        const { data } = await supabase.auth.getSession()
        set({session: data})
    }
});

export const useAuth = create(store);
