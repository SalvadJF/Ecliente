function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

let visitas = getCookie('visitas');

// Si no existe, la creamos con un valor inicial de 1
if (!visitas) {
  visitas = 1;
  document.cookie = `visitas=${visitas}`;
} else {
// Si existe, incrementamos su valor en 1
  visitas = parseInt(visitas) + 1; 
  document.cookie = `visitas=${visitas}`;
}

window.addEventListener('load', function() {
  document.getElementById('visitas').innerHTML =  `Esta página ha sido visitada ${visitas} veces.`;
})
