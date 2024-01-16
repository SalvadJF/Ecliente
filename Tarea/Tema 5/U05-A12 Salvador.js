var contra = document.getElementById("contra").value;
var contraConfirm = document.getElementById("contraConfirm").value;

function validarContra() {
  // Validar confirmación de contraseña
  if (contra !== contraConfirm) {
    alert("Las contraseñas ingresadas no coinciden.");
    document.getElementById("contraConfirm").value = "";
    return false;
  }
}

