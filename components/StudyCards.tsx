import React, {useEffect, useState} from 'react'


type Props = {}

const StudyCards = (props: Props) => {

    const [allCards, setAllCards] = useState([])
    useEffect(() => {
        const useEffectAsync = async () => {
            const resp = await fetch('/api/cards');

            const allCardsResp = await resp.json();

            // console.log('allCards: ', allCards);
            setAllCards(allCardsResp);
        }

        useEffectAsync();
    }, [])
  return (
    <div className='w-full h-80 flex justify-center items-center'>
        <div className='h-full w-2/3 flex flex-col border border-green-500' >
        </div>
    </div>
  )
}

export default StudyCards