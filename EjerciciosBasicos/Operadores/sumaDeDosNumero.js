//Pedirdos dos numero y mostrar la suma de ambos numeros

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el primer numero: ", (a) => {
  rl.question("Ingrese el segundo numero: ", (b) => {

    const num1 = Number(a);
    const num2 = Number(b);

    const suma = num1 + num2;
    console.log("✅ La suma es: ", suma);
    
    rl.close();
  });
});
