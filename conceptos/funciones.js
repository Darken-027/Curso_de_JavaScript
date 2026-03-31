function myFunctionHelloName(name){
    console.log(`Hola, ${name}!`)
}

myFunctionHelloName("Rachel");

//funciones anonimas son funciones que no tienen un nombre definido

const myFuncion2 = function (name){
    console.log(`hello ${name}`)
}
myFuncion2("Hola Juan");

// Arrow functions es una forma mas consiza de escribir funciones

const myfuncion3 = (name) =>{
    console.log(`hello ${name}`)
}

myfuncion3("dolores");



// Arrow function 
const myFuncion4 = (name) => console.log(`hola, ${name}`);
myFuncion4("Petter");


//Parametros

function sum(a,b){
    console.log(a+b);
}
sum(4,4);

function defaultFunction(a = 0,b = 0){
    console.log(a+b);
}
defaultFunction();


//Retorno de valores


// funciones anidadas

function externa(){
    console.log("Funcion externa")
    function interna(){
        console.log("Funcion interna");
        interna()
    }
}

externa()

// Funciones de orden superior