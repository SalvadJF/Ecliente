const cuadroMensaje = document.getElementById("mensaje");

// Cambia el color de fondo a amarillo al hacer clic
cuadroMensaje.addEventListener("click", function () {
  cuadroMensaje.style.backgroundColor = "#FFFF00";
});

// Cambia el color de fondo a azul al pulsar una tecla
document.addEventListener("keydown", function () {
  cuadroMensaje.style.backgroundColor = "#CCE6FF";
});

// Restaura el color de fondo a blanco al mover el ratón
cuadroMensaje.addEventListener("mousemove", function () {
  cuadroMensaje.style.backgroundColor = "#ffffff";
});
