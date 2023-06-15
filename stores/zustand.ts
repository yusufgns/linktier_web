import { create } from 'zustand'

const store = (set: any): any => ({
    linktire: 'entries',
    logout: '',
    mobil_menu: ''
})

export const useStore = create(store)