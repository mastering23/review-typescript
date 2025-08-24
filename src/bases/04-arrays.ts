const print = console.log;

//----------------------------//

const myArray:(number|string)[]= [1,2,3,'4',5,6];

myArray.push('10');
myArray.push(11);

print(myArray);


// cuando asignamos un tipado en este caso numeros no se permite otro tipo de variable que no sea numeros.

const myArray2: number[] =  [1,2,3,4,5,6];

myArray2.push(10);
myArray2.push(11);
print(myArray2);