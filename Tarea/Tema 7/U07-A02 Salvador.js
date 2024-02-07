document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".input");
  const sugerencias = document.querySelector("#sugerencias");

  input.addEventListener("input", function () {
    const valor = this.value.trim().toLowerCase();
    if (valor.length === 0) {
      sugerencias.innerHTML = "";
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "Ciudades.json", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const ciudades = JSON.parse(xhr.responseText).ciudades;
        const sugerenciasFiltradas = ciudades.filter((ciudad) =>
          ciudad.toLowerCase().startsWith(valor)
        );
        mostrarSugerencias(sugerenciasFiltradas);
      }
    };
    xhr.send();
  });

  function mostrarSugerencias(sugerenciasArray) {
    sugerencias.innerHTML = "";
    if (sugerenciasArray.length === 0) {
      sugerencias.innerHTML = "<em>No se encontraron sugerencias</em>";
      return;
    }

    sugerenciasArray.forEach((ciudad) => {
      const span = document.createElement("span");
      span.textContent = ciudad;
      sugerencias.appendChild(span);

      // Agregar espacio después de cada sugerencia
      sugerencias.appendChild(document.createTextNode(" "));
    });
  }
});
