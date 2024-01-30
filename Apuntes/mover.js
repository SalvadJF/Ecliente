var imagen = document.getElementById("imagen");
var offsetX, offsetY, originalX, originalY;

// Variable para verificar si se está arrastrando la imagen
var mover = false;

function iniciarArrastre(e) {
  e.preventDefault();
  offsetX = e.clientX;
  offsetY = e.clientY;
  var rect = imagen.getBoundingClientRect();
  originalX = rect.x;
  originalY = rect.y;
  document.addEventListener("mousemove", arrastrarImagen);
  document.addEventListener("mouseup", detenerArrastre);
}

function arrastrarImagen(e) {
  var nuevoX = originalX + e.clientX - offsetX;
  var nuevoY = originalY + e.clientY - offsetY;
  imagen.style.left = nuevoX + "px";
  imagen.style.top = nuevoY + "px";
}

function detenerArrastre() {
  document.removeEventListener("mousemove", arrastrarImagen);
  document.removeEventListener("mouseup", detenerArrastre);
}

imagen.addEventListener("mousedown", function (e) {
  imagen.src = "Imagen2.png";
  iniciarArrastre(e);
});

imagen.addEventListener("mouseup", function () {
  imagen.src = "Imagen1.png";
});
