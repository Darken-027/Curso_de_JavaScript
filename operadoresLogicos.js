const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa tu edad: ", (edadstr) => {
    rl.question("Tienes cedula (Si/No): ", (cedulastr) => {
        
        const edad = Number(edadstr);
        const tieneCedula = cedulastr.toLowerCase() === "si";

        if(edad >= 18 && tieneCedula) {
            console.log("Puede entrar");
        }else{
            console.log("No puede entrar");
        }

        rl.close();
     });
});