var Notas_Alumnos = [];

        function introducir() {

            if (Notas_Alumnos.length == 5) {

                document.getElementById("resultado").innerHTML = `Ya hay 5 alumnos en la base de datos`;
                return

            }

            let nombre = document.getElementById("nombre").value;
            let nota1 = parseFloat(document.getElementById("nota1").value);
            let asignatura1 = document.getElementById("asignatura1").value;

            let nota2 = parseFloat(document.getElementById("nota2").value);
            let asignatura2 = document.getElementById("asignatura2").value;

            let nota3 = parseFloat(document.getElementById("nota3").value);
            let asignatura3 = document.getElementById("asignatura3").value;

            // Validacion del valor de las notas
            if ((nota1 < 0 || nota1 > 10) || (nota2 < 0 || nota2 > 10) || (nota3 < 0 || nota3 > 10)) {
                document.getElementById("resultado").innerHTML = `Nota no válida`;
                return;
            }

            // Validacion para que los campos no esten vacios
            if (nombre == "" | nota1 == ""| nota2 == ""| nota3 == "") {
                document.getElementById("resultado").innerHTML = `Debe rellenar todos los campos`;
                return
            }

            // Validacion que no se repitan las asignaturas
            if (asignatura1 === asignatura2 || asignatura1 === asignatura3 || asignatura2 === asignatura3) {
                document.getElementById("resultado").innerHTML = `No se pueden repetir las asignaturas`;
                return;
            }

        

            // Creamos el Array alumno con los datos
            var alumno = [
                nombre,
                nota1,
                nota2,
                nota3
            ];

            // Metemos el alumno en el array
            Notas_Alumnos.push(alumno);

            // Limpiamos los campos
            document.getElementById("nombre").value = "";
            document.getElementById("nota1").value = "";
            document.getElementById("asignatura1").value = "lenguaje";
            document.getElementById("nota2").value = "";
            document.getElementById("asignatura2").value = "programacion";
            document.getElementById("nota3").value = "";
            document.getElementById("asignatura3").value = "baseDatos";

            document.getElementById("resultado").innerHTML = `Datos ingresados correctamente`;
        }

        function mostrarNotas() {

            if (Notas_Alumnos.length < 5) {
                
                document.getElementById("resultado").innerHTML = `Deben haber almenos 5 alumnos en la base de datos`;
                return

            }
            let tableBody = document.querySelector("#tablaNotas tbody");

            // Limpiamos la tabla
            tableBody.innerHTML = "";

            // Metemos los datos del Array
            for (let alumno of Notas_Alumnos) {
                let row = tableBody.insertRow();

                // rellenamos las casillas
                for (let key in alumno) {
                    let cell = row.insertCell();
                    cell.textContent = alumno[key];
                }
            }
        }