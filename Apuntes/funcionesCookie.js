// la cookie morirá en +1 hora a partir de ahora
document.cookie = "user=John; max-age=3600";

// borra la cookie (la hacemos expirar ya)
document.cookie = "user=John; max-age=0";

// los caracteres especiales (espacios), necesitan codificarse
let name = "my name";
let value = "John Smith";

// codifica la cookie como my%20name=John%20Smith
document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

alert(document.cookie); // ...; my%20name=John%20Smith

// ----------------------------------------

// Establece el nombre de la cookie name al valor dado value, con la ruta por defecto path=/, y puede ser modificada para agregar otros valores predeterminados:

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    // agregar otros valores predeterminados si es necesario
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

// Ejemplo de uso:
setCookie("user", "John", { secure: true, "max-age": 3600 });

// Para borrar una cookie, podemos llamarla con una fecha de expiración negativa:

function deleteCookie(name) {
  setCookie(name, "", {
    "max-age": -1,
  });
}

// Método para obtener la cookie por su nombre
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookiesArray = decodedCookie.split(";");
  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

// Añade un nuevo valor a la cookie
function updateCookieValue(nombre, nuevoValor) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(nombre + "=")) {
        document.cookie = cookie.substring(0, nombre.length + 1) + nuevoValor;
        break;
      }
    }
  }


// Función para ver los datos de la cookie
function verDatosCookie(nombreCookie) {
  let datosCookie = getCookie(nombreCookie);
  if (datosCookie) {
    alert(datosCookie);
  } else {
    alert("No hay datos de cookie.");
  }
}

