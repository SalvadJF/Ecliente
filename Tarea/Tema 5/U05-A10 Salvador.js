function enviarGoogle() {
  window.location.href = "https://www.google.com";
 }
 
document.querySelector('.enviar').addEventListener('click', function(e) {
  e.preventDefault();
  // Se usa el preventDefault para evitar que se envie la informacion, pues no tiene destino y dara error
  let datos = {
     nombre: document.getElementById('nombre').value,
     mensaje: document.getElementById('mensaje').value,
     color: document.querySelector('input[name="rojo"]:checked') ||
            document.querySelector('input[name="verde"]:checked') ||
            document.querySelector('input[name="azul"]:checked'),
     asignatura: document.getElementById('asignatura').value,
     dias: document.querySelectorAll('input[name="dias"]:checked'),
     preferencia: document.getElementById('preferencia').value
  };

  switch (datos.asignatura) {
      case 'Matematicas': {
         alert('Se ha avisado a A');
         break;
      }
      case 'Lengua' : {
         alert('Se ha avisado a B')
         break;
      }
      case 'Ingles' : {
         alert('Se ha avisado a C')
         break
      }
      default:
         alert('No se a avisado a nadie')
         break
  }

  
 
  // Procesa y envía los datos por correo electrónico
  console.log(Object.values(datos));
});

