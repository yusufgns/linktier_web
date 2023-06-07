import create from 'zustand';

interface useFileI {
    selectedFile: null,
    previewImage: null,
    isHovered: false,
    currentUser: null,
    setSelectedFile: (e: any) => void,
    setPreviewImage: (e: any) => void,
    setIsHovered: (e: any) => void,
    setCurrentUser: (e: any) => void
}

const store = (set: any): useFileI => ({
    selectedFile: null,
    previewImage: null,
    isHovered: false,
    currentUser: null,
    setSelectedFile: (file: any) => set(() => ({ selectedFile: file })),
    setPreviewImage: (image: any) => set(() => ({ previewImage: image })),
    setIsHovered: (hovered: any) => set(() => ({ isHovered: hovered })),
    setCurrentUser: (user: any) => set(() => ({ currentUser: user })),
});

export const useFileStore = create(store)