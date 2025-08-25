import { print } from "./08-imp-exp";

const API_KEY = 'HWuTUrcEL2FtFGqNQRtN0V5TfqAnNUsI';

const MyRequest  = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

MyRequest.then((response)=>{
  // print(response);
  response.json().then((data)=>{
    const imageUrl = data.data.images.original.url;
    print(imageUrl);
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl; 
    document.body.append(imgElement);
  });
})
.catch((err)=>{
  print(err);
})