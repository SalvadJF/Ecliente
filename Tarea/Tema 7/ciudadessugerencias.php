<?php
$ciudad = $_GET['ciudad'] ?? '';
$ciudades = ['Jerez', 'Rocio', 'Granada', 'Sanlucar', 'Cadiz'];
$sugerencias = [];

foreach ($ciudades as $posibleCiudad) {
    if (strpos($posibleCiudad, $ciudad) === 0) {
        $sugerencias[] = $posibleCiudad;
    }
}

echo json_encode($sugerencias);