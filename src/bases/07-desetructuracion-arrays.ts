const print = console.log;

const characterNames = ['Goku','Vegeta','Trunks'];


const[p1,p2,p3] = characterNames;

print({p1,p2,p3});


const[,,p5] = characterNames;
print({p5}); 

const returnsArrayFn = () =>{
  return ['ABC',123]  as const;
};

const [letters,numbers] = returnsArrayFn();

print(letters,numbers);
print("------------------");
print(letters + 100);
print(numbers + 100);
print("------------------")


const useState = (name:string) => { 
  return [name,(value: string)=>{ print(value)} ] as const;
};

const [name,setName] = useState('Goku');
print(name);
setName('Vegeta');
