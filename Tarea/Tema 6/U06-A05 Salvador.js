var boton = document.getElementById("boton");
var valorP = document.getElementById("valorP");

boton.addEventListener("click", function () {
  let parrafo = document.getElementById("parrafo" + valorP.value);
  mostrarOcultar(parrafo);
});

function mostrarOcultar(parrafo) {
  if (parrafo.classList.contains("visible")) {
    parrafo.classList.remove("visible");
    parrafo.classList.add("oculto");
  } else {
    parrafo.classList.remove("oculto");
    parrafo.classList.add("visible");
  }
}