// Función para generar un array de diez números aleatorios entre 0 y 10
function generarArrayAleatorio() {

    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

}

// Función para filtrar valores menores a 8
function filtrarMenores8(array) {

    return array.filter(valor => valor < 8);

}

// Función para intercambiar valores impares por la cadena "impar"
function cambiarImpares(array) {

    return array.map(valor => (valor % 2 !== 0) ? "impar" : valor);

}



var numerosAleatorios;

function mostrarArray() {

    numerosAleatorios = generarArrayAleatorio();
    document.getElementById("arrayAleatorio").innerHTML = numerosAleatorios;

}

function mostrarFiltrado() {

    var menores8 = filtrarMenores8(numerosAleatorios);
    document.getElementById("arrayFiltrado").innerHTML = menores8;

}

function cambiarImpar() {

    var arrayImpar = cambiarImpares(numerosAleatorios);
    document.getElementById("arrayImpar").innerHTML = arrayImpar;

}
