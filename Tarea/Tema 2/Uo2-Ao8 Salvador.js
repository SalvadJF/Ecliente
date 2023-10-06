window.onload = function() {
    var factorial = parseInt(prompt("Ingrese un número"));
    var resultado = 1;
    var contador = 1;

    while (contador <= factorial) {
      resultado *= contador;
      contador++;
    }

    alert(resultado);
  }
