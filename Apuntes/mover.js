var imagen = document.getElementById("imagen");
var imagen1 = "Imagen1.png";
var imagen2 = "Imagen2.png";

var mover = false;
var x = 0;
var y = 0;


imagen.addEventListener("mousedown", (e) => {
    e.preventDefault();
    imagen.src = imagen2;
    mover = true;
    x = e.offsetX;
    y = e.offsetY;
  });


imagen.addEventListener("mouseup", (e) => {
  e.preventDefault();
  imagen.src = imagen1;

  mover = false;

});

imagen.addEventListener("mousemove", () => {
    x = e.offsetX;
    y = e.offsetY;
  });
