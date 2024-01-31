var contenedor = document.getElementById("contenedor");
var offsetX, offsetY, originalX, originalY;

function iniciarArrastre(e) {
  e.preventDefault();
  offsetX = e.clientX;
  offsetY = e.clientY;
  let rect = contenedor.getBoundingClientRect();
  originalX = rect.x;
  originalY = rect.y;
  document.addEventListener("mousemove", arrastrarTexto);
  document.addEventListener("mouseup", detenerArrastre);
}

function arrastrarTexto(e) {
  let nuevoX = originalX + e.clientX - offsetX;
  let nuevoY = originalY + e.clientY - offsetY;
  contenedor.style.left = nuevoX + "px";
  contenedor.style.top = nuevoY + "px";
}

function detenerArrastre() {
  document.removeEventListener("mousemove", arrastrarTexto);
}

contenedor.addEventListener("mousedown", function (e) {
  document.getElementById("texto").innerHTML = 'TEXTO NUEVO'
  iniciarArrastre(e);
});

contenedor.addEventListener("mouseup", function () {
  document.getElementById("texto").innerHTML = 'TEXTO ORIGINAL'
});
