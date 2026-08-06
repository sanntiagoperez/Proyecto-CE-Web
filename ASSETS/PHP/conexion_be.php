<?php
$host = "localhost";
$port = "5432";
$dbname = "postgres"; 
$user = "postgres";
$password = "1508"; 


$connection_string = "host=$host port=$port dbname=$dbname user=$user password=$password";

$conexion = pg_connect($connection_string);

if($conexion){
     echo 'Conectado exitosamente a la Base de Datos de PostgreSQL';
}else{
     echo 'No se ha podido conectar a la Base de Datos de PostgreSQL';
}
?>