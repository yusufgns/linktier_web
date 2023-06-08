import { create } from 'zustand';
import supabase from '../lib/supabase-client';

interface Entry {
    id: string;
    title: string;
    description: string;
    website: string;
    type: string;
}

interface linDataI {
    website: string | null,
    instagram: string | null,
    youtube: string | null,
    twitter: string | null,
    github: string | null,
    behance: string | null,
    dribbble: string | null,
}

interface Store {
    setBg_color: (data: any) => void;
    setCompC: (data: any) => void;

    setOverdueC: (data: any) => void;
    setCompletingC: (data: any) => void;
    setSituationC: (data: any) => void;
    setTextC: (data: any) => void;
    setUserName: (data: any) => void;
    setBio: (data: any) => void;
    setFirstName: (data: any) => void;
    setLastName: (data: any) => void;
    setAvatarUrl: (data: any) => void;

    supabaseUsers: () => Promise<void>;
    useUsers: {};
    linkData: linDataI,
    bg_color: string | null;
    comp_color: string | null;
    text_color: string | null;
    completing_color: string | null;
    situation_color: string | null;
    overdue_color: string | null;
    bio?: string | undefined;
    user_lastname?: string | undefined;
    user_firstname?: string | undefined;
    user_name?: string | undefined;
    avatar_url?: string | undefined;
}

const store = (set: any): Store => ({
    setBg_color: (data: any) => set({ bg_color: data  }),
    setCompC: (data: any) => set({ comp_color: data }),
    setCompletingC: (data: any) => set({ completing_color: data }),
    setOverdueC: (data: any) => set({ overdue_color: data }),
    setSituationC: (data: any) => set({ situation_color: data }),
    setTextC: (data: any) => set({ text_color: data }),
    setLastName: (data: any) => set({ user_lastname: data }),
    setFirstName: (data: any) => set({ user_firstname: data }),
    setBio: (data: any) => set({ bio: data }),
    setUserName: (data: any) => set({ user_name: data }),
    setAvatarUrl: (data: any) => set({ avatar_url: data }),
    
    useUsers: {},
    linkData: {
        website: '',
        instagram: '',
        youtube: '',
        twitter: '',
        github: '',
        behance: '',
        dribbble: ''
    },
    bg_color: '',
    comp_color: '',
    text_color: '',
    completing_color: '',
    situation_color: '',
    overdue_color: '',
    bio: '',
    user_lastname: '',
    user_firstname: '',
    user_name: '',
    avatar_url: '',

    supabaseUsers: async () => {
        const { data: userID } = await supabase.auth.getUser()
        
        const { data: User } = await supabase
            .from('user')
            .select('*')
            .eq('user_id', userID?.user?.id);

        const supaUser: any = User
            ? User.map((e: any) => ({
                user_id: e.user_id,
                user_name: e.user_name,
                theme: e.theme,
                created_at: e.created_at,
                user_lastname: e.user_lastname,
                avatar_url: e.avatar_url,
                bio: e.bio,
                user_firstname: e.user_firstname,
                bio_links: e.bio_links,
            })): {};

        set({ 
            useUsers: supaUser,
            bg_color: supaUser[0].theme.bg_color,
            comp_color: supaUser[0].theme.comp_color,
            text_color: supaUser[0].theme.text_color,
            completing_color: supaUser[0].theme.completing_color,
            situation_color: supaUser[0].theme.situation_color,
            overdue_color: supaUser[0].theme.overdue_color,
            bio: supaUser[0].bio,
            user_lastname: supaUser[0].user_lastname,
            user_firstname: supaUser[0].user_firstname,
            user_name: supaUser[0].user_name,
            avatar_url: supaUser[0].avatar_url,
            
            linkData: supaUser[0].bio_links,
        });
    },
});

export const useUser = create(store);
