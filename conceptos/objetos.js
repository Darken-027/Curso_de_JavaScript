//Sintaxis
let persona = {
    name: "Juan",
    age: 24,
    alias: "Ahstell"
}

// Acceso a propiedades

// Notacion punto
console.log(persona.name)


// Notacion de corchetes

console.log(persona["age"])

//Modificar de propiedades de un objeto

persona.name = "Rachel"

console.log(persona.name)

//Modificacion de propiedades de un objeto

delete persona.age

console.log(persona)


// Nueva propiedad

persona.email = "torut1638@gmail.com"

console.log(persona)


let persona2 = {
    name: "Juan",
    age: 24,
    alias: "Ahstell",
    walk: function(){
        console.log("Persona caminando")
    }
}

persona2.walk()

//Anidacion de objetos 

let persona3 = {
    name: "Juan",
    age: 24,
    alias: "Ahstell",
    walk: function(){
        console.log("Persona caminando")
    },
    job:{
        name: "programador",
        exp: 15,
        work: function(){
        console.log("Persona trabaja")
        }
    }
}

console.log(persona3)


//Iteracion de objetos


//funciones como objetos

