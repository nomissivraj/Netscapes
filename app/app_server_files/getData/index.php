<?php
header("Access-Control-Allow-Origin: *");
include '../serverinfo.php';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$userid = $_POST['userid'];

$query = "SELECT * FROM Questions;";
$questions = $conn->query($query);



$return = Array();

if ($questions->num_rows > 0) {
    while($row = $questions->fetch_assoc()){
        if($return[$row['Category']] == null){
            $return[$row['Category']] = Array();
        }
        
        $newItem = array();
        $newItem['Question'] = $row['Question'];
        $newItem['Reality'] = $row['Answer'];
        $newItem['Type'] = $row['Type'];
        
        
        //Code for getting the users answer
        $query = "SELECT * FROM responses WHERE UserID = " . $userid . " AND QuestionID = " . $row['id'] . ";";
        $userResponses = $conn->query($query);
        
        if ($userResponses->num_rows > 0) {
            while($row1 = $userResponses->fetch_assoc()){
                $newItem['UserAnswer'] = $row1['Response'];
            }
        } else {
                $newItem['UserAnswer'] = "No Answer";
        }
        
        //Code for getting the other responses
        $query = "SELECT * FROM responses WHERE QuestionID = " . $row['id'] . ";";
        $userResponses = $conn->query($query);
        
        $average = array();
        if ($userResponses->num_rows > 0) {
            while($row2 = $userResponses->fetch_assoc()){
                $average[] = $row2['Response'];
            }
        }
        
        $usedFigure = array();
        $formattedAverage = array();
        for($x=0; $x<count($average); $x++){
            if(!in_array($average[$x], $usedFigure)){
                $usedFigure[] = $average[$x];
                $formattedAverage[] = array($average[$x], 1);
            } else {
                $formattedAverage[array_search($average[$x], $usedFigure)][1] = intval($formattedAverage[$average[$x]])+1;
            }
        }
        
        
        
        if($newItem['Type'] == "Range"){
            sort($formattedAverage);
            sort($usedFigure);
        }
        
        $maxLength = 10;
        
        if(count($formattedAverage) > $maxLength){//Code for organising the data into fewer categories
            $highest = $usedFigures[-1];
            $range = $highest/$maxLength;
            $currentCategory = "0 - " . $range;
            $max = $range;
            $formattedAverage[$currentCategory] = 0;
            for($x=0; $x<count($formattedAverage); $x++){
                if($formattedAverage[$x][0] < $max){
                    $formattedAverage[$currentCategory] = intval($formattedAverage[$currentCategory]) + 1;
                    unset($formattedAverage[$x][0]);
                } else {
                    $currentCategory = $max . " - ";
                    $max = $max + $range;
                    $currentCategory = $currentCategory . $range;
                    $formattedAverage[$currentCategory] = 0;
                }
            }
        }
        
        $newItem['Average'] = $formattedAverage;
        $return[$row['Category']][] = $newItem;
    }
    echo json_encode($return);
} else {
    echo "FAIL";
}
