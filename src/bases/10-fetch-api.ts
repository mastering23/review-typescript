import type { GiphyResponseTs } from "../data/giphy.response";
import { print } from "./08-imp-exp";

const API_KEY = 'HWuTUrcEL2FtFGqNQRtN0V5TfqAnNUsI';

const MyRequest  = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDom = (url:string) =>{
    const imgElement = document.createElement('img');
    imgElement.src = url; 
    document.body.append(imgElement);
}

MyRequest.then((response)=>{
  response.json().then(({data}: GiphyResponseTs)=>{
  const imageUrl = data.images.original.url;
  createImageInsideDom(imageUrl);
  });

}).catch((err)=>{
  
  print(err);

});