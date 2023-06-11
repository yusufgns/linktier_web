import React from 'react'
import { useUser } from '@/stores/User'

export default function Register() {
    const { bg_color, comp_color, completing_color, overdue_color, text_color, useUsers } = useUser()
    const users: any = useUsers ? useUsers : []
    return (
        <>
             {users[0].user_name === null && 
                <div>Selam</div>
             }
        </>
    )
}
