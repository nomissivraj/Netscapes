<?php
include 'serverinfo.php';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$category = $_POST['category'];

$query = "SELECT * FROM Questions WHERE Category = '" . $category . "';";

$result = $conn->query($query);

if ($conn->affected_rows == 0) {
    $questions = [];
    while($row = $result->fetch_assoc()){
        array_push($questions, $row);
    }
    
    echo json_decode($questions);
} else {
    echo "No Questions Available";
} 
