// Función para convertir los votos a porcentajes y actualizar los elementos HTML
function actualizarResultados(datos) {
    // Parsear los datos recibidos del servidor
    let votos = datos.split('||').map(Number);
    
    // Calcular el total de votos
    let totalVotos = votos.reduce((a, b) => a + b, 0);

    // Verificar si hay votos antes de calcular porcentajes
    if (totalVotos > 0) {
        // Calcular porcentajes solo si hay votos
        let porcentajes = votos.map(voto => ((voto / totalVotos) * 100).toFixed(2) + "%");

        // Actualizar los elementos HTML con los porcentajes
        document.getElementById("resultadoReal").textContent = porcentajes[0];
        document.getElementById("resultadoBar").textContent = porcentajes[1];
        document.getElementById("resultadoBetis").textContent = porcentajes[2];
        document.getElementById("resultadoSevilla").textContent = porcentajes[3];
    } else {
        // Si no hay votos, mostrar mensaje de error
        console.error('No se han registrado votos aún.');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('votar').addEventListener('click', function (event) {
        event.preventDefault();
        let seleccion = document.querySelector('input[name="equipo"]:checked');
        if (seleccion) {
            // Realizar la solicitud fetch al archivo PHP
            fetch('encuesta_voto.php?voto=' + seleccion.value)
                .then(response => response.text())
                .then(data => actualizarResultados(data))
                .catch(error => console.error('Error:', error));
        } else {
            console.log('Por favor, selecciona un equipo antes de votar.');
        }
    });
});