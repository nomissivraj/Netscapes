<?php
session_start();

$Firstname = $_POST["firstname"];
$Surname = $_POST["surname"];

include 'ServerInfo.php';
        
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$file = fopen("Invitees/Invitees.csv","r");

while(! feof($file)){
    $Entry = fgetcsv($file);
    if(strtolower($Entry[1]) == strtolower($Firstname) && strtolower($Entry[2]) == strtolower($Surname)){
        
        $query = "SELECT * FROM Applications WHERE Firstname = '" . $Firstname . "' AND Surname = '" . $Surname . "';";
        
        $result = $conn->query($query);
        if ($conn->affected_rows == 0) {
            $ID = time() . rand(1000, 9999);
            $_SESSION["id"] = $ID;

            $query = "INSERT INTO Applications (Unique_id, Firstname, Surname) VALUES ('" . $ID . "', '" . $Firstname . "', '" . $Surname . "');";

            $result = $conn->query($query);
            if ($conn->affected_rows == 0) {
                echo "ERROR";
            } else {
                echo "VALID";
            } 
        } else {
            echo "SUBMITTED";
        }
    }
}

fclose($file);

?>

CREATE TABLE Applications(
Unique_id VARCHAR(15),
Firstname VARCHAR(20),
Surname VARCHAR(20),
Email VARCHAR(50),
SongTitle VARCHAR(50),
SongArtist VARCHAR(50)
);