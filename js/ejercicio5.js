// Dado un array de números [15, 42, 3, 18, 90, 67, 29], escribe un programa que encuentre e imprima el segundo número más grande del array.

function ejercicio5() {
    let numeros = [15, 42, 3, 18, 90, 67, 29];
    
    let numerosOrdenados = numeros.sort((a, b) => b - a);
    
    console.log(`El segundo número más grande del array es ${numerosOrdenados[1]}`);
}