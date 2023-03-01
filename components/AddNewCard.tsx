import React, {useState} from 'react'
const labels = ['DSA', 'General Question', 'Performace Question', 'Testing Question', 'Version Control', 'Command Line Question', 'HTML', 'CSS', 'React']
const colors = ['bg-green-400', 'bg-red-400', 'bg-indigo-400', 'bg-blue-400', 'bg-orange-400', 'bg-yellow-400', 'bg-purple-400', 'bg-cyan-400', 'bg-amber-400']

type Props = {}

const AddNewCard = (props: Props) => {

    
    const [newCard, setNewCard] = useState({frontText: '', backText: '', labels: []})
    const [selectedLabels, setSelectedLabels] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reqOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              frontText: newCard.frontText,
              backText: newCard.backText,
              labels: [...newCard.labels],
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
    <div className='w-1/2 border border-black flex items-center h-80 rounded-lg'>
        <div className='h-full w-2/3 flex flex-col border border-green-500' >
            <h1 className='text-center'>Add New Card</h1>
            <form className='flex flex-col items-center w-full h-full justify-evenly'>
                
                <div className=' bg- w-11/12 flex flex-col'>
                    <label className='w-full' htmlFor='frontText'>Front</label>
                    <textarea
                        name='frontText'
                        className='border border-black w-full pl-1'
                        onChange={handleChange}
                    />
                </div>
                
                <div className='w-11/12 flex flex-col'>
                    <label className='w-full' htmlFor='backText'>Back</label>
                    <textarea
                        name='backText'
                        className='border border-black w-full pl-1'
                        onChange={handleChange}
                    />
                </div>

                <button onClick={handleSubmit} className='border border-black rounded-md py-2 w-1/2'>Add Card</button>
            </form>
        </div>
        <div className='h-full w-1/3 flex flex-col items-center justify-center'>
            {labels.map((label: string, i: number) => {
                return (
                    <span onClick={() => {
                        if(newCard.labels.includes(label)){
                            setNewCard({
                                ...newCard,
                                labels: newCard.labels.filter(arg => arg !== label)
                            })
                        }else{
                            setNewCard({
                                ...newCard,
                                labels: [...newCard.labels, label]
                            })
                        }
                    }} key={i} className={`${colors[i]} ${newCard.labels.includes(label) ? 'bg-opacity-100' : 'bg-opacity-25'} relative py-1 w-full flex justify-center items-center mb-1`}>
                        {newCard.labels.includes(label) && <div className='absolute left-1 `rounded full h-3 w-3 bg-red-500'></div>}
                        {label}
                    </span>
                )
            })}
        </div>
    </div>
  )
}

export default AddNewCard