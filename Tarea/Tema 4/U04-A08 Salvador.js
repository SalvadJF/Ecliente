var array = [];
var tripleArray = []
 
 // Crear un vector con 5 valores numéricos
function generarArrayAleatorio() {

    return Array.from({ length: 5 }, () => Math.floor(Math.random() * (30 - (-10) + 1))+(-10));

}

function crearArray() {

    array = generarArrayAleatorio();
    document.getElementById("arrayNuevo").innerHTML = array.join(', ');

}

// Comprueba si son todos enteros positivos
function comprobarArray() {

    var arrayPositivo = array.every(value => Number.isInteger(value) && value > 0);

    if (arrayPositivo) {

        document.getElementById("comprobacionArray").innerHTML = `Son todos positivos`
    }
    else {
        document.getElementById("comprobacionArray").innerHTML = `No son todos positivos`
    }
}

// Devuelve en un nuevo array el triple sus valores
function multiplicarArray() {

    tripleArray = array.map(valor => valor * 3)
    document.getElementById("arrayMultiplicado").innerHTML = tripleArray.join(', ');

}

// Calcula el resultado de multiplicar todos los valores del nuevo array
function totalArray() {

    var totalArray = tripleArray.reduce((acc, valor) => acc * valor, 1);
    document.getElementById("arrayTotal").innerHTML = `Total = ${totalArray}`;


}
