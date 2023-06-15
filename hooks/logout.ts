'use client'
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useAuth } from '@/stores/Auth';
import { useRouter } from "next/navigation";
import { useStore } from "@/stores/zustand";

export function useLogout() {
    const [supabases] = useState(() => createBrowserSupabaseClient())
    const router = useRouter()

    const logoutData = (e: any) => {
        useStore.setState({
            logout: e
        });
    }

    async function goBack() {
        const { error } = await supabases.auth.signOut()
        useAuth.getState().supabaseUserOut();
        logoutData('logout')
    }

    return goBack
}
