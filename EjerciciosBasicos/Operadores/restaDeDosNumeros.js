const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa el primer numero: ", (a) => {
    rl.question("Ingresa el segundo numero: ", (b) => {

        const numero1 = Number(a);
        const numero2 = Number(b);

        const resta = numero1 - numero2;
        console.log("✅ La resta es: ", resta);

        rl.close();
    })
})