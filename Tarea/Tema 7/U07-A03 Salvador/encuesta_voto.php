<?php
// Obtener el voto del usuario desde la URL
$voto = $_GET['voto'];

// Leer el contenido del archivo resultados.txt
$resultados = file_get_contents('resultados.txt');

// Separar los votos por las || y almacenarlos en un array
$votos = explode('||', $resultados);

// Incrementar el voto correspondiente
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

// Crear la cadena de resultados
$resultadosActualizados = implode('||', $votos);

// Escribir los resultados actualizados en el archivo
file_put_contents('resultados.txt', $resultadosActualizados);

// Devolver los porcentajes como respuesta
echo json_encode($resultados);

