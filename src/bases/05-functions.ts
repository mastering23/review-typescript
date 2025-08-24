const print  = console.log;

//-------------------------//


function greeting (name:string):string{
  return `Hola ${name}`;
}
const message = greeting('Goku');


const greeting2 =  (name:string): string =>{
   return `Hola ${name}`;
}

const message2 = greeting2('Vegeta');



print(message,message2);


interface  User{
  uid: string;
  username: string;
}

function getUser(): User {
return {
  uid:'abc-123',
  username:'el_papi23',
}
}

const user = getUser();



const getUser2 = () =>{
  return {
  uid:'abc-123',
  username:'el_papi23',
}
}
const user2 = getUser2();

print(user);
print(user2);

const myNumbers: number[] = [1,2,3,4,5];

myNumbers.forEach(function(value){
  print({value});
});

myNumbers.forEach((value)=>{
  print(value);
});

myNumbers.forEach(print);