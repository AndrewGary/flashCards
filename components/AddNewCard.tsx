import React, {useState} from 'react'

type Props = {}

const AddNewCard = (props: Props) => {

    const [newCard, setNewCard] = useState({frontText: '', backText: ''})

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reqOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              frontText: newCard.frontText,
              backText: newCard.backText,
              time: Date.now(),
            }),
          };

        const resp = await fetch('/api/cards', reqOptions);

        console.log(resp);

        const idk = await resp.json();

        console.log('idk: ', idk);
    }

    const handleChange = (e) => {
        setNewCard({
            ...newCard,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className='w-1/2 border border-black flex flex-col items-center h-80 rounded-lg'>
        <h1>Add New Card</h1>
        <form className='flex flex-col items-center w-full h-full justify-evenly'>
            
            <div className='w-1/2 flex flex-col'>
                <label className='w-full' htmlFor='frontText'>Front</label>
                <textarea
                    name='frontText'
                    className='border border-black w-full pl-1'
                    onChange={handleChange}
                />
            </div>
            
            <div className='w-1/2 flex flex-col'>
                <label className='w-full' htmlFor='backText'>Back</label>
                <textarea
                    name='backText'
                    className='border border-black w-full pl-1'
                    onChange={handleChange}
                />
            </div>

            <button onClick={handleSubmit} className='border border-black rounded-md py-2 w-1/4'>Add Card</button>
        </form>
    </div>
  )
}

export default AddNewCard