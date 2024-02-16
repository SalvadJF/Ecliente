<?php
$voto = $_GET['voto'];
$resultados = file_get_contents('resultado.txt');
$votos = explode('||', $resultados);
switch ($voto) {
    case 'real':
        $votos[0]++;
        break;
    case 'barcelona':
        $votos[1]++;
        break;
    case 'betis':
        $votos[2]++;
        break;
    case 'sevilla':
        $votos[3]++;
        break;
}
$resultadosActualizados = implode('||', $votos);
file_put_contents('resultado.txt', $resultadosActualizados);
echo $resultadosActualizados;
