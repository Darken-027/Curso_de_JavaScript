let numbers = [2,5,6,7,4];

console.log(numbers.length);
console.log(numbers[0]); 
console.log(numbers[1]);

//Para aseder a la ultima posicion de un array podemos usar esta tecnica
console.log(numbers[numbers.length-1]);

//Podemos hacer otra tecnica para aseder a los elementos de un array usando (at) a este metodo se le pueden enviar numero negativos
console.log(numbers.at(0));
console.log(numbers.at(-0));
console.log(numbers.at(4));
console.log(numbers.at(-3));

//Para ver todo el contenido de un array podemos usar la sentencia (for)
for(let i=0; i<numbers; i++){
    console.log(numbers[i]);
}
//Podemos hacer esta mismo operacion alrrebes 
for(let i=numbers.lenght -1; i>=0; i--){
    console.log(numbers[i]);
}














