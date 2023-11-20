var Coches = [];

class cocheNuevo {
    constructor(marca_in, modelo_in, color_in, ano_in) {
        this.marca = marca_in;
        this.modelo = modelo_in;
        this.color = color_in;
        this.ano = ano_in;
        this.cilindrada = null; // Default value, change as needed
    }

    mostrarDatos() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}, Año: ${this.ano}`);
    }

    acelerar(velocidad) {
        console.log(`El coche ha acelerado a ${velocidad} km/h`);
    }

    arrancar() {
        console.log(`El coche de marca ${this.marca}, modelo ${this.modelo}, color ${this.color} ha arrancado.`);
    }

    asignarCilindrada(cilindrada) {
        this.cilindrada = cilindrada;
        console.log(`Cilindrada asignada: ${this.cilindrada}`);
    }

    frenar() {
        console.log(`El coche de marca ${this.marca}, modelo ${this.modelo}, color ${this.color} ha parado.`);
    }
}

function crearVehiculo() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let color = document.getElementById("color").value;
    let ano = document.getElementById("ano").value;

    let vehiculo = new cocheNuevo(marca, modelo, color, ano);

    Coches.push(vehiculo);
}

function mostrarPropiedadPorPuntos() {
    if (Coches.length > 0) {
        document.getElementById("resultado").innerText = "Marca del primer vehículo: " + Coches[0].marca;
    } else {
        document.getElementById("resultado").innerText = "No hay vehículos creados.";
    }
}

function mostrarPropiedadPorCorchetes() {
    if (Coches.length > 1) {
        document.getElementById("resultado").innerText = "Color del segundo vehículo: " + Coches[1]["color"];
    } else {
        document.getElementById("resultado").innerText = "Se necesita al menos dos vehículos.";
    }
}

function acelerarCoche() {
    if (Coches.length > 0) {
        let velocidad = prompt("Ingrese la velocidad a la que desea acelerar el coche:");
        Coches[0].acelerar(velocidad);
    } else {
        alert("No hay vehículos creados.");
    }
}

function asignarCilindrada() {
    if (Coches.length > 0) {
        let cilindrada = document.getElementById("cilindrada").value;
        Coches[0].asignarCilindrada(cilindrada);
    } else {
        alert("No hay vehículos creados.");
    }
}

function frenarCoche() {
    if (Coches.length > 0) {
        Coches[0].frenar();
    } else {
        alert("No hay vehículos creados.");
    }
}

function mostrarPropiedades() {
    if (Coches.length > 0) {
        let htmlTable = "<table border='1'>";

        // Cabecera de la tabla
        htmlTable += "<tr>";
        for (let prop in Coches[0]) {
            htmlTable += "<th>" + prop + "</th>";
        }
        htmlTable += "</tr>";

        // Datos del primer coche
        htmlTable += "<tr>";
        for (let prop in Coches[0]) {
            htmlTable += "<td>" + Coches[0][prop] + "</td>";
        }
        htmlTable += "</tr>";

        htmlTable += "</table>";

        // Mostrar la tabla en el elemento con el id "resultado"
        document.getElementById("resultado").innerHTML = htmlTable;
    } else {
        document.getElementById("resultado").innerText = "No hay vehículos creados.";
    }
}