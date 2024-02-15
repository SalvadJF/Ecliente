document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('votar').addEventListener('click', function (event) {
        event.preventDefault();
        let seleccion = document.querySelector('input[name="equipo"]:checked');
        if (seleccion) {
            fetch('encuesta_voto.php?resultados=' + seleccion.value)
                .then(response => response.text())
                .then(datos => {

                    // Convertir los votos a porcentajes
                    let totalVotos = Object.values(datos).reduce((a, b) => a + b, 0);
                    let porcentajes = [];
                    Object.values(datos).forEach(dato => {
                        let porcentaje = (dato / totalVotos) * 100;
                        porcentajes.push(Number(porcentaje.toFixed(2)));
                    });

                    let item = document.createElement("p");
                    resultadoReal.appendChild(item.textContent = datos[0]);
                    resultadoBar.appendChild(item.textContent = datos[1]);
                    resultadoBetis.appendChild(item.textContent = datos[2]);
                    resultadoSevilla.appendChild(item.textContent = datos[3]);
                    votosTotales.appendChild(item.textContent = totalVotos)
                })
                .catch(error => console.error('Error:', error));
        } else {
            console.log('Por favor, selecciona un equipo antes de votar.');
        }
    });
});