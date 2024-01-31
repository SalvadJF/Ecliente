let form = document.forms[0];
let letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

form.addEventListener("change", function () {
  // Validacion del DNI
  if (!dni.checkValidity()) {
      if(dni.validity.valueMissing){
        dni.setCustomValidity('El campo DNI no puede estar Vacio')
      }
      if (dni.validity.patterMismatch && !comprobarLetra(dni.value)){
        dni.setCustomValidity("El patron del Dni no es corrrecto")
      }
  }
  // Validacion del Nombre
  if (!nombre.checkValidity()) {
    if(nombre.validity.valueMissing){
      nombre.setCustomValidity('El campo Nombre no puede estar Vacio')
    }
    if (nombre.validity.patterMismatch){
      nombre.setCustomValidity("El patron del Nombre no es corrrecto")
    }
  }
  // Validacion del Apellido
  if (!apellido.checkValidity()) {
    if(apellido.validity.valueMissing){
      apellido.setCustomValidity('El campo Apellido no puede estar Vacio')
    }
    if (apellido.validity.patterMismatch){
      apellido.setCustomValidity("El patron del Apellido no es corrrecto")
    }
  }

  // Validacion del Lugar de Nacimiento
  if (!lnac.checkValidity()) {
    if(lnac.validity.valueMissing){
      lnac.setCustomValidity('El campo no Lugar de nacimiento puede estar Vacio')
    }
    if (lnac.validity.patterMismatch){
      lnac.setCustomValidity("El patron del Lugar de nacimiento no es corrrecto")
    }
  }

});


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Recogemos todos los datos del formulario usando FormData
    var datos = Object.fromEntries(new FormData(e.target));
  
    // Creamos el cuerpo del correo con los datos del formulario
    var datos = Object.entries(datos)
      .map(([key, value]) => `${key}: ${value}`)
      .join(" \n");
  
    var mailtoLink = "mailto:Rafael.figueroa@iesdonana.org?subject=Datos%20del%20formulario&body="+datos;
    
    // Abrimos el enlace en una nueva ventana o pestaña del navegador
    window.open(mailtoLink, "_blank");


    // Añadir los datos a la cookie
    document.cookie = `actividadCookie=${encodeURIComponent(datos)}; expires=; path=/`;

    alert('Cookie Creada')
  
  });


function comprobarLetra(dni) {
    if (dni.charAt(8) != letras[dni.substring(0, 8) % 23]) {
      return false;
    }
    return true;
  }

var dni = document.getElementById('dni');

function visDNI() {
    dni.setAttribute('hidden')
}

  // Método para obtener la cookie por su nombre
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookiesArray = decodedCookie.split(';');
  for (let i = 0; i < cookiesArray.length; i++) {
     let cookie = cookiesArray[i];
     while (cookie.charAt(0) == ' ') {
       cookie = cookie.substring(1);
     }
     if (cookie.indexOf(name) == 0) {
       return cookie.substring(name.length, cookie.length);
     }
  }
  return "";
 }
 