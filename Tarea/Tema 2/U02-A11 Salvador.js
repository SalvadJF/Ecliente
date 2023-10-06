function DNI() {

    var dni = prompt("Introduzca su DNI");
    var num = dni.slice(0, -1);
    var letra = dni.slice(-1);
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    if (num.length !== 8) {

        alert("El DNI introducido es incorrecto");
    }
    else {

        var resto = num % 23;
        var letraCalculo = letras[resto];

        if (letraCalculo !== letra.toUpperCase()) {

            alert("La letra introducida no es correcta");
        }
        else {

            document.getElementById("resultado").innerHTML = "El DNI " + dni + " es correcto";
        }
    }
}
