<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');

//Definition of the database connection.
$database = "host=s-l112.engr.uiowa.edu dbname=inf_db05 user=inf_student05 password=engr-2022-05";
$connection = pg_connect($database);

//Grab the information from the passed URL
//Only works if sensor+limit and scode+limit are passed.
$id = $_GET["id"];
$startDate = $_GET["startDate"];
$endDate = $_GET["endDate"];

//Defintion of the queries.
$sql = "SELECT unixtime, orp, ph, temperature, level, systembatt FROM project.sensor_data as data where data.index = $1 and data.unixtime between $2 and $3;";

try {
//Connection to the database.
$result = pg_prepare($connection, "query", $sql);

//Obtain result, if error then return error.
$result = pg_execute($connection, "query", array($id, $startDate, $endDate));
if (!$result) {
    echo "Query was not executed. Please revise inputs.";
    http_response_code(404);
    die(pg_errormessage($connection));
};

$data = array();

while ($row = pg_fetch_assoc($result)) {
	$data[] = $row;
}

echo json_encode($data);

} catch (\Throwable $th) {
    echo "there was an error with the request.";
};

?>