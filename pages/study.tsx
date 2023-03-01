import React, {useEffect, useState} from 'react'
import StudyCards from '@/components/StudyCards'
import { connectToDatabase } from '../mongoConnection';

type Props = {}

const study = ({ allCards }) => {


  console.log('allCards: ', allCards);

  // useEffect(() => {
  //   const useEffectAsync = async () => {
  //     const resp = await fetch('/api/cards');
  //     const jsonResp = await resp.json();

  //     setAllCards(jsonResp);
  //   }

  //   useEffectAsync();
  // }, [])

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [allCards, setAllCards] = useState([])
  const [frontOrBack, setFrontOrBack] = useState(true);

  const changeSides = () => {
    setFrontOrBack(!frontOrBack);
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='relative w-1/2 border border-black flex items-center h-80 rounded-lg justify-center' onClick={(e) => {
          e.preventDefault();
          changeSides();
        }}>
          <div className='absolute left-1 top-1'>
            {currentIndex + 1}/{allCards.length}
          </div>
          <div onClick={() => {
            if(currentIndex === allCards.length - 1){
              setCurrentIndex(0);
            }else{
              setCurrentIndex(currentIndex + 1)
            }
          }} className='w-12 h-12 p-2 hover:p-1 hover:border-2 rounded-full border border-black flex justify-center items-center absolute bottom-2 right-2 hover:text-2xl bg-green-500'><img src='/right-arrow.png' /></div>
          <div onClick={() => {
            if(currentIndex === 0){
              setCurrentIndex(allCards.length - 1)
            }else{
              setCurrentIndex(currentIndex - 1)
            }
          }} className=' w-12 h-12 p-2 hover:p-1 hover:border-2 rounded-full border border-black flex justify-center items-center absolute bottom-2 left-2 hover:text-2xl z-10'><img src='/left-arrow.png' /></div>
          <span className='text-4xl'>{frontOrBack ? allCards[currentIndex].frontText : allCards[currentIndex].backText}</span>
        </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const connection = await connectToDatabase();

  const db = connection.db;

  const results = await db.collection("cards").find({}).toArray();

  const a = JSON.stringify(results);

  const allCards = JSON.parse(a);

  return {
    props: {
      allCards: allCards,
    },
  };
};

export default study