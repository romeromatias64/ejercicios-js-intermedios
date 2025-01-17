// Genera un número aleatorio entre 1 y 50. Permite al usuario adivinar hasta 5 veces. Si falla,dale una pista: “Más alto” o “Más bajo”. Si adivina, felicítalo; si no, imprime el número al final.

function ejercicio12() {
    const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
    let adivino = false;

    for (let i = 0; i < 5; i++) {
        const intento = parseInt(prompt('Adiviná el número entre 1 y 50'));

        if (intento === numeroAleatorio) {
            adivino = true;
            break;
        } else if (intento < numeroAleatorio) {
            alert('Más alto');
        } else {
            alert('Más bajo');
        }
    }

    if (adivino) {
        alert(`¡Felicitaciones! ¡Adivinaste! El numero era ${numeroAleatorio}`);
    } else {
        alert(`El número era ${numeroAleatorio}`);
    }
}