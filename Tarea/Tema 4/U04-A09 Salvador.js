var Coches = [];

class cocheNuevo {
  constructor(marca_in, modelo_in, color_in, ano_in) {
    this.marca = marca_in;
    this.modelo = modelo_in;
    this.color = color_in;
    this.ano = ano_in;
    this.cilindrada = null;
  }

  mostrarDatos() {
    if (this.cilindrada == null) {
      document.getElementById(
        "resultado"
      ).innerText = `Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}, Año: ${this.ano}`;
    } else {
      document.getElementById(
        "resultado"
      ).innerText = `Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}, Año: ${this.ano}, Cilindrada: ${this.cilindrada}`;
    }
  }

  acelerar(velocidad) {
    document.getElementById(
      "resultado"
    ).innerText = `El coche ha acelerado a ${velocidad} km/h`;
  }

  arrancar() {
    document.getElementById(
      "resultado"
    ).innerText = `El coche de marca ${this.marca}, modelo ${this.modelo}, color ${this.color} ha arrancado.`;
  }

  asignarCilindrada(cilindrada) {
    this.cilindrada = cilindrada;
    document.getElementById(
      "resultado"
    ).innerText = `Cilindrada asignada: ${this.cilindrada}`;
  }

  frenar() {
    document.getElementById(
      "resultado"
    ).innerText = `El coche de marca ${this.marca}, modelo ${this.modelo}, color ${this.color} ha parado.`;
  }
}

function crearVehiculo() {
  let marca = document.getElementById("marca").value;
  let modelo = document.getElementById("modelo").value;
  let color = document.getElementById("color").value;
  let ano = document.getElementById("ano").value;

  let vehiculo = new cocheNuevo(marca, modelo, color, ano);

  Coches.push(vehiculo);
  document.getElementById("resultado").innerText = `Coche añadido`;
}

function mostrarMarca() {
  if (Coches.length > 0) {
    Coches[0].mostrarDatos();
  } else {
    document.getElementById("resultado").innerText =
      "No hay vehículos creados.";
  }
}

function mostrarColor() {
  if (Coches.length > 1) {
    document.getElementById("resultado").innerText =
      "Color del segundo vehículo: " + Coches[1].color;
  } else {
    document.getElementById("resultado").innerText =
      "Se necesita al menos dos vehículos.";
  }
}

function acelerarCoche() {
  if (Coches.length > 0) {
    let velocidad = prompt(
      "Ingrese la velocidad a la que desea acelerar el coche:"
    );
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
  document.getElementById("resultado").innerText = "";

  if (Coches.length > 0) {
    Coches.forEach((coche) => {
      for (let prop in coche) {
        document.getElementById(
          "resultado"
        ).innerText += `${prop}: ${coche[prop]}\n`;
      }
      document.getElementById("resultado").innerText += "\n";
    });
  } else {
    alert("No hay vehículos creados.");
  }
}
function llenarOpciones() {
  let select = document.getElementById("seleccionarCoche");
  select.innerHTML = "";

  Coches.forEach((coche, index) => {
    let option = document.createElement("option");
    option.value = index;
    option.text = coche.marca;
    select.add(option);
  });
}

function obtenerCocheSeleccionado() {
  let select = document.getElementById("seleccionarCoche");
  let selectedIndex = select.value;
  return Coches[selectedIndex];
}

llenarOpciones();
