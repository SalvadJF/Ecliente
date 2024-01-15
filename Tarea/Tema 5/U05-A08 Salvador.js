function enviarGoogle() {
  window.location.href = "https://www.google.com";
 }

 // Evento que recoge los datos del Formulario
 document.querySelector('form').addEventListener('submit', e => {
   e.preventDefault();
   // Recogemos todos los datos del formulario usando FormData
   var datos = Object.fromEntries(
      new FormData(e.target)
   );
   // FormData solo recoge el ultimo checkbox seleccionado con el mismo nombre
   // Por ello lo eliminamos del objeto
   delete datos.dias
   // Recogemos los datos que esten checked de dias
   var dias = document.querySelectorAll('input[name="dias"]:checked');
   // Lo pasamos a un array
   var valores = Array.from(dias).map(cb => cb.value);

   // Añadimos el array dias al objeto datos
   datos.dias = valores

   // Creamos el cuerpo del correo con los datos del formulario
   var cuerpoCorreo = Object.entries(datos).map(([key, value]) => `${key}: ${value}`).join('\n');

   // Construimos el enlace "mailto:" con el cuerpo del correo
   var mailtoLink = `mailto:correo@prueba.com?subject=Datos%20del%20formulario&body=${encodeURIComponent(cuerpoCorreo)}`;

   // Abrimos el enlace en una nueva ventana o pestaña del navegador
   window.open(mailtoLink, '_blank');
   
   console.log(datos);
});
