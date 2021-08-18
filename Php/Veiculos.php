<?php

$url = "https://swapi.dev/api/vehicles";

$results = json_decode(file_get_contents($url));

//var_dump($results);
foreach ($results->results as $nome)
{
    echo "Veiculos : ". $nome->name."<br>";
}