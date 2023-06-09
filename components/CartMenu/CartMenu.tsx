import React from 'react'
import { createClient } from '../../lib/supabase-server'
import { redirect } from 'next/navigation'

export default function CartMenu() {
    const supabase = createClient()

    async function Auths() {
        const { data } = await supabase.auth.getSession()
        const dataSes = data.session

        if(dataSes === null) {
            return redirect('/auth')
        } else if (dataSes) {
            return redirect('/admin')
        }
    }

    Auths()


    return (
        <>
        </>
    )
}
