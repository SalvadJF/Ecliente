var campos = document.getElementById("campos");

document.getElementById("crear").addEventListener("click", function () {
  let texto = document.getElementById("nodos").value;
  let p = document.createElement("p");
  p.textContent = texto;
  campos.appendChild(p);
});

document.getElementById("borrar").addEventListener("click", function () {
  let p = campos.querySelector("p:last-of-type");
  if (p) {
    campos.removeChild(p);
  } else {
    alert("No hay nada que borrar");
  }
});
