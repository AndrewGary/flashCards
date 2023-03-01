import React, {useState} from 'react'
import StudyCards from '@/components/StudyCards'
import { connectToDatabase } from '../mongoConnection';

type Card = {frontText: string, backText: string, labels: Array<string>}
type Props = {allCards: Array<Card>}

const study = ({ allCards }: Props) => {

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