document.addEventListener("DOMContentLoaded", function () {
  const inputCiudad = document.getElementById("inputC");
  const listaSugerencias = document.getElementById("sugerencias");

  // Cuando se introduce algo en el campo input se activa el evento
  inputCiudad.addEventListener("input", function () {
    let ciudad = inputCiudad.value.trim().toLowerCase();
    if (ciudad.length === 0) {
      listaSugerencias.innerHTML = "";
      return;
    }

      // Se crea un objeto con la solicitud HTTP
      const xhr = new XMLHttpRequest();

      // Esta funcion se ejecuta cada vez que cambia el estado de la solicitud AJAX
      xhr.onreadystatechange = function() {
          // Si la solicitud se completa
          if (xhr.readyState === XMLHttpRequest.DONE) {
              // Si la solicitud tiene exito
              if (xhr.status === 200) {
                  const sugerencias = JSON.parse(xhr.responseText);
                  mostrarSugerencias(sugerencias);
              // Si falla la solicitud
              } else {
                  console.error("Error en la solicitud: " + xhr.status);
              }
          }
      };
      // Crea una solicitud GET a la URL, que en este caso es un PHP
      xhr.open("GET", `consultaC.php?ciudad=${ciudad}`, true);
      // Envia la solicitud al servidor
      xhr.send();
  });

  function mostrarSugerencias(sugerencias) {
    listaSugerencias.innerHTML = "";
    // Si no coincide nada con la sugerencias se devuelve un mensaje
    if (sugerencias.length === 0) {
      const item = document.createElement("li");
      item.textContent = "No hay sugerencias";
      listaSugerencias.appendChild(item);
    // Devuelve la sugerencias que coincidan
    } else {
      sugerencias.forEach(function (ciudad) {
        const item = document.createElement("li");
        item.textContent = ciudad;
        listaSugerencias.appendChild(item);
      });
    }
  }
});
