// Pide al usuario una frase y cuenta cuántas palabras tiene.

function ejercicio7() {
    const frase = prompt("Ingresá una frase");
    const palabras = frase.split(" ");

    console.log(`La frase ${frase} tiene ${palabras.length} palabras`);
}