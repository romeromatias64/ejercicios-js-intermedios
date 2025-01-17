// Crea un programa que solicite la fecha de nacimiento del usuario (en formato YYYY-MM-DD) y calcule su edad en días.

function ejercicio11() {
    const fechaNacimiento = prompt('Ingresá tu fecha de nacimiento en formato YYYY-MM-DD');

    const fechaNacimientoArray = fechaNacimiento.split('-');
    
    const fechaNacimientoDate = new Date(fechaNacimientoArray[0], fechaNacimientoArray[1] - 1, fechaNacimientoArray[2]);

    const fechaActual = new Date();

    const diferencia = fechaActual - fechaNacimientoDate;
    
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    
    console.log(`Tu edad en días es ${dias}`);
}