function toggleElements() {
    // Obtener los elementos por su ID
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");
  
    // Verificar el estado actual del primer elemento y cambiarlo
    if (input1.disabled) {
      input1.disabled = false;
      input2.disabled = false;
      input3.disabled = false;
    } else {
      input1.disabled = true;
      input2.disabled = true;
      input3.disabled = true;
    }
  }