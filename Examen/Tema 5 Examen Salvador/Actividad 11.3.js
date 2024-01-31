let solo = getCookie('solo') || 0;
let leche = getCookie('leche') || 0;
let descafeinado = getCookie('descafeinado') || 0;
let hielo = getCookie('hielo') || 0;

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

window.addEventListener('load', actualizarVotacion())

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  var datos = Object.fromEntries(
     new FormData(e.target)
  );
  switch (datos.cafe) {
    case 'solo':
      solo = parseInt(solo)+1;
      document.cookie = `solo=${solo}`
      break;
    case 'leche':
      leche = parseInt(leche)+1;
      document.cookie = `leche=${leche}`
      break;
    case 'descafeinado':
      descafeinado = parseInt(descafeinado)+1;
      document.cookie = `descafeinado=${descafeinado}`
      break;
    case 'hielo':
      hielo = parseInt(hielo)+1;
      document.cookie = `hielo=${hielo}`
      break;
    default:
      break;

  }

  actualizarVotacion();

})

function actualizarVotacion() {
  let solovotos = parseInt(getCookie('solo')) || 0;
  let lechevotos = parseInt(getCookie('leche')) || 0;
  let descafeinadovotos = parseInt(getCookie('descafeinado')) || 0;
  let hielovotos = parseInt(getCookie('hielo')) || 0;

  let totalvotos = solovotos + lechevotos + descafeinadovotos + hielovotos;

  let soloPorcentaje = (solovotos / totalvotos) * 100 || 0;
  let lechePorcentaje = (lechevotos / totalvotos) * 100 || 0;
  let descafeinadoPorcentaje = (descafeinadovotos / totalvotos) * 100 || 0;
  let hieloPorcentaje = (hielovotos / totalvotos) * 100 || 0;

  document.getElementById('soloProgress').style.width = `${soloPorcentaje}%`;
  document.getElementById('lecheProgress').style.width = `${lechePorcentaje}%`;
  document.getElementById('descafeinadoProgress').style.width = `${descafeinadoPorcentaje}%`;
  document.getElementById('hieloProgress').style.width = `${hieloPorcentaje}%`;
  document.getElementById('totalVotos').innerHTML = `Votos totales : ${totalvotos}`;
}