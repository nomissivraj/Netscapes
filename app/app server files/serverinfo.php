<?php 
header("Access-Control-Allow-Origin: *");
include("view_content.php");
include("recipes.php");
$conn = new mysqli("localhost", "smartfridge", "7RmpQQMjxGn6u2Vt", "everyware");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$query = "SELECT * FROM Storage WHERE GTIN = '" . $_POST['gtin'] . "';";
$result = $conn->query($query);
$quantity = 0;
$exists = false;
if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        $quantity = $row['Quantity'];
        $exists = true;
    }
}

$quantity = $quantity + intval($_POST['quantity']);


//Functionality
$mode = $_POST['mode'];
if($mode == "add")addItem();
if($mode == "expirydate")expiryDate();
if($mode == "get")getItems();
if($mode == "findRecipe")getRecipes($_POST['query']);
if($mode == "available")echo json_encode(availableRecipes());
if($mode == "getPlan")weeklyPlan();

function addItem(){
    /*Adds item to global database*/
    if($GLOBALS['exists']){
        $query = "UPDATE Storage SET Quantity = " . $GLOBALS['quantity'] . " WHERE GTIN = '" . $_POST['gtin'] . "';";
    } else {
        $query = "INSERT INTO Storage (GTIN, Name, Description, Max_Serving, Energy, Fat, Saturates, Sugars, Salt, Allergens, Type, Quantity) VALUES ('" . $_POST['gtin'] . "', '" . $_POST['name'] . "', '" . $_POST['description'] . "', '" . $_POST['max_serving'] . "', '" . $_POST['energy'] . "', '" . $_POST['fat'] . "', '" . $_POST['saturates'] . "', '" . $_POST['sugars'] . "', '" . $_POST['salt'] . "', '" . $_POST['allergens'] . "', '" . $_POST['type'] . "', " . $GLOBALS['quantity'] . ");";
    }
    $result = $GLOBALS['conn']->query($query);
    
    /*Gets the expiry Date*/
    $query = "SELECT * FROM Expiry_dates WHERE GTIN = '" . $_POST['gtin'] . "';";
    $result = $GLOBALS['conn']->query($query);
    $expiryDate = "UNAVAILABLE";
    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            $expiryDate = $row['AvgShelfLife'];
            if($row['Date3'] == ""){
                $incomplete = true;
            }
        }
    }
    
    if($expiryDate == "UNAVAILABLE" || $incomplete){//If there is no expiry date then it prompts the user to add one
        echo "NoExpiryDate," . $_POST['gtin'] . ", " . $_POST['name']; //Alerts the website that there is no expiry date
    }
    $date = date("Y-m-d");
    
    /*Adds the product into the users fridge directory*/
    $query = "INSERT INTO Fridge_storage (GTIN, Name, User_ID, Date_added) VALUE('" . $_POST['gtin'] . "', '" . $_POST['name'] . "', '" . $_POST['userid'] . "', '" . $date . "')";
    $result = $GLOBALS['conn']->query($query);
}

function expiryDate(){
    $query = "SELECT * FROM Expiry_dates WHERE GTIN = '" . $_POST['gtin'] . "';";
    $result = $GLOBALS['conn']->query($query);
    $option = "UNAVAILABLE";
    $numDates = 1;
    $avgDate = 0;
    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            if($row['Date2'] == ""){
                $avgDate = $avgDate + intval($row['Date1']);
                $numDates = 2;
                $option = "Date2";
            } else if($row['Date3'] == ""){
                $avgDate = $avgDate + intval($row['Date1']) + intval($row['Date2']);
                $numDates = 3;
                $option = "Date3";
            }
        }
    }
    
    /*Manages the system if the product isn't available*/
    $newDate = date_diff(date_create($_POST['date']), date_create());
    $newDate = intval($newDate->format("%a"));
    $avgDate = $avgDate + $newDate;
    if($option == "UNAVAILABLE"){
        $query = "INSERT INTO Expiry_dates (GTIN, Name, AvgShelfLife, Date1) VALUES ('" . $_POST['gtin'] . "','" . $_POST['name'] . "','" . $newDate . "', '" . $newDate . "')";
        $result = $GLOBALS['conn']->query($query);
    } else {
        $query = "UPDATE Expiry_dates SET " . $option . " = '" . $newDate . "' WHERE GTIN = '" . $_POST['gtin'] . "';";
        $result = $GLOBALS['conn']->query($query);
    }
    
    $avgDate = $avgDate / $numDates;
    $avgDate = $avgDate;
    $query = "UPDATE Expiry_dates SET AvgShelfLife = '" . $avgDate . "' WHERE GTIN = '" . $_POST['gtin'] . "';";
    $result = $GLOBALS['conn']->query($query);
}
?>