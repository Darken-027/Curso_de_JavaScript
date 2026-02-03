const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el primer numero: ", (a) => {
    rl.question("Ingrese el segundo numero: ", (b) => {

        const numero1 = Number(a);
        const numero2 = Number(b);

        if(numero1 > numero2){
            console.log("✅", num1, "es mayor que", numero2);
        }else if(numer1 < numero2){
            console.log("✅", num2, "es mayor que", num1);
        }else {
            console.log("✅ Ambos números son iguales");
        }
        rl.close();
    });
});