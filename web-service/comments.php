<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');

$database = "host=s-l112.engr.uiowa.edu dbname=inf_db05 user=inf_student05 password=engr-2022-05";

$connection = pg_connect($database);

if (!$connection) {
  die("Connection failed: " . pg_errormessage($connection));
}

$name = $_POST["name"];
$email = $_POST["email"];
$comments = $_POST["comments"];
$unixtime = $_POST["unixtime"];


$sql = "insert into project.comments (name, email, comments, unixtime) values ('$name', '$email', '$comments', '$unixtime')"; 

// run SQL statement
$result = pg_exec($connection, $sql);

// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(pg_errormessage($connection));
}