 // Función para recoger los datos del usuario y mostrar la tabla
 function recogerDatos() {
    // Crear un array multidimensional para almacenar los datos de los alumnos
    var datosAlumnos = [];

    // Recoger datos del usuario
    for (var i = 0; i < 5; i++) {
        var nombre = prompt("Ingrese el nombre del alumno " + (i + 1));
        var notas = [];

        for (var j = 0; j < 3; j++) {
            var nota = parseFloat(prompt("Ingrese la nota del módulo " + (j + 1) + " para " + nombre));
            notas.push(nota);
        }

        // Agregar el nombre y las notas al array multidimensional
        datosAlumnos.push({ nombre: nombre, notas: notas });
    }

    // Mostrar la tabla en el DOM
    mostrarTabla(datosAlumnos);
}

// Función para mostrar la tabla en el DOM
function mostrarTabla(datosAlumnos) {
    // Obtener el elemento del body para agregar la tabla
    var body = document.body;

    // Crear la tabla
    var tabla = document.createElement('table');
    tabla.border = '1';

    // Crear la cabecera de la tabla
    var cabecera = tabla.createTHead();
    var filaCabecera = cabecera.insertRow();

    var celdaNombre = filaCabecera.insertCell();
    celdaNombre.textContent = 'Nombre';

    for (var i = 0; i < 3; i++) {
        var celdaModulo = filaCabecera.insertCell();
        celdaModulo.textContent = 'Módulo ' + (i + 1);
    }

    // Llenar la tabla con los datos de los alumnos
    for (var i = 0; i < datosAlumnos.length; i++) {
        var fila = tabla.insertRow();

        var celdaNombreAlumno = fila.insertCell();
        celdaNombreAlumno.textContent = datosAlumnos[i].nombre;

        for (var j = 0; j < 3; j++) {
            var celdaNota = fila.insertCell();
            celdaNota.textContent = datosAlumnos[i].notas[j];
        }
    }

    // Agregar la tabla al body del documento
    body.appendChild(tabla);
}

// Llamar a la función para recoger datos y mostrar la tabla
recogerDatos();