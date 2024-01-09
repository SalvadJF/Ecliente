const caja = document.getElementById("caja");

let x = 0;
let y = 0;

document.addEventListener("keydown", (tecla) => {
  switch (tecla.code) {
    case "ArrowUp":
    case "Numpad8":
      caja.style.top = (y -= 5) + "px";
      break;

    case "ArrowDown":
    case "Numpad2":
      caja.style.top = (y += 5) + "px";
      break;

    case "ArrowRight":
    case "Numpad6":
      caja.style.left = (x += 5) + "px";
      break;

    case "ArrowLeft":
    case "Numpad4":
      caja.style.left = (x -= 5) + "px";
      break;
  }
});
