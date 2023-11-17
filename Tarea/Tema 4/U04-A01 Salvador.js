function ordenarArray() {
  var frutas = ["Pera", "Manzana", "Limon", "Naranja", "Platano", "Sandia"];
  var ordenado = [];
  var resultado = document.getElementById("resultado");

  while (frutas.length > 0) {
    var orden = frutas.indexOf(frutas.reduce((a, b) => (a < b ? a : b)));
    /* Buscamos cual es el valor menos del array
    /* Pues en ASCII Los valores de las letras van de 
    /* mayor a menor empezando por las mayusculas ordenados
    /* alfabeticamente, al buscar el menos en si estamos ordenando alfabeticamente
    /* siempre y cuando las palabras empiecen por mayusculas
    */
    ordenado.push(frutas.splice(orden, 1)[0]);
    // sacamos el valor sacado del array y lo metemos en una variable que contenga el array ordenado
  }

  resultado.innerHTML = ordenado.join(", ");
}
