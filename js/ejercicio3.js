// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (hay que decir todos por los que es divisible)

function ejercicio3() {
    let numero = parseInt(prompt("Ingresá un número:"));

    if (numero % 2 === 0) {
        console.log(`El número ${numero} es divisible por 2`);
    }
    if (numero % 3 === 0) {
        console.log(`El número ${numero} es divisible por 3`);
    }
    if (numero % 5 === 0) {
        console.log(`El número ${numero} es divisible por 5`);
    }
    if (numero % 7 === 0) {
        console.log(`El número ${numero} es divisible por 7`);
    }
    if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !== 0) {
        console.log(`El número ${numero} no es divisible por 2, 3, 5 ni 7`);
    }
}