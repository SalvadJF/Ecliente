const IMPAR = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];

var resultado = document.getElementById("resultado");

var miArray = IMPAR;

function restaurarArray() {
  // Restaura el Array al valor original
  // Es necesario el [...array] para que copie los valores de este

  miArray = [...IMPAR];

  resultado.innerHTML = `Se ha restaurado el Array`;
}

function calcularSumatorio() {
  // Calcula la suma de todos los valores del array

  var suma = 0;
  miArray.forEach(function (i) {
    suma += i;
  });

  resultado.innerHTML = `El Sumatorio es ${suma}`;
}

function invertirArray() {
  // Invierte el array

  miArray.reverse();

  resultado.innerHTML = miArray.join(" - ");
}

function buscarNumero() {
  // Busca un numero introducido por el usuario ,
  // muestra la posicion en la que se encuentra y lo elimina del array

  var numero = document.getElementById("numero").value;
  var posicion = miArray.indexOf(parseInt(numero));

  if (posicion !== -1) {
    miArray.splice(posicion, 1);

    resultado.innerHTML = `Se a elimina el ${numero} en la posicion ${posicion}`;
  } else {
    // Si el numero no se encuentra en el array

    resultado.innerHTML = `El ${numero} no existe en el array`;
  }
}

function ordenarAscDesc() {
  // Muestra por pantalla el array de forma ascendente y descendente

  let ascendente = miArray.sort((a, b) => a - b);
  let descendente = [...ascendente].reverse();
  // [...array] es necesario para realizar una copia de este pues reverse afecta al array original

  resultado.innerHTML =     `Ascendente <br> ${ascendente.join(" <br>")} 
                            <br> Descendente <br> ${descendente.join(" <br>")}`;
}
