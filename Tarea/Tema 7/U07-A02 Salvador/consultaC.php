<?php
// Obtener el parámetro "ciudad" de la solicitud GET
$ciudad = isset($_GET["ciudad"]) ? $_GET["ciudad"] : "";

// Cargar el contenido del archivo ciudades.json
$json = file_get_contents("ciudades.json");

// Decodificar el contenido JSON en un array asociativo
$ciudades = json_decode($json, true);

// Inicializar un array para almacenar las sugerencias de ciudades
$sugerencias = [];

// Recorrer todas las ciudades y agregar aquellas que comiencen con la cadena proporcionada
foreach ($ciudades[0]["ciudades"] as $c) {
    if (stripos($c, $ciudad) === 0) {
        $sugerencias[] = $c;
    }
}

// Devolver las sugerencias como un JSON
header('Content-Type: application/json');
echo json_encode($sugerencias);

