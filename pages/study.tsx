import React from 'react'
import StudyCards from '@/components/StudyCards'

type Props = {}

const study = (props: Props) => {
  return (
    <div className='flex justify-center items-center w-full min-h-screen'>
        <StudyCards />
    </div>
  )
}

export default study