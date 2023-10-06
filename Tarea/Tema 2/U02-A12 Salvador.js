function contarNumeros() {

    var numero = parseInt(prompt("Introduzca un numero"));

    isNaN(numero) ? alert("No se ha introducido un numero") :
    numero >= 1000 ? alert("El numero tiene que ser menor a 1000") :
    document.getElementById("resultado").innerHTML ="El " + numero + " tiene " + (numero.toString()).length + " digitos";

}
