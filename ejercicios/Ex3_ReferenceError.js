// Ejercicio 3: Resolver problemas de referenci de variables

// Error tipico
// ReferenceError: <<identificador>> is not defined

//console(mensaje); ReferenceError: <<identificador>> is not defined


function mostrarSaludo(){
    var mensaje = 'Hola como estas, este codigo se esta ejecutando dentro de la funcion';

    console.log(mensaje);
}

mostrarSaludo();

//console.log(mensaje); ReferenceError: <<identificador>> is not defined


var numero = 7;

function mostrarNumero(){
    console.log("El numero es: " + numero);
}

mostrarNumero();










