<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ERROR | E_PARSE);
include 'serverinfo.php';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$query = "SELECT * FROM responses WHERE UserID = " . $_POST['userid'] . ";";
$result = $conn->query($query);

$AtmosphereScore = Array();
$GroundScore = Array();
$SeaScore = Array();
$SubsurfaceScore = Array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
        $query = "SELECT * FROM Questions WHERE id = " . $row['QuestionID'] . ";";
        $result2 = $conn->query($query);
        while($subrow = $result2->fetch_assoc()){
            if($subrow['type'] == "Range"){
                $maxDistance = function(){
                    $min = $subrow['Answer'] - $subrow['Min'];
                    $max = $subrow['Max'] - $subrow['Answer'];
                    if($min > $max){
                        return $min;
                    } else {
                        return $max;
                    }
                };
                
                $answerDifference = function(){
                    if($row['Response'] > $subrow['Answer']){
                        return $row['Response'] - $subrow['Answer'];
                    } else {
                        return $subrow['Answer'] - $row['Response'];
                    }
                };
                
                $score = (100/$maxDistance)*$answerDifference;
                $score = (($score/100)*60)-30;//Sets the score between -30 and 30
                
            } else {
                if($row['Response'] == $subrow['Answer']){
                    $score = 0.9;
                } else {
                    $score = 0.1;
                }
                
                $score = ($score*60)-30;
            }
            
            //Adding the score to an array of scores
            if($subrow['Category'] == "highAir")$AtmosphereScore[] = $score;
            if($subrow['Category'] == "ground")$GroundScore[] = $score;
            if($subrow['Category'] == "sea")$SeaScore[] = $score;
            if($subrow['Category'] == "subSurface")$SubsurfaceScore[] = $score;
        }
    }
    
    $AtmosphereScore = array_sum($AtmosphereScore)/count($AtmosphereScore);
    $GroundScore = array_sum($GroundScore)/count($GroundScore);
    $SeaScore = array_sum($SeaScore)/count($SeaScore);
    $SubsurfaceScore = array_sum($SubsurfaceScore)/count($SubsurfaceScore);
    
    if(is_nan($AtmosphereScore)) $AtmosphereScore = 0;
    if(is_nan($GroundScore)) $GroundScore = 0;
    if(is_nan($SeaScore)) $SeaScore = 0;
    if(is_nan($SubsurfaceScore)) $SubsurfaceScore = 0;
    
    $OverallScore = ((($AtmosphereScore + $GroundScore + $SeaScore + $SubsurfaceScore)/4)/60)*200;
    
    $return = Array();
    
    $return['total'] = round($OverallScore);
    $return['atmosphere'] = round($AtmosphereScore);
    $return['ground'] = round($GroundScore);
    $return['sea'] = round($SeaScore);
    $return['subsurface'] = round($SubsurfaceScore);
    
    echo json_encode($return);
} else {
    echo "FAIL";
}
