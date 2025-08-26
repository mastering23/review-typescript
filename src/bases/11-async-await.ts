import type { GiphyResponseTs } from "../data/giphy.response";
import { print } from "./08-imp-exp";

const API_KEY = 'HWuTUrcEL2FtFGqNQRtN0V5TfqAnNUsI';

const createImageInsideDom = (url:string) =>{
    const imgElement = document.createElement('img');
    imgElement.src = url; 
    document.body.append(imgElement);
};

const getRandomGifUrl = async (): Promise <string> =>{
  const response  = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
  const  {data} : GiphyResponseTs = await response.json();
  return data.images.original.url;
};

getRandomGifUrl().then((createImageInsideDom));