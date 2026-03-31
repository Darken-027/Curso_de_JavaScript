///Array

myArray = [];

// push y pop
//push agrega elemntos al final del array y el pop elimina el ultimo elemento del array y lo devu;elve

myArray.push("Juan");
myArray.push("y");
myArray.push("Rachel");
myArray.push(1);

console.log(myArray);

myArray.pop();
myArray.pop();

console.log(myArray);


// shift elimina el primer elemento del array y lo devuelve y unshift sirva para agragar uno o mas elementos al principio del array

console.log(myArray.shift());
console.log(myArray);


myArray.unshift("Juan", "Rachel");
console.log(myArray);


//lenth es una propiedad

console.log(myArray.length)

// para borrar el contenido de un array solo hay que volver a inicializarlo

//myArray = [];
console.log(myArray);

//slice devuelve una copia superficial de una porcion
myArray.unshift("Juan", "Rachel", "hans", "Gretel");
let myNewArray =myArray.slice(1,2)


console.log(myArray);
console.log(myNewArray);


myArray.slice(1,3)
console.log(myArray);
