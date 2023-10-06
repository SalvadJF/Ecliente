var num = parseInt(prompt("Introduzca un numero"));
var res = "";
var tabla = "";
if (num <= 0) {
    document.getElementById("resultado").innerHTML = "Se ha introducido un numero negativo"
}
else {
    for (i = 1 ; i <= 10 ; i++) {
        res = num * i;
        tabla += num + "x" + i + "=" + res + "<br>";
        res = "";
     }
     document.getElementById("resultado").innerHTML = "La Tabla de multiplicar de: " + num + "<br>" + tabla;
}
