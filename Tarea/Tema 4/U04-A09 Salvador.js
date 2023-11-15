var Coches = [];

class cocheNuevo {
    constructor(marca_in, modelo_in, color_in, ano_in) {

        this.marca = marca_in;
        this.modelo = modelo_in;
        this.color = color_in;
        this.ano = ano_in;
    }
}

function crearVehiculo() {

    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let color = document.getElementById("color").value;
    let ano = document.getElementById("ano").value;

    let vehiculo = new cocheNuevo(marca, modelo, color, ano)

    Coches.push(vehiculo);

}

function mostrarMarcas() {

    
}