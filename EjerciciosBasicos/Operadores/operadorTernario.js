const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa un número: ", (n) => {
  const num = Number(n);

  const mensaje = num >= 0 ? "✅ Es positivo o cero" : "❌ Es negativo";

  console.log(mensaje);

  rl.close();
});
