// Solicita al usuario un número entero y calcula la multiplicación de todos los números desde 1 hasta ese número.

function ejercicio4() {
    let numero = parseInt(prompt("Ingresá un número entero"));
    
    let resultado = 1;
    
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    
    console.log(`El resultado de multiplicar todos los números desde 1 hasta ${numero} es ${resultado}`);
}