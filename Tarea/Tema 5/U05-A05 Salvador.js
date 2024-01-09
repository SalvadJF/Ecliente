var imagen = document.getElementById("imagen");
var imagenOriginal = "imagen1.jpg";
var imagenNueva = "imagen2.jpg";
var pulsado = false;

function cambiarImagen() {
    if (pulsado) {
        imagen.src = imagenNueva;
    }
}

function presionarBoton() {
    pulsado = true;
}

function soltarBoton() {
    pulsado = false;
    imagen.src = imagenOriginal;
}