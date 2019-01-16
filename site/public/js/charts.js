var air = [];
var sea = [];
var ground = [];
var sub = [];

var airResults1 = [];
var airResults2 = [];
var airResults3 = [];
var airResults4 = [];
var airResults5 = [];

var airResults1Guess = "";
var airResults2Guess = "";
var airResults3Guess = "";
var airResults4Guess = "";
var airResults5Guess = "";

var groundResults1 = [];
var groundResults2 = [];
var groundResults3 = [];
var groundResults4 = [];
var groundResults5 = [];

var groundResults1Guess = "";
var groundResults2Guess = "";
var groundResults3Guess = "";
var groundResults4Guess = "";
var groundResults5Guess = "";

var seaResults1 = [];
var seaResults2 = [];
var seaResults3 = [];
var seaResults4 = [];
var seaResults5 = [];

var seaResults1Guess = "";
var seaResults2Guess = "";
var seaResults3Guess = "";
var seaResults4Guess = "";
var seaResults5Guess = "";

var subResults1 = [];
var subResults2 = [];

function loadJSON(){
    var userID = 3 //localStorage.getItem("user_id");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText))
            var response = JSON.parse(this.responseText);
            ground = response['ground'];
            air = response['highAir'];
            sea = response['sea'];
            sub = response['subSurface']
            console.log(ground);
            dataRetreiveComplete();
        }
    };
    xhttp.open("POST", "http://netscapes.crumbdesign.co.uk/app_server_files/getData/", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("userid=" + userID);
}

function workOutGuess(results, answer){
    // loop through results within passed in array, checking for where guessed answer sits within the array
    var guess = "";
    $.each(results, function(index, value){
        if (value[0] == answer['UserAnswer']){
            guess = index;
            }
    });
    return guess; //return what point guessed answer is within the array 
}

function dataRetreiveComplete(){
    
    airResults1 = air[0]['Average'];
    airResults2 = air[1]['Average'];
    airResults3 = air[2]['Average'];
    airResults4 = air[3]['Average'];
    airResults5 = air[4]['Average'];

    // get json array
    groundResults1 = ground[0]['Average'];
    // check guess against other answers in array so can make distuingishable on graph
    groundResults1Guess = workOutGuess(groundResults1, ground[0]);
    // add needed titles for when putting into graphs
    groundResults1.unshift(['string','How many guessed']);
    
    groundResults2 = ground[1]['Average'];
    groundResults2Guess = workOutGuess(groundResults2, ground[1]);
    groundResults2.unshift(['string','test']);
    
    groundResults3 = ground[2]['Average'];
    groundResults3Guess = workOutGuess(groundResults3, ground[2]);
    groundResults3.unshift(['string','test title']);
    
    groundResults4 = ground[3]['Average'];
    groundResults4Guess = workOutGuess(groundResults4, ground[3]);
    groundResults4.unshift(['string','test title']);
    
    groundResults5 = ground[4]['Average'];
    groundResults5Guess = workOutGuess(groundResults5, ground[4]);
    groundResults5.unshift(['string','test title']);


    seaResults1 = sea[0]['Average'];
    seaResults1Guess = workOutGuess(seaResults1, sea[0]);
    seaResults1.unshift(['Country', 'Percentage of vote']);

    seaResults2 = sea[1]['Average'];
    seaResults2Guess = workOutGuess(seaResults2, sea[1]);
    seaResults2.unshift(['Country', 'Percentage of vote']);
    
    seaResults3 = sea[2]['Average'];
    seaResults3Guess = workOutGuess(seaResults3, sea[2]);
    seaResults3.unshift(['Country', 'Percentage of vote']);
    
    seaResults4 = sea[3]['Average'];
    seaResults4Guess = workOutGuess(seaResults4, sea[3]);
    seaResults4.unshift(['Country', 'Percentage of vote']);
    
    seaResults5 = sea[4]['Average'];
    seaResults5Guess = workOutGuess(seaResults5, sea[4]);
    seaResults5.unshift(['Country', 'Percentage of vote']);

    subResults1 = sub[0]['Average'];
    subResults2 = sub[1]['Average'];
    

          google.charts.load("current", {
                                     'packages':['corechart', 'geochart', 'line'],
                                     'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
                                    });
    
        google.charts.setOnLoadCallback(drawSeaQ1);
    
        google.charts.setOnLoadCallback(drawSeaQ2);
        google.charts.setOnLoadCallback(drawSeaQ21);
        google.charts.setOnLoadCallback(drawSeaQ22);
    
        google.charts.setOnLoadCallback(drawSeaQ3);
    
        google.charts.setOnLoadCallback(drawSeaQ4);
    
        google.charts.setOnLoadCallback(drawGroundQ1);
        google.charts.setOnLoadCallback(drawGroundQ5);

    
    
}


var seaQuestions2 = [
          ['Years to degrade', 'results'],
          [100,  50],
          [200,  230],
          [300,  700],
          [400,  270],
          [500,  400],
          [600,  100],
          [700,  780],
        ];
var seaQuestions2fact = [
          ['fact', 'amount-who-guessed'],
          [100,  50],
        ];
var seaQuestions2guess = [
          ['guess', 'amount-who-guessed'],
          [500,  400],
        ];

// ************************************ . AIR CHARTS . ***************************************
// ************************************ . END OF AIR CHARTS . ***************************************

// ************************************ . GROUND CHARTS . ***************************************

function drawGroundQ1() {
    
        $.each(groundResults1, function(index, value){
            if (index == groundResults1Guess){
                value[2] = 'red';
                }
            else{
                if (index == 0){
                   value[2] = { role: 'style' }; 
                }
                else{
                    value[2] = 'blue' ;
                }
            }
            groundResults1[index] = value;
    });
    
        var data = google.visualization.arrayToDataTable(groundResults1);
        var options = {
            hAxis: {title: 'Percentage of carbon emmisions', minValue: 0, maxValue: 10},
            vAxis: {title: 'amount of people guessed', minValue: 0, maxValue: 10},
            curveType: '',
            legend: 'none',
            backgroundColor: 'transparent',
            width: 500,
            height: 300,
            chartArea:{left:30,top:10,width:"100%"},
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('ground-chart-1'));
        chart.draw(data, options);
      }

function drawGroundQ5() {
    
        var data = google.visualization.arrayToDataTable(groundResults5);
        var slices = { [0]: { color: '#19a319' }, [1]: { color: '#19a319' }, [2]: { color: '#19a319' }, [3]: { color: '#19a319' }, [4]: { color: '#19a319' }, [groundResults5Guess]: { offset: 0.2, color: 'red' }};
        var options = {
          backgroundColor: 'transparent',
            legend: 'none',
            slices: slices,
        };
    
        var chart = new google.visualization.PieChart(document.getElementById('ground-chart-5'));
        chart.draw(data, options);
      }

// ************************************ . END OF GROUND CHARTS . ***************************************


// ************************************ . SEA CHARTS . ***************************************

function drawSeaQ1() {
    
        var data = google.visualization.arrayToDataTable(seaResults1);
        var slices = { [0]: { color: 'pink' }, [1]: { color: 'blue' }, [2]: { color: '#19a319' }, [3]: { color: '#19a319' }, [4]: { color: '#19a319' }, [seaResults1Guess]: { offset: 0.2, color: 'red' }};
        var options = {
          backgroundColor: 'transparent',
            legend: 'none',
            slices: slices, 
        };
    
        var chart = new google.visualization.PieChart(document.getElementById('sea-chart-1'));
        chart.draw(data, options);
      }

function drawSeaQ2() {
    
        var data = google.visualization.arrayToDataTable(seaQuestions2);
        var options = {
            hAxis: {title: 'years to degrade', minValue: 0, maxValue: 1000},
            vAxis: {title: 'amount of people guessed', minValue: 0, maxValue: 1000},
            curveType: '',
            legend: 'none',
            backgroundColor: 'transparent',
            width: 500,
            height: 300,
            chartArea:{left:30,top:10,width:"100%"},
        };
        var chart = new google.visualization.LineChart(document.getElementById('sea-chart-2'));
        chart.draw(data, options);
      }

function drawSeaQ21() {
    
        var data = google.visualization.arrayToDataTable(seaQuestions2fact);
        var options = {
            curveType: '',
            legend: 'none',
            backgroundColor: 'transparent',
            width: 500,
            height: 300,
            chartArea:{left:30,top:10,width:"100%"},
            hAxis: {title: '', minValue: 0, maxValue: 1000},
            vAxis: {title: '', minValue: 0, maxValue: 1000},
            colors: ['pink'],
        };
        var chart = new google.visualization.ScatterChart(document.getElementById('sea-chart-2-1'));
        chart.draw(data, options);
      }
function drawSeaQ22() {
    
        var data = google.visualization.arrayToDataTable(seaQuestions2guess);
        var options = {
            curveType: '',
            legend: 'none',
            backgroundColor: 'transparent',
            width: 500,
            height: 300,
            chartArea:{left:30,top:10,width:"100%"},
            hAxis: {title: '', minValue: 0, maxValue: 1000},
            vAxis: {title: '', minValue: 0, maxValue: 1000},
            colors: ['orange'],
        };
        var chart = new google.visualization.ScatterChart(document.getElementById('sea-chart-2-2'));
        chart.draw(data, options);
      }

function drawSeaQ3() {
    
        var data = google.visualization.arrayToDataTable(seaResults3);
        var options = {
            title: 'What country contributes the most ocean pollution each year?',
            backgroundColor: 'transparent',
        };
        var chart = new google.visualization.GeoChart(document.getElementById('world-map-sea'));
        chart.draw(data, options);
        
      }

function drawSeaQ4() {
    
        var data = google.visualization.arrayToDataTable(seaResults4);
        var options = {
            curveType: '',
            legend: 'none',
            backgroundColor: 'transparent',
            width: 500,
            height: 300,
            chartArea:{left:30,top:10,width:"100%"},
           // hAxis: {title: '', minValue: 0, maxValue: 1000},
           // vAxis: {title: '', minValue: 0, maxValue: 1000},
            colors: ['orange'],
        };
        var chart = new google.visualization.ScatterChart(document.getElementById('sea-chart-4'));
        chart.draw(data, options);
      }

// ************************************ . END OF SEA CHARTS . ***************************************


// ************************************ . SUB CHARTS . ***************************************
// ************************************ . END OF SUB CHARTS . ***************************************