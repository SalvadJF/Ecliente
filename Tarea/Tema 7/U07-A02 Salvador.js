var ciudad = document.getElementById('ciudad');
var sugerencias = document.getElementById('sugerencias');

ciudad.addEventListener('keyup', () => {
    let ciudadNombre = ciudad.value.trim();
    if (ciudadNombre.length >= 2) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `./ciudadessugerencias.php?city=${ciudadNombre}`);
        xhr.onload = () => {
            if (xhr.status === 200) {
                let ciudadLista = JSON.parse(xhr.responseText);
                displaySugerencias(ciudadLista);
            }
        };
        xhr.send();
    } else {
        sugerencias.innerHTML = '';
        sugerencias.style.display = 'none';
    }
});

function displaySugerencias(ciudadLista) {
    sugerencias.innerHTML = '';
    if (ciudadLista.length > 0) {
        sugerencias.style.display = 'block';
        ciudadLista.forEach(city => {
            let div = document.createElement('div');
            div.textContent = city;
            div.addEventListener('click', () => {
                ciudad.value = city;
                sugerencias.innerHTML = '';
                sugerencias.style.display = 'none';
            });
            sugerencias.appendChild(div);
        });
    } else {
        sugerencias.style.display = 'none';
    }
}