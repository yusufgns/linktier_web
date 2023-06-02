import {create} from 'zustand'

interface Entry {
    id: number;
    description: string;
    title?: string;
    type: string;
    website: string;
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

interface profilDataI {
    bio: string | null,
    fullname: string | null,
}

interface themeI {
    component?: string | null,
    background?: string | null,
    text?: string | null,
    complating_c?: string | null,
    overDue_c?: string | null,
    situationText?: string | null,
}

interface Store {
    entriesData: Entry[],
    nextId: number,
    setEntriesData: (data: Entry[]) => void,
    incrementNextId: () => void,
    profilData: profilDataI,
    linkData: linDataI,
    linktire: string | null,
    comp_color: string | null,
    bg_color: string | null,
    text_color: string | null,
    complating_color: string | null,
    overdue_color: string | null,
    situation_color: string | null,
}

const store = (set: any): Store => ({
    profilData: {
        bio: '',
        fullname: '',
        //avatar: '',
    },

    entriesData: [],
    nextId: 1,
    setEntriesData: (data: any) => set({ entriesData: data }),
    incrementNextId: () => set((state: any) => ({ nextId: state.nextId + 1 })),

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
    complating_color: '#fff',
    overdue_color: '#fff',
    situation_color: '#fff'
})

export const useStore = create(store)