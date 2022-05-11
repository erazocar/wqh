<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
header("Content-Type: application/json");

//Remove requirement to report additional errors.
error_reporting(E_ALL ^ E_NOTICE);
//Definition of the database connection.
$database = "host=s-l112.engr.uiowa.edu dbname=inf_db05 user=inf_student05 password=engr-2022-05";
$connection = pg_connect($database);

//Defintion of the queries.
$sql = "select min(unixtime) as startDate, max(unixtime) as endDate, count(temperature) as numRecords, index, sens.community as location from project.sensor_data, project.sensors as sens where index = sens.id group by index, location";

try {
//Connection to the database.
$result = pg_prepare($connection, "query", $query);

//Obtain result, if error then return error.
$result = pg_exec($connection, $sql);
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