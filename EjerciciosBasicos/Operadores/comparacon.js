const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa el primer numero: ", (a) => {
    rl.question("Ingrese el segundo numero: ", (b) => {


        const numero1 = Number(a);
        const numero2 = Number(b);

        if(numero1 > numero2){
            console.log(numero1 , " es mayor que ", numero2);
        }else if(numero1 < numero2){
            console.log(numero2, " es mayot que ", numero1);
        }else {
            console.log("Ambos numeros son iguales");
        }
    });
});