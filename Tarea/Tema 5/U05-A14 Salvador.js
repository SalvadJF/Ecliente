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
  // Validacion de Fecha .No es necesario porque el campo input=date ya lo hace

  // Validacion del Email
  if (email.value !== "" && !form.elements["email"].checkValidity()) {
    email.value = "";
    alert("Email Invalido");
  }

  // Validacion de Pagina Web
  if (pweb.value !== "" && !form.elements["pweb"].checkValidity()) {
    pweb.value = "";
    alert("Pagina Web Invalida");
  }

  // Validacion de las Contraseñas
  if (contra.value !== "" && !form.elements["contra"].checkValidity()) {
    contra.value = "";
    alert("Contraseña Invalida");
  }
  if (contraConfirm.value != '' && contra.value !== contraConfirm.value) {
    contraConfirm.value = "";
    alert("Las contraseñas ingresadas no coinciden.");
  }
});

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
 
 // Función para ver los datos de la cookie
 function verDatosCookie() {
  let datosCookie = getCookie("actividadCookie");
  if (datosCookie) {
     alert(datosCookie);
  } else {
     alert("No hay datos de cookie.");
  }
 }
 
 form.addEventListener('submit', function(e) {
 
  // Recoger los datos del formulario
  let datos = Object.fromEntries(new FormData(e.target));
 
  // Almacenar los datos del formulario
  let datosCookie = Object.entries(datos)
     .map(([key, value]) => `${key}: ${value}`)
     .join(" \n");
 
  // Añadir los datos a la cookie
  document.cookie = `actividadCookie=${encodeURIComponent(datosCookie)}; expires=; path=/`;
 
  alert('Cookie Creada')
 
 })

function comprobarLetra(dni) {
  if (dni.charAt(8) != letras[dni.substring(0, 8) % 23]) {
    return false;
  }
  return true;
}
