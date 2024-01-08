document.addEventListener('mousedown', boton => {
  let texto = "";
  switch(boton.button) {
    case 0:
      texto = "Has pulsado el boton izquierdo";
      break;
    case 1:
      texto = "Has pulsado el boton central";
      break;
    case 2:
      texto = "Has pulsado el boton derecho";
      break;
  }
  document.getElementById("resultado").innerHTML += `<p>${texto}</p>`;
})