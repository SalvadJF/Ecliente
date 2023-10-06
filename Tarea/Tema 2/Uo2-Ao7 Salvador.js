window.onload = function() {
    var nota = parseFloat(prompt("Introduzca su nota"));
    var texto;


    nota >= 0   &&  nota <5     ?   texto = nota +  " Es un Suspenso" :
    nota >= 5   &&  nota <= 6   ?   texto = nota +  " Es un Aprobado" :
    nota >= 6.1 &&  nota <= 8   ?   texto = nota +  " Es un Notable" :
    nota >= 8.1 &&  nota <= 10  ?   texto = nota +  " Es un Sobresaliente" :
    texto = "Nota no valida";





    document.getElementById("resultado").innerHTML =  texto;

}
