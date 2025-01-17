// Crea un programa que permita jugar al usuario "Piedra, Papel o Tijera" contra la computadora. La computadora debe elegir una opción aleatoria y el programa debe indicar quién ganó.

function ejercicio13() {
    let opciones = ["piedra", "papel", "tijera"];
    
    let opcionUsuario = prompt("Elija una opción: piedra, papel o tijera");

    while (!opciones.includes(opcionUsuario)) {
        opcionUsuario = prompt("Por favor, elija una opción válida: piedra, papel o tijera");
    }
    
    let opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
    
    if (opcionUsuario === opcionComputadora) {
        console.log("Empate");
    } else if (opcionUsuario === "piedra" && opcionComputadora === "tijera" || opcionUsuario === "papel" && opcionComputadora === "piedra" || opcionUsuario === "tijera" && opcionComputadora === "papel") {
        console.log(`¡Ganaste! La computadora eligió ${opcionComputadora}`);
    }   else {
        console.log(`Perdiste :( La computadora eligió ${opcionComputadora}`);
    }
}
