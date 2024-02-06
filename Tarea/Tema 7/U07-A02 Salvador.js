const sugerenciasCiudades =  document.getElementById('sugerencias');
async function sugerencia() {

    const peticionURL = './Ciudades.json';
    const peticion = new Request(peticionURL);

    const respuesta = await fetch(peticion);
    const sugerenciasTexto = await respuesta.text();

    const sugerencias = JSON.parse(sugerenciasTexto);

    sugerenciasCiudades.innerHTML = sugerencias

}

window.onchange(sugerencia())