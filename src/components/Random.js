import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SpinnerWheel from './SpinnerWheel';
import UseGif from './UseGif';



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export const Random = () => {

   const {gif, loading, fetchData} = UseGif();



  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>A Random Gif</h1>

        {
            loading ? (<SpinnerWheel/>) : (<img src= {gif} width="450"></img>)
        }

        

        <button onClick={() => fetchData()}
        className='w-10/12 bg-green-100 text-lg py-2 rounded-lg uppercase font-bold mb-[20px]'>
            Genrate Gif
        </button>
    </div>
  )
}

export default Random