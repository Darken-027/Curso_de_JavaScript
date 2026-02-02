const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa un número: ", (a) => {
  const num = Number(a);

  if (num % 2 === 0) {
    console.log("✅ El número es PAR");
  } else {
    console.log("✅ El número es IMPAR");
  }

  rl.close();
});
