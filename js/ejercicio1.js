// Dado un array de números [10, 20, 30, 40, 50, 60], crea un programa que calcule e imprima el promedio de los números en el array.

function ejercicio1() {
    const numeros = [10, 20, 30, 40, 50, 60];

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    const promedio = suma / numeros.length;
    console.log(`El promedio de los números en el array es: ${promedio}`);
}