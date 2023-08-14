import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


export const UseGif = (tag) => {


 
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  



    async function fetchData(tag) {
        setLoading(true);
        

        // const output = await axios.get(url);
        // console.log(output)
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const memes = data.data.images.downsized_large.url;
        setGif(memes);
        setLoading(false);
    }

    useEffect( () => {
        fetchData();
    },[])

    return {
        gif,loading, fetchData
    };
}

export default UseGif