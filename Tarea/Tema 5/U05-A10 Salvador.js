function enviarGoogle() {
  window.location.href = "https://www.google.com";
}

// Evento que recoge los datos del Formulario
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // Recogemos todos los datos del formulario usando FormData
  var datos = Object.fromEntries(new FormData(e.target));

  // Creamos el cuerpo del correo con los datos del formulario
  var cuerpoCorreo = Object.entries(datos)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  var mailtoLink = "";

  switch (datos.asignatura) {
    case "programacion":
      mailtoLink = `mailto:Ricardo@donana.com?subject=Datos%20del%20formulario&body=${encodeURIComponent(
        cuerpoCorreo
      )}`;
      alert("Se ha enviado el formulario a Ricardo");
      break;

    case "base_de_datos":
      mailtoLink = `mailto:MiguelA@donana.com?subject=Datos%20del%20formulario&body=${encodeURIComponent(
        cuerpoCorreo
      )}`;
      alert("Se ha enviado el formulario a Miguel Angel");
      break;

    case "sistemas":
      mailtoLink = `mailto:JoseL@donana.com?subject=Datos%20del%20formulario&body=${encodeURIComponent(
        cuerpoCorreo
      )}`;
      alert("Se ha enviado el formulario a Jose Luis");
      break;

    default:
      alert("No se ha enviado el formulario");
      break;
  }

  // Abrimos el enlace en una nueva ventana o pestaña del navegador
  window.open(mailtoLink, "_blank");

  console.log(datos);
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencia al select y a los checkboxes
  var select = document.getElementById("preferencia");
  var checkboxes = document.querySelectorAll('input[name="dias"]');

  // Evento para actualizar las opciones del select cuando cambia un checkbox
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      actualizarOpcionesSelect();
    });
  });

  // Función para actualizar las opciones del select
  function actualizarOpcionesSelect() {
    // Limpiar las opciones actuales
    select.innerHTML = "";

    // Filtrar los checkboxes seleccionados y agregar la última opción al select
    var ultimoCheckboxSeleccionado = null;
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        ultimoCheckboxSeleccionado = checkbox;
      }
    });

    if (ultimoCheckboxSeleccionado) {
      var option = document.createElement("option");
      option.value = ultimoCheckboxSeleccionado.value;
      option.text =
        ultimoCheckboxSeleccionado.value.charAt(0).toUpperCase() +
        ultimoCheckboxSeleccionado.value.slice(1);
      select.add(option);
    }
  }

  // Llamar a la función inicialmente para establecer las opciones iniciales
  actualizarOpcionesSelect();
});
