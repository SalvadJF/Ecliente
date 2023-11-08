function generarNumeros() {

    var numeros = [];

    for (i = 0; i < 10; i++) {
        numeros.push(Math.round(Math.random() * (1000 - 1) + 1));
    }
    numeros.sort(function(a, b){return a - b});
    // Este metodo hace que el sort ordene numeralmente

    var ultimo = numeros.pop();
    var primero = numeros.shift();
    
    document.getElementById("resultado").innerHTML = `${numeros.join(' - ')} <br> El primero ${primero} <br> El ultimo ${ultimo}`;
}