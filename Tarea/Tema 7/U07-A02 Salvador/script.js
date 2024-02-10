document.addEventListener("DOMContentLoaded", function() {
  const inputCiudad = document.getElementById("inputC");
  const listaSugerencias = document.getElementById("sugerencias");

  inputCiudad.addEventListener("input", function() {
      const ciudad = inputCiudad.value.trim().toLowerCase();
      if (ciudad.length === 0) {
          listaSugerencias.innerHTML = "";
          return;
      }

      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                  console.log(xhr.responseText); // Imprimir la respuesta recibida
                  try {
                      const sugerencias = JSON.parse(xhr.responseText);
                      mostrarSugerencias(sugerencias);
                  } catch (error) {
                      console.error("Error al analizar la respuesta JSON: " + error);
                  }
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
      sugerencias.forEach(function(ciudad) {
          const item = document.createElement("li");
          item.textContent = ciudad;
          listaSugerencias.appendChild(item);
      });
  }
});
