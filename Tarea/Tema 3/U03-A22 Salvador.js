var dimensiones;
var pixels = document.getElementById("pixeles").value;
var resultado = document.getElementById("resultado").value;

function aumentarTexto() {
  dimensiones += parseInt(pixels); 
  resultado.style.fontSize = dimensiones + "px";
}

function reducirTexto() {
  dimensiones -= pixels; 
  resultado.style.fontSize = dimensiones + "px";
}

function original() {
  dimensiones = 16; // Devuelve el tamaño original al texto
  resultado.style.fontSize = dimensiones + "px";
}
