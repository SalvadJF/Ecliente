document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('votar').addEventListener('click', function (event) {
        event.preventDefault();
        var selectedOption = document.querySelector('input[name="equipo"]:checked').value;
        fetch('encuesta_voto.php?voto=' + selectedOption)
            .then(response => response.text())
            .then(data => {
                console.log(data);
                // Actualizar la interfaz con los resultados obtenidos
            })
            .catch(error => console.error('Error:', error));
    });
});