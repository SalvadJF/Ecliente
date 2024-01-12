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

   console.log(datos);
});
