let x = 0;
let y = 0;
let teclaaPulsada = 0

var caja = document.getElementById("caja");

document.addEventListener('keydown', tecla => {

  switch(tecla.code) {
    case 'ArrowUp':
    case 'Numpad8':
      caja.style.top = (y -= 5) + "px";
      break;

    case 'ArrowDown':
    case 'Numpad2':
      caja.style.top = (y += 5) + "px";
      break;
      
    case 'ArrowRight':
    case 'Numpad6':
      caja.style.right= (x += 5) + "px";
      break

    case 'ArrowLeft':
    case 'Numpad4':
      caja.style.right= (x -= 5) + "px";
      break
  }

  console.log(tecla)
})
