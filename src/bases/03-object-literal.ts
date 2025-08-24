const print = console.log;

interface person{
firstName: String;
lastName: String;
age: number;
address: Address;

}

interface Address{
  zipcode: string;
  city: string;
}


//--------------------------//
const ironman = {
firstName : 'tony',
lastName :  'Stark',
age : 45,
address:{
  zipcode:10022,
  city:'New York',
}
};

//notice the difference

//const spiderman  = ironman;

//const spiderman  = {...ironman};

const spiderman = structuredClone(ironman);

spiderman.firstName ='peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.zipcode = 10910;
spiderman.address.city = 'San Jose';

const platanoman = structuredClone(ironman);

platanoman.firstName ='pedro';
platanoman.lastName = 'Iglesias';
platanoman.age = 33;



print(ironman,spiderman,platanoman);