let mensaje = document.getElementById("mensaje");
let imagen = document.getElementsByTagName('img');

function mensajeError() {
  mensaje.innerHTML = "<h1>La imagen no se ha podido cargar</h1>";
}

function mensajeConfirmacion() {
  mensaje.innerHTML = "<h1>La imagen se ha cargado correctamente</h1>";
}

imagen.addEventListener('error', mensajeError);
imagen.addEventListener('abort', mensajeError);
imagen.addEventListener('load', mensajeConfirmacion);