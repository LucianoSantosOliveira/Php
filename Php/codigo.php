<?php

$url = "https://swapi.dev/api/people";

$results = json_decode(file_get_contents($url));

//var_dump($results);
foreach ($results->results as $nome)
{
    echo "personagem : ". $nome->name."<br>";
}

//$result  = json_decode($content);



