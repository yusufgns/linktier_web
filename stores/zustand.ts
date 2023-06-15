import { create } from 'zustand'

const store = (set: any): any => ({
    linktire: 'entries',
    logout: '',
})

export const useStore = create(store)