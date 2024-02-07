document.addEventListener('DOMContentLoaded', function () {
    var inputCiudad = document.getElementById('inputC');
    var sugerenciasList = document.getElementById('sugerencias');

    inputCiudad.addEventListener('keyup', function () {
        var inputText = inputCiudad.value.trim().toLowerCase();
        if (inputText.length === 0) {
            sugerenciasList.innerHTML = '';
            return;
        }

        fetch('consultaC.php?ciudad=' + inputText)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Error en la solicitud.');
                }
                return response.json();
            })
            .then(function (data) {
                mostrarSugerencias(data.ciudades, inputText);
            })
            .catch(function (error) {
                console.error('Error:', error);
            });
    });

    function mostrarSugerencias(ciudades, inputText) {
        var sugerencias = ciudades.filter(function (ciudad) {
            return ciudad.toLowerCase().startsWith(inputText);
        });

        sugerenciasList.innerHTML = '';
        sugerencias.forEach(function (sugerencia) {
            var li = document.createElement('li');
            li.textContent = sugerencia;
            sugerenciasList.appendChild(li);
        });
    }
});
