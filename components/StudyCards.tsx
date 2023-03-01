import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion';


type Props = {}

const StudyCards = ({allCards}) => {

  const [frontOrBack, setFrontOrBack] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSides = () => {
    setFrontOrBack(!frontOrBack);
  }
    
  return (
    <motion.div animate={{rotateY: frontOrBack ? 0 : 360}} transition={{duration: .4}} className='relative w-1/2 border border-black flex items-center h-80 rounded-lg justify-center' onClick={(e) => {
      e.preventDefault();
      changeSides();
    }}>
      <div className='absolute left-1 top-1'>
        {currentIndex + 1}/{allCards.length}
      </div>
      <div onClick={(e) => {
        e.stopPropagation();
        if(currentIndex === allCards.length - 1){
          setCurrentIndex(0);
        }else{
          setCurrentIndex(currentIndex + 1)
        }
      }} className='w-12 h-12 p-2 hover:p-1 hover:border-2 rounded-full border border-black flex justify-center items-center absolute bottom-2 right-2 hover:text-2xl bg-green-500'><img src='/right-arrow.png' /></div>
      <div onClick={(e) => {
        e.stopPropagation();
        if(currentIndex === 0){
          setCurrentIndex(allCards.length - 1)
        }else{
          setCurrentIndex(currentIndex - 1)
        }
      }} className=' w-12 h-12 p-2 hover:p-1 hover:border-2 rounded-full border border-black flex justify-center items-center absolute bottom-2 left-2 hover:text-2xl z-10'><img src='/left-arrow.png' /></div>
      <span className='text-4xl'>{frontOrBack ? allCards[currentIndex].frontText : allCards[currentIndex].backText}</span>
    </motion.div>
  )
}

export default StudyCards