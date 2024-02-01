let enviar = document.getElementById('enviar');
let mostrar = document.getElementById('mostrar');

class Alumno {
    constructor(nombre, modulo1, modulo2, modulo3) {
       this.nombre = nombre;
       this.modulo1 = modulo1;
       this.modulo2 = modulo2;
       this.modulo3 = modulo3;
    }
}

var alumnos = [];

function recogerDatos() {

    let nombre = document.getElementById('nombre').value;
    let modulo1 = document.getElementById('modulo1').value;
    let modulo2 = document.getElementById('modulo2').value;
    let modulo3 = document.getElementById('modulo3').value;

    alumnos.push(new Alumno(nombre, modulo1, modulo2, modulo3));

    limpiarCampos()

    // Si se envia un nuevo datos se activa de nuevo la generacion de Tablas
    mostrar.disable = true ? mostrar.disabled = false : '';
}

function limpiarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('modulo1').value = '';
    document.getElementById('modulo2').value = '';
    document.getElementById('modulo3').value = '';
}

function mostrarTabla() {
    let tabla = document.createElement("table");
    tabla.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Modulo 1</th>
            <th>Modulo 2</th>
            <th>Modulo 3</th>
        </tr>
    `;

    alumnos.forEach((alumno) => {
        let fila = tabla.insertRow();

        let celdaNombre = fila.insertCell();
        celdaNombre.textContent = alumno.nombre;

        let celdaModulo1 = fila.insertCell();
        celdaModulo1.textContent = alumno.modulo1;

        let celdaModulo2 = fila.insertCell();
        celdaModulo2.textContent = alumno.modulo2;

        let celdaModulo3 = fila.insertCell();
        celdaModulo3.textContent = alumno.modulo3;
    });

    document.body.appendChild(tabla);

    // Bloqueamos el boton de enviar para evitar la generacion de mas de una tabla
    mostrar.disabled = true;
}

enviar.addEventListener('click', recogerDatos);
mostrar.addEventListener('click', mostrarTabla);