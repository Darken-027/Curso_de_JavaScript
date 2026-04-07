

// const arr = new Array(10);
// console.log(arr);
// const arr = [];


let juegos = ['Halo', 'War Thunder', 'the las of us', 'Gear of War'];
console.log('Largo', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});


juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});


let nuevaLongitud = juegos.push('Zelda');
console.log(nuevaLongitud, juegos);

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

juegosBorrados = juegos.pop();
console.log({juegosBorrados, juegos});

console.log(juegos);
let pos = 1;
let juegoBorrado = juegos.splice(pos, 2);
console.log({ juegoBorrado, juegos });

let gearofwarindex = juegos.indexOf('the las of us');//CaSeSensItIvE => las mayuculas y minusculas hacen la diferencia
console.log({gearofwarindex});


//TODO: Referencia













