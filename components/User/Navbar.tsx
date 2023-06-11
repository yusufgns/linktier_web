'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const router = useRouter()
  return (
    <>
        <span className='flex gap-10 mt-5 text-[18px] absolute top-5'>
          <button onClick={() => router.push('/home')}>Home</button>
          <button onClick={() => router.push('/auth')}>Login / Register</button>
          <button onClick={() => router.push('/admin')}>Admin</button>
        </span>
    </>
  )
}
