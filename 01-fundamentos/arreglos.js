

// // const arr = new Array(10);
// // console.log(arr);
// // const arr = [];


// let juegos = ['Halo', 'War Thunder', 'the las of us', 'Gear of War'];
// console.log('Largo', juegos.length);

// let primero = juegos[2-2];
// let ultimo = juegos[juegos.length - 1];

// console.log({primero, ultimo});


// juegos.forEach((elemento, indice, arr) => {
//     console.log({elemento, indice, arr});
// });


// let nuevaLongitud = juegos.push('Zelda');
// console.log(nuevaLongitud, juegos);

// nuevaLongitud = juegos.unshift('Fire Emblem');
// console.log({nuevaLongitud, juegos});

// juegosBorrados = juegos.pop();
// console.log({juegosBorrados, juegos});

// console.log(juegos);
// let pos = 1;
// let juegoBorrado = juegos.splice(pos, 2);
// console.log({ juegoBorrado, juegos });

// let gearofwarindex = juegos.indexOf('the las of us');//CaSeSensItIvE => las mayuculas y minusculas hacen la diferencia
// console.log({gearofwarindex});

let arregloCosas = [
    true,
    123,
    "Andres",
    1+2,
    function(){},
    ()=>{},
    {a: 1},
    ['x', 'Megaman', 'Zero', 'Dr light', [
        'Dr Willy',
        'Woodman'
    ]],
];

//console.log({arregloCosas});
console.log(arregloCosas[7][4][1]);

//MAS DETALES SOBRE LOS ARREGLOS

let games = ['zelda', 'mario', 'metroid', 'crono'];
console.log('Largo', games.length);
let first = games[2 - 2];
let last = games[games.length - 1];

console.log({first, last});

games.forEach( (element, indic, arrg) => {
    console.log({element, indic, arrg});
} );

let newLongitude = games.push('{halo}');
console.log({newLongitude, games});

newLongitude = games.unshift('{Fire Emblem}');
console.log({newLongitude, games});

let deleteGame = games.pop();
console.log({deleteGame, games});


let position = 1;
let deleteGames = games.splice(position, 2)
console.log({deleteGames, games});

let gameIndex = games.indexOf('crono');
console.log({gameIndex});




















