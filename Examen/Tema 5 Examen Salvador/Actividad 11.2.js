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

})