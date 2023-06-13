import { create } from 'zustand';

const Edit = (set: any): any => ({
    setEditData: (data: any) => set({ EditData: data }),
    EditData: {},
});

export const useEdit = create(Edit);
