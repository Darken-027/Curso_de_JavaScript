// Cadenas de texto (String)
let nombre = "Bariszon";
let alias = "Ahstell";
let email = "torut1638@gmail.com";

//Numeros (numbers)
let edad = 23;
let altura = 1.70;

//Booleanos (Boolean)
let esUnEstudiante = false;
let esUnProfesor = true;

//Dato no definido (undefined)
let indefinido
console.log(indefinido); // Muestra 'undefined' en la consola

//valor nulo (null)
let numeroNulo = null;

//Symbol
let MiSimbolo = Symbol("miSimboloUnico");

// Gran Enero (BigInt)
let myBigInt = 9007199254741991322354923856239562953692359265923569256;
let myBigInt2 = 90071992547419999328386462321924672343342112837234724888823461n;

//Mostramos lo tipos de datos en consola
console.log(typeof nombre);
console.log(typeof MiSimbolo);
console.log(typeof numeroNulo);
console.log(typeof esUnEstudiante);
console.log(typeof null);

//Tipado dinamico

let foo = 42; //let ahora es un numero
foo = "bar"; //foo ahora es string
foo = true; //foo ahora es booleano

//Estructuras y tipos de datos

//El último estándar ECMAScript define nueve tipos:
    //Seis tipos de datos primitivos, controlados por el operador typeof:
    // #Undefined: typeof instance === "undefined"
    // #Boolean: typeof instance === "boolean"
    // #Number: typeof instance === "number"
    // #String: typeof instance === "string"
    // #BigInt: typeof instance === "bigint"
    // #Symbol: typeof instance === "symbol"

//Valores primitivos

//Tipo Boolean
//Boolean representa una entidad lógica y puede tener dos valores: true y false

//Tipo Null
//El tipo Null tiene exactamente un valor: null

//Tipo Undefined
//Una variable a la que no se le ha asignado un valor tiene el valor undefined

//Tipo Number
/*
    ECMAScript tiene dos tipos numéricos integrados: Number y BigInt
    El tipo Number es un valor en formato binario de 64 bits de doble precisión IEEE 754 (números entre -(253 - 1) y 253 - 1). 
    Además de representar números de punto flotante, el tipo Number tiene tres valores simbólicos: +Infinity, -Infinity y NaN 
    ("Not a Number" o No es un número).
    Para verificar el valor disponible más grande o el valor más pequeño disponible dentro de ±Infinity, puedes usar las constantes 
    Number.MAX_VALUE o Number.MIN_VALUE.
*/
    
//Tipo BigInt
/*
    El tipo BigInt es un primitivo numérico en JavaScript que puede representar números enteros con precisión arbitraria. Con BigInts, puedes almacenar y operar de forma segura en números enteros grandes incluso más allá del límite seguro de enteros para Numbers.
    Un BigInt se crea agregando n al final de un número entero o llamando al constructor.
    Puedes obtener el valor más seguro que se puede incrementar con Numbers utilizando la constante Number.MAX_SAFE_INTEGER. Con la introducción de BigInts, puedes operar con números más allá de Number.MAX_SAFE_INTEGER.
 */

//Tipo String
/*
     l tipo String de JavaScript se utiliza para representar datos textuales. Es un conjunto de "elementos" de valores enteros sin signo de 16 bits. Cada elemento del String ocupa una posición en la cadena. El primer elemento está en el índice 0, el siguiente en el índice 1, y así sucesivamente. La longitud de una cadena es el número de elementos que contiene.

    A diferencia de algunos lenguajes de programación (tal como C), las cadenas de JavaScript son inmutables. Esto significa que una vez que se crea una cadena, no es posible modificarla.
*/

//Tipo Symbol
/*
    Un símbolo es un valor primitivo único e inmutable y se puede utilizar como clave de una propiedad de objeto (ve más abajo). En algunos lenguajes de programación, los símbolos se denominan "átomos".
*/

//Objetos

//En ciencias de la computación, un objeto es un valor en la memoria al que posiblemente hace referencia un identificador.







