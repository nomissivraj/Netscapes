<?php
header("Access-Control-Allow-Origin: *");
include 'serverinfo.php';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$category = $_POST['category'];


$query = "SELECT * FROM Questions WHERE Category = '" . $category . "';";

$result = $conn->query($query);

if ($result->num_rows > 0) {
    $questions = [];
    while($row = $result->fetch_assoc()){
        array_push($questions, $row);
    }
    
    echo json_encode($questions);
} else {
    echo "No Questions Available";
} 
