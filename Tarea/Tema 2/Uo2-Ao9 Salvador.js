var num1 = parseInt(prompt("Introduzca el primer número"));

var num2 = parseInt(prompt("Introduzca el segundo número"));

if (num1 <= 0 || num2 <= 0) {
    document.getElementById("resultado").innerHTML = "Se han introducido numeros negativos";
}
else {

    var min = Math.min(num1, num2);

    var max = Math.max(num1, num2);

    var m8 = "";

    for (i = min; i <= max; i++) {
        if (i % 8 == 0) {
            m8 += i + "<br>";
        }
    }

    document.getElementById("resultado").innerHTML = "<p>Los multiplos de 8 entre " + min + " y " + max + " son: </p>" + m8;

}
