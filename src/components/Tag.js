import React, { useState } from 'react'
import SpinnerWheel from './SpinnerWheel';
import UseGif from './UseGif';



export const Tag = () => {

  const [tag, setTag] = useState('');  
  

    const {gif, loading, fetchData} = UseGif(tag);


  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>Random {tag} Gif</h1>

        {
            loading ? (<SpinnerWheel/>) : (<img src= {gif} width="450" alt=''></img>)
        }

        <input className='w-10/12 bg-green-100 text-lg py-2 rounded-lg  mb-[1px] text-center'
        onChange={(event) => setTag(event.target.value)}
        value={tag}></input>

        <button onClick={() => fetchData(tag)}
        className='w-10/12 bg-green-100 text-lg py-2 rounded-lg uppercase font-bold mb-[20px]'>
            Genrate Gif
        </button>
    </div>
  )
}

export default Tag