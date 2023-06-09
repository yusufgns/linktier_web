import { create } from 'zustand';
import supabase from '../lib/supabase-client';

const store = (set: any): any => ({
    session: {},

    supabaseUserOut: async () => {
        const { error } = await supabase.auth.signOut()
        set({session: error})
    }
});

export const useAuth = create(store);
