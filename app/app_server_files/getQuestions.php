<?php
header("Access-Control-Allow-Origin: *");
include 'serverinfo.php';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$category = $_POST['category'];

$query = "SELECT QuestionID FROM responses WHERE UserID = " . $_POST['userid'] . ";";
$result = $conn->query($query);

$usedQuestions = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
        $usedQuestions[] = $row['QuestionID'];
    }
}

$query = "SELECT * FROM Questions WHERE Category = '" . $category . "';";
if($category == "all")$query = "SELECT * FROM Questions;";

$result = $conn->query($query);

if ($result->num_rows > 0) {
    $questions = [];
    while($row = $result->fetch_assoc()){
        if(!in_array($row['id'],$usedQuestions)){
            array_push($questions, $row);
        }
    }
    
    if(count($questions) <= 0){
        echo "No more questions in this category";
    } else {
        echo json_encode($questions);
    }
} else {
    echo "No Questions Available";
} 
