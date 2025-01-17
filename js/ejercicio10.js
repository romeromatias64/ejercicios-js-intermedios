// Dado un array con elementos repetidos [1, 2, 3, 1, 4, 5, 2, 6, 5, 1, 2, 4, 2, 1,5, 8, 7, 4], crea un programa que devuelva un nuevo array sin duplicados.

function ejercicio10() {
    const array = [1, 2, 3, 1, 4, 5, 2, 6, 5, 1, 2, 4, 2, 1, 5, 8, 7, 4];
    const arraySinDuplicados = [];
    
    for (let i = 0; i < array.length; i++) {
        if (!arraySinDuplicados.includes(array[i])) {
            arraySinDuplicados.push(array[i]);
        }
    }
    
    console.log(`El nuevo array sin duplicados es [${arraySinDuplicados}]`);
}