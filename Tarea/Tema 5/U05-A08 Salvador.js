function enviarGoogle() {
  window.location.href = "https://www.google.com";
 }

document.querySelector('form').addEventListener('submit', function(event) {
   event.preventDefault();
   var form = event.target;
   var datos = new FormData(form);
   var mensaje = `Mensaje: ${datos.get('mensaje')}\nColor: ${datos.get('color')}\nAsignatura: ${datos.get('asignatura')}\nDías: ${[...datos.getAll('dias')]}\nPreferencia: ${datos.get('preferencia')}`;
   console.log(mensaje)
   var enviarMail = `mailto:destinatario@ejemplo.com?subject=Nuevo mensaje del formulario&body=${decodeURIComponent(mensaje)}`;
   window.location.href = enviarMail;
});
