let form = document.forms[0];
let letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

form.addEventListener("change", function () {
  // Validacion del DNI
  if (dni.value !== "" && !form.elements["dni"].checkValidity()) {
    dni.value = "";
    alert("DNI Incorrecto");
  } else if (dni.value !== "" && !comprobarLetra(dni.value)) {
    dni.value = "";
    alert("Letra incorrecta");
  }
  // Validacion del Nombre
  if (nombre.value !== "" && !form.elements["nombre"].checkValidity()) {
    nombre.value = "";
    alert("Nombre Invalido");
  }

  // Validacion del Apellido
  if (apellido.value !== "" && !form.elements["apellido"].checkValidity()) {
    apellido.value = "";
    alert("Apellido Invalido");
  }

  // Validacion del Lugar de Nacimiento
  if (lnac.value !== "" && !form.elements["lnac"].checkValidity()) {
    lnac.value = "";
    alert("Lugar de Nacimiento Invalido");
  }

});


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Recogemos todos los datos del formulario usando FormData
    var datos = Object.fromEntries(new FormData(e.target));
  
    // Creamos el cuerpo del correo con los datos del formulario
    var cuerpoCorreo = Object.entries(datos)
      .map(([key, value]) => `${key}: ${value}`)
      .join(" \n");
  
    var mailtoLink = "mailto:Rafael.figueroa@iesdonana.org?subject=Datos%20del%20formulario&body="+cuerpoCorreo;
    
    console.log(cuerpoCorreo)
    // Abrimos el enlace en una nueva ventana o pestaña del navegador
    window.open(mailtoLink, "_blank");
  
  });


function comprobarLetra(dni) {
    if (dni.charAt(8) != letras[dni.substring(0, 8) % 23]) {
      return false;
    }
    return true;
  }

var dni = document.getElementById('dni');

function visDNI() {
  

 }

  