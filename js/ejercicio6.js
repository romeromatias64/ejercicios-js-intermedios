// Escribe un programa que solicite al usuario un número que represente grados Celsius conviértelo a Fahrenheit utilizando la fórmula: F = (C × 9/5) + 32.

function ejercicio6() {
    let celsius = parseInt(prompt("Ingresá un número que represente grados Celsius"));
    
    let fahrenheit = (celsius * 9 / 5) + 32;
    
    console.log(`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit`);
}