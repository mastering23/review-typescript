import { print } from "./08-imp-exp";

const  myPromise = new Promise<number>((resolve,reject)=>{

  setTimeout(()=>{
    // resolve(100);
    reject('mi amigo se perdio');

  },2000); //2 seconds
});


myPromise.then((myMoney) =>{
print(`tengo mi dinero ${myMoney}`);
}).catch((reason)=>{
  print(reason);
}).finally(()=>{
  print('Seguir y seguir');
})