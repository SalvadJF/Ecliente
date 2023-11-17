function manipular() {
  var palabras = document.getElementById("palabras").value;

  var arrayPalabras = palabras.split(" ");

  var palabrasAlReves = [...arrayPalabras].map((palabra) =>
    palabra.split("").reverse().join("")
  );

  var palabrasDescendente = [...arrayPalabras].reverse();

  var ventana = window.open("", "Resultado", "width=600, height=600");

  ventana.document.write(`<h2>Resultado</h2>`);

  ventana.document.write(
    `<p>Todas las palabras ${arrayPalabras.join(", ")}</p>`
  );

  ventana.document.write(
    `<p>Palabras al reves ${palabrasAlReves.join(", ")}</p>`
  );

  ventana.document.write(`<p>Primera palabra ${arrayPalabras[0]} </p>`);

  ventana.document.write(
    `<p>Ultima palabra ${arrayPalabras[arrayPalabras.length - 1]} </p>`
  );

  ventana.document.write(`<p>Numero de palabras ${arrayPalabras.length} </p>`);

  ventana.document.write(
    `<p>Palabras ordenadas ascendentes ${arrayPalabras.sort().join(", ")} </p>`
  );

  ventana.document.write(
    `<p>Palabras ordenadas descendentes ${palabrasDescendente.join(", ")} </p>`
  );
}
