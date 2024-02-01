let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

function desactivarElementos() {
  if (input1.disabled || input2.disabled || input3.disabled) {
    input1.disabled = false;
    input2.disabled = false;
    input3.disabled = false;
  } else {
    input1.disabled = true;
    input2.disabled = true;
    input3.disabled = true;
  }
}

function desactivarInput1() {
  if (input1.disabled) {
    input1.disabled = false;
  } else {
    input1.disabled = true;
  }
}

function desactivarInput2() {
  if (input2.disabled) {
    input2.disabled = false;
  } else {
    input2.disabled = true;
  }
}

function desactivarInput3() {
  if (input3.disabled) {
    input3.disabled = false;
  } else {
    input3.disabled = true;
  }
}
