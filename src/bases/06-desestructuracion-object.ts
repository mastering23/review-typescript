const print = console.log;

const person = {
name:'Tony',
age: 45,
key: 'ironman',
};

// const name = person.nane;
// const age = person.age;
// const key = person.key;


// print({name,age,key});

//----desetructuracion--------//

const {key,age,name:ironmanName} = person;

print({ironmanName,age,key});


interface Hero {
name: string;
age: number;
key: string;
rank?: string;
}


const useContext = ({key,name,age,rank="sin rango"}: Hero)=>{
return{
  keyName: key,
  user:{
    name,
    age,
  },
  rank: rank,
};
};


// const context =  useContext(person);


// print(context);

const {rank,keyName,user:{name}} =  useContext(person);
print({rank,keyName,name});
