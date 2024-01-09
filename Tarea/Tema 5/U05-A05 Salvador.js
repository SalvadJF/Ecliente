var imagen = document.getElementById("imagen");
var imagenOriginal = "imagen1.png";
var imagenNueva = "imagen2.png";


function presionarBoton() {
    imagen.src = imagenNueva;
}

function soltarBoton() {
  imagen.src = imagenOriginal;
}
