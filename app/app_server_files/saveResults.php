<?php
header("Access-Control-Allow-Origin: *");
include 'serverinfo.php';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$results = json_decode($_POST['results'], true);
var_dump($results);

$query = "";

for($x=0; $x<count($results); $x++){
    $ID = $results[$x]['userID'] . ":" . $results[$x]['id'];
    $query = "INSERT INTO responses (ID, UserID, QuestionID, Question, Response) VALUES ('" . $ID . "', " . $results[$x]['userID'] . ", " . $results[$x]['id'] . ", '" . $results[$x]['question'] . "', '" . $results[$x]['response'] . "');";
    $result = $conn->query($query);
}




echo "SUCCESS";
/*if ($result->num_rows > 0) {
    $questions = [];
    while($row = $result->fetch_assoc()){
        array_push($questions, $row);
    }
    
    echo json_encode($questions);
} else {
    echo "No Questions Available";
} */
