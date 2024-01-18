let ios = getCookie('ios') || 0;
let android = getCookie('android') || 0;
let phone = getCookie('phone') || 0;
let otro = getCookie('otro') || 0;

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
  switch (datos.sistema) {
    case 'ios':
      ios = parseInt(ios)+1;
      document.cookie = `ios=${ios}`
      break;
    case 'android':
      android = parseInt(android)+1;
      document.cookie = `android=${android}`
      break;
    case 'phone':
      phone = parseInt(phone)+1;
      document.cookie = `phone=${phone}`
      break;
    case 'otro':
      otro = parseInt(otro)+1;
      document.cookie = `otro=${otro}`
      break;
    default:
      break;

  }

  actualizarVotacion();
})

function actualizarVotacion() {
  let iosvotos = parseInt(getCookie('ios')) || 0;
  let androidvotos = parseInt(getCookie('android')) || 0;
  let phonevotos = parseInt(getCookie('phone')) || 0;
  let otrovotos = parseInt(getCookie('otro')) || 0;

  let totalvotos = iosvotos + androidvotos + phonevotos + otrovotos;

  let iosPorcentaje = (iosvotos / totalvotos) * 100 || 0;
  let androidPorcentaje = (androidvotos / totalvotos) * 100 || 0;
  let phonePorcentaje = (phonevotos / totalvotos) * 100 || 0;
  let otroPorcentaje = (otrovotos / totalvotos) * 100 || 0;

  document.getElementById('iosProgress').style.width = `${iosPorcentaje}%`;
  document.getElementById('androidProgress').style.width = `${androidPorcentaje}%`;
  document.getElementById('phoneProgress').style.width = `${phonePorcentaje}%`;
  document.getElementById('otroProgress').style.width = `${otroPorcentaje}%`;
  document.getElementById('totalVotos').innerHTML = `Votos totales : ${totalvotos}`;
}
