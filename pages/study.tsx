import React, {useEffect, useState} from 'react'
import StudyCards from '@/components/StudyCards'
import { connectToDatabase } from '../mongoConnection';
import {motion} from 'framer-motion';

type Props = {}

const study = ({ allCards }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [allCards, setAllCards] = useState([])
  const [frontOrBack, setFrontOrBack] = useState(true);

  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <StudyCards allCards={allCards}/>
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