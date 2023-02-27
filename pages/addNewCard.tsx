import React from 'react'
import AddNewCard from '@/components/AddNewCard'

type Props = {}

const addNewCard = (props: Props) => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <AddNewCard />
    </div>
  )
}

export default addNewCard