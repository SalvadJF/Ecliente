let mensaje = document.getElementById("mensaje");
let imagen = document.getElementsByTagName('img');

function mensajeError() {
  mensaje.innerHTML = "<h1>La imagen no se ha podido cargar</h1>";

}

function mensajeConfirmacion() {
  mensaje.innerHTML = "<h1>La imagen se ha cargado correctamente</h1>";

}

if (imagen.addEventListener('error')) {
  mensajeError()
}
if (imagen.addEventListener('abort')) {
  mensajeError()
}
if (imagen.addEventListener('load')) {
  mensajeConfirmacion()
}
