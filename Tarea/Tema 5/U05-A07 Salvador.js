
var mensaje = document.getElementById("mensaje");
var imagen = document.getElementsByTagName("img")[0];

function error() {
  mensaje.innerHTML = "<h1>La imagen no se ha cargado correctamente</h1>"
}

function carga() {
  mensaje.innerHTML = "<h1>La imagen se ha cargado correctamente</h1>"
}

imagen.onload = function() {
  carga();
};

imagen.onerror = function() {
  error();
};
