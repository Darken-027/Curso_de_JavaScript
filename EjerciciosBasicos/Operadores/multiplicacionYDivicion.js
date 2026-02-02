const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa el primer numero: ", (a) => {
    rl.question("Ingresa el segundo numero: ", (b) => {

        const numero1 = Number(a);
        const numero2 = Number(b);

        const multiplicacion = numero1 * numero2;
        const division = numero1 / numero2;

        console.log("✅ La multiplicacion es: ", multiplicacion);
        console.log("✅ La division es: ", division);

        rl.close();
    });
});2