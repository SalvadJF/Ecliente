class Vehiculo {
  constructor(marca, modelo, color, añoFabricación) {
     this.marca = marca;
     this.modelo = modelo;
     this.color = color;
     this.añoFabricación = añoFabricación;
  }
 }

var vehiculos = [
new Vehiculo("Toyota", "Corolla", "Azul", 2019),
new Vehiculo("Honda", "Civic", "Rojo", 2020),
new Vehiculo("Nissan", "Sentra", "Blanco", 2018),
new Vehiculo("Mazda", "3", "Negro", 2021),
new Vehiculo("Chevrolet", "Spark", "Gris", 2017)
];

function generarTabla() {
  let tabla = document.createElement('table');
  tabla.innerHTML = `
    <tr>
      <th>Marca</th>
      <th>Modelo</th>
      <th>Color</th>
      <th>Año Fabricación</th>
    </tr>
  `;

  vehiculos.forEach(vehiculo => {
    let fila = tabla.insertRow();

    let marcaCelda = fila.insertCell();
    marcaCelda.textContent = vehiculo.marca;

    let modeloCelda = fila.insertCell();
    modeloCelda.textContent = vehiculo.modelo;

    let colorCelda = fila.insertCell();
    colorCelda.textContent = vehiculo.color;

    let añoCelda = fila.insertCell();
    añoCelda.textContent = vehiculo.añoFabricación;
  });

  document.getElementById('tablaVehiculos').innerHTML = '';
  document.getElementById('tablaVehiculos').appendChild(tabla);
}

document.getElementById("boton").addEventListener("click", generarTabla);