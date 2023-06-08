'use client'
import React from 'react'
import supabase from '@/lib/supabase-client'

export default function deneme() {
    const goBack = async () => {
      const {error} = await supabase.auth.signOut()
    }
    return (
        <div>
            <div onClick={() => goBack}>DENEME</div>
        </div>
    )
}
