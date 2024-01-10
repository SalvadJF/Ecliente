function enviarGoogle() {
  window.location.href = 'https://www.google.com';
}

function limpiarFormulario() {
  document.getElementById('nombre').value = '';
  document.getElementById('mensaje').value = '';
  document.getElementById('rojo').checked = false;
  document.getElementById('verde').checked = false;
  document.getElementById('azul').checked = false;
  document.getElementById('lunes').checked = false;
  document.getElementById('martes').checked = false;
  document.getElementById('miercoles').checked = false;
  document.getElementById('jueves').checked = false;
  document.getElementById('viernes').checked = false;
  document.getElementsByName('asignatura')[0].selectedIndex = 0;
  document.getElementsByName('preferencia')[0].selectedIndex = 0;
}