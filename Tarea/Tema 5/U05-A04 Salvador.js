const cuadroMensaje = document.getElementById('mensaje');

// Evento de clic en el cuadro
cuadroMensaje.addEventListener('click', function() {
  // Función para cambiar el color de fondo a amarillo al hacer clic
  cuadroMensaje.style.backgroundColor = '#FFFF00';
});

// Evento de pulsar una tecla en el documento
document.addEventListener('keydown', function() {
  // Función para cambiar el color de fondo a azul al pulsar una tecla
  cuadroMensaje.style.backgroundColor = '#CCE6FF';
});

// Evento de mover el ratón en el cuadro
cuadroMensaje.addEventListener('mousemove', function() {
  // Función para restaurar el color de fondo a blanco al mover el ratón
  cuadroMensaje.style.backgroundColor = '#ffffff';
});