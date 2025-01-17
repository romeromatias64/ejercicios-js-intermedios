// Dado un array de palabras, crea un programa que devuelva un nuevo array con las palabras que tengan más de 5 letras. Por ejemplo: ["casa", "programación", "sol", "javascript", “texto”, “html”, “bootstrap”, “css”, “nodejs”] debería devolver ["programación", "javascript", "bootstrap", "nodejs"].

function ejercicio2() {
    let palabras = ["casa", "programación", "sol", "javascript", "texto", "html", "bootstrap", "css", "nodejs"];

    let palabrasMas5Letras = palabras.filter(palabra => palabra.length > 5);

    console.log(`Palabras con más de 5 letras: ${palabrasMas5Letras}`);
}