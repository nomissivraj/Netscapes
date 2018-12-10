<?php 
include "../app_server_files/serverinfo.php";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if($_POST['type'] != "Range"){
    $rangeValue = "0,0";
} else {
    $rangeValue = $_POST['min'] . "," . $_POST['max'];
}

$query = "INSERT INTO Questions (Question, Type, Min, Max, Units, Option1, Option2, Option3, Option4, Category, Answer, Source) VALUES ('" . addslashes($_POST['question']) . "','" . addslashes($_POST['type']) . "'," . $rangeValue . ",'" . addslashes($_POST['units']) . "','" . addslashes($_POST['option1']) . "','" . addslashes($_POST['option2']) . "','" . addslashes($_POST['option3']) . "','" . addslashes($_POST['option4']) . "','" . addslashes($_POST['section']) . "','" . addslashes($_POST['answer']) . "','" . addslashes($_POST['source']) . "')";

$result = $conn->query($query);

$query = "SELECT * FROM Questions WHERE ID = '" . $conn->insert_id . "';";

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
?>