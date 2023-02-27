import React from 'react'
import Link from 'next/link'

type Props = {}

const Homescreen = (props: Props) => {

  return (
    <div className='flex flex-col justify-evenly items-center w-1/2 h-80 shadow-lg bg-gray-300 border border-black rounded-md'>
        <h1 className='text-2xl'>Notecard Study App</h1>
        <Link href='/study' className='border border-black rounded-sm w-1/3 py-4 shadow-sm hover:shadow-lg text-center' >Study</Link>
        <Link href='/addNewCard' className='border border-black rounded-sm w-1/3 py-4 shadow-sm hover:shadow-lg text-center' >Add New Card</Link>
    </div>
  )
}

export default Homescreen