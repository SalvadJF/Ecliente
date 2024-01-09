/*

Con esta funcion de window evitamos que el boton secundario del raton funcione

*/

window.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
