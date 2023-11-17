
    function manipularPalabras() {
      // Obtener las palabras ingresadas por el usuario
      var palabras = document.getElementById("palabras").value;
      
      // Dividir las palabras en un array
      var palabrasArray = palabras.split(" ");

      // Todas las palabras
      var todasPalabras = palabrasArray.join(", ");

      // Todas las palabras al revés
      var palabrasAlReves = palabrasArray.map(function(palabra) {
        return palabra.split("").reverse().join("");
      }).join(", ");

      // La primera palabra ingresada
      var primeraPalabra = palabrasArray[0];

      // La última palabra ingresada
      var ultimaPalabra = palabrasArray[palabrasArray.length - 1];

      // Número de palabras en el array
      var numPalabras = palabrasArray.length;

      // Palabras ordenadas de la 'a' a la 'z'
      var palabrasOrdenadasAZ = palabrasArray.slice().sort().join(", ");

      // Palabras ordenadas de la 'z' a la 'a'
      var palabrasOrdenadasZA = palabrasArray.slice().sort(function(a, b) {
        return b.localeCompare(a);
      }).join(", ");

      // Mostrar resultados en una nueva ventana
      var resultadosVentana = window.open("", "Resultados", "width=600,height=400");
      resultadosVentana.document.write("<h2>Resultados:</h2>");
      resultadosVentana.document.write("<p><strong>Todas las palabras:</strong> " + todasPalabras + "</p>");
      resultadosVentana.document.write("<p><strong>Todas las palabras al revés:</strong> " + palabrasAlReves + "</p>");
      resultadosVentana.document.write("<p><strong>Primera palabra ingresada:</strong> " + primeraPalabra + "</p>");
      resultadosVentana.document.write("<p><strong>Última palabra ingresada:</strong> " + ultimaPalabra + "</p>");
      resultadosVentana.document.write("<p><strong>Número de palabras:</strong> " + numPalabras + "</p>");
      resultadosVentana.document.write("<p><strong>Palabras ordenadas de la 'a' a la 'z':</strong> " + palabrasOrdenadasAZ + "</p>");
      resultadosVentana.document.write("<p><strong>Palabras ordenadas de la 'z' a la 'a':</strong> " + palabrasOrdenadasZA + "</p>");
    }
