import React, { useContext } from 'react'
import AuthContext from '@/context/AuthContext'
import { DetailCard } from "@/components/details/DetailCard"
import { useRouter } from "next/router"

export default function Details() {
  const { authorized, accountDetails } = useContext(AuthContext);
  const router = useRouter()

  if(authorized === false ) () => router.push('/')

  return (
    <main className='p-4 min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-black via-purple-700 via-50% to-black'>
        <h1 className='-mt-16 m-4 w-full text-center font-bold text-xl md:text-4xl bg-clip-text p-2 bg-gradient-to-b from-purple-400 to-white text-transparent drop-shadow-md'
        >Your <span className='text-blue-400'>Drip</span> Account</h1>
        <DetailCard accountDetails={accountDetails ? accountDetails : undefined}/>
    </main>
  )
}
