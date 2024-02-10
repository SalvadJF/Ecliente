document.addEventListener("DOMContentLoaded", function () {
  const inputCiudad = document.getElementById("inputC");
  const listaSugerencias = document.getElementById("sugerencias");

  inputCiudad.addEventListener("input", function () {
    let ciudad = inputCiudad.value.trim().toLowerCase();
    if (ciudad.length === 0) {
      listaSugerencias.innerHTML = "";
      return;
    }

      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                  const sugerencias = JSON.parse(xhr.responseText);
                  mostrarSugerencias(sugerencias);
              } else {
                  console.error("Error en la solicitud: " + xhr.status);
              }
          }
      };
      xhr.open("GET", `consultaC.php?ciudad=${ciudad}`, true);
      xhr.send();
  });

  function mostrarSugerencias(sugerencias) {
    listaSugerencias.innerHTML = "";
    if (sugerencias.length === 0) {
      const item = document.createElement("li");
      item.textContent = "No hay sugerencias";
      listaSugerencias.appendChild(item);
    } else {
      sugerencias.forEach(function (ciudad) {
        const item = document.createElement("li");
        item.textContent = ciudad;
        listaSugerencias.appendChild(item);
      });
    }
  }
});
