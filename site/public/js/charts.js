$(document).ready(function(){
        drawAirQ1();
        drawAirQ2();
        drawAirQ3();
        drawAirQ4();
        drawAirQ5();
        
        drawSeaQ1();
        drawSeaQ2();
        drawSeaQ3();
        drawSeaQ4();
        drawSeaQ5();
        
        drawGroundQ1();
        drawGroundQ2();
        drawGroundQ3();
        drawGroundQ4();
        drawGroundQ5();
        
        drawSubQ1();
        drawSubQ2();
        drawSubQ3();
        drawSubQ4();
    
    $( window ).resize(function() {
        
        drawAirQ1();
        drawAirQ2();
        drawAirQ3();
        drawAirQ4();
        drawAirQ5();
        
        
        drawSeaQ1();
        drawSeaQ2();
        drawSeaQ3();
        drawSeaQ4();
        drawSeaQ5();
        
        drawGroundQ1();
        drawGroundQ2();
        drawGroundQ3();
        drawGroundQ4();
        drawGroundQ5();
        
        drawSubQ1();
        drawSubQ2();
        drawSubQ3();
        drawSubQ4();
    });
});

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

var airResults1True = "";
var airResults2True = "";
var airResults3True = "";
var airResults4True = "";
var airResults5True = "";

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

var groundResults1True = "";
var groundResults2True = "";
var groundResults3True = "";
var groundResults4True = "";
var groundResults5True = "";

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

var seaResults1True = "";
var seaResults2True = "";
var seaResults3True = "";
var seaResults4True = "";
var seaResults5True = "";

var subResults1 = [];
var subResults2 = [];

var subResults1Guess = "";
var subResults2Guess = "";

var subResults1True = "";
var subResults2True = "";

var subResults3 = [];
var subResults4 = [];

var subResults3Guess = "";
var subResults4Guess = "";

var subResults3True = "";
var subResults4True = "";

function loadJSON(){
    var userID = localStorage.getItem("user_id");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(JSON.parse(this.responseText));
            console.log(this.responseText)
            var response = JSON.parse(this.responseText);
            console.log(response)
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
        
            var resultSplit = value[0].split(" - ");
            if (resultSplit.length > 1){
                if(Math.floor(answer['UserAnswer']) >= Math.floor(resultSplit[0]) && Math.floor(answer['UserAnswer']) < Math.ceil(resultSplit[1])){
                    guess = index;
                }
            }
            else{
                if (value[0] == Math.floor(answer['UserAnswer'])){
                guess = index;
                }
            }
         //   console.log(Math.ceil(resultSplit[0]));
          //  console.log(Math.floor(resultSplit[0]));
    });
    return guess; //return what point guessed answer is within the array 
}

function workOutTrue(results, answer){
    // loop through results within passed in array, checking for where guessed answer sits within the array
    var truth = "";
    $.each(results, function(index, value){
        
        var resultSplit = value[0].split(" - ");
            if (resultSplit.length > 1){
                if(Math.floor(answer['Reality']) >= Math.floor(resultSplit[0]) && Math.floor(answer['Reality']) < Math.ceil(resultSplit[1])){
                    truth = index;
                }
            }
            else{
                if (value[0] == Math.floor(answer['Reality'])){
                truth = index;
                }
            }
               
    });
    return truth; //return what point guessed answer is within the array 
}

function dataRetreiveComplete(){
    
    airResults1 = air[0]['Average'];
    airResults1.unshift(['string', 'How many guessed']);
    airResults1Guess = workOutGuess(airResults1, air[0]);
    airResults1True = workOutTrue(airResults1, air[0]);
    
    airResults2 = air[1]['Average'];
    airResults2.unshift(['string', 'How many guessed']);
    airResults2Guess = workOutGuess(airResults2, air[1]);
    airResults2True = workOutTrue(airResults2, air[1]);
    
    
    airResults3 = air[2]['Average'];
    airResults3.unshift(['string', 'How many guessed']);
    airResults3Guess = workOutGuess(airResults3, air[2]);
    airResults3True = workOutTrue(airResults3, air[2]);
    
    airResults4 = air[3]['Average'];
    airResults4.unshift(['string', 'How many guessed']);
    airResults4Guess = workOutGuess(airResults4, air[3]);
    airResults4True = workOutTrue(airResults4, air[3]);
    
    airResults5 = air[4]['Average'];
    airResults5.unshift(['string', 'population guessed']);
    airResults5Guess = workOutGuess(airResults5, air[4]);
    airResults5True = workOutTrue(airResults5, air[4]);
    

    // get json array
    groundResults1 = ground[0]['Average'];
    // add needed titles for when putting into graphs
    groundResults1.unshift(['string','How many guessed']);
    // check guess against other answers in array so can make distuingishable on graph
    groundResults1Guess = workOutGuess(groundResults1, ground[0]);
    groundResults1True = workOutTrue(groundResults1, ground[0]);
    
    
    groundResults2 = ground[1]['Average'];
    groundResults2.unshift(['string','How many guessed']);
    groundResults2Guess = workOutGuess(groundResults2, ground[1]);
    groundResults2True = workOutTrue(groundResults2, ground[1]);
    console.log(groundResults2)
    
    groundResults3 = ground[2]['Average'];
    groundResults3.unshift(['string','How many guessed']);
    groundResults3Guess = workOutGuess(groundResults3, ground[2]);
    groundResults3True = workOutTrue(groundResults3, ground[2]);
    
    groundResults4 = ground[3]['Average'];
    groundResults4.unshift(['string','How many guessed']);
    groundResults4Guess = workOutGuess(groundResults4, ground[3]);
    groundResults4True = workOutTrue(groundResults4, ground[3]);
    
    groundResults5 = ground[4]['Average'];
    groundResults5.unshift(['string','How many guessed']);
    groundResults5Guess = workOutGuess(groundResults5, ground[4]);
    groundResults5True = workOutTrue(groundResults5, ground[4]);


    seaResults1 = sea[0]['Average'];
    seaResults1.unshift(['Country', 'How many guessed']);
    seaResults1Guess = workOutGuess(seaResults1, sea[0]);
    seaResults1True = workOutTrue(seaResults1, sea[0]);
    

    seaResults2 = sea[1]['Average'];
    seaResults2.unshift(['Country', 'How many guessed']);
    seaResults2Guess = workOutGuess(seaResults2, sea[1]);
    seaResults2True = workOutTrue(seaResults2, sea[1]);
    
    
    seaResults3 = sea[2]['Average'];
    seaResults3.unshift(['Country', 'How many guessed']);
    seaResults3Guess = workOutGuess(seaResults3, sea[2]);
    seaResults3True = workOutTrue(seaResults3, sea[2]);
    
    
    seaResults4 = sea[3]['Average'];
    seaResults4.unshift(['Country', 'How many guessed']);
    seaResults4Guess = workOutGuess(seaResults4, sea[3]);
    seaResults4True = workOutTrue(seaResults4, sea[3]);
    
    
    seaResults5 = sea[4]['Average'];
    seaResults5.unshift(['Country', 'How many guessed']);
    seaResults5Guess = workOutGuess(seaResults5, sea[4]);
    seaResults5True = workOutTrue(seaResults5, sea[4]);
    

    subResults1 = sub[0]['Average'];
    subResults1.unshift(['string', 'How many guessed']);
    subResults1Guess = workOutGuess(subResults1, sub[0]);
    subResults1True = workOutTrue(subResults1, sub[0]);
    
    subResults2 = sub[1]['Average'];
    subResults2.unshift(['something', 'How many guessed']);
    subResults2Guess = workOutGuess(subResults2, sub[1]);
    subResults2True = workOutTrue(subResults2, sub[1]);
    
    subResults3 = sub[2]['Average'];
    subResults3.unshift(['something', 'How many guessed']);
    subResults3Guess = workOutGuess(subResults3, sub[2]);
    subResults3True = workOutTrue(subResults3, sub[2]);
    
    subResults4 = sub[3]['Average'];
    subResults4.unshift(['something', 'How many guessed']);
    subResults4Guess = workOutGuess(subResults4, sub[3]);
    subResults4True = workOutTrue(subResults4, sub[3]);
    

          google.charts.load("current", {
                                     'packages':['corechart', 'geochart', 'line'],
                                     'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
                                    });
    
        google.charts.setOnLoadCallback(drawAirQ1);
        google.charts.setOnLoadCallback(drawAirQ2);
        google.charts.setOnLoadCallback(drawAirQ3);
        google.charts.setOnLoadCallback(drawAirQ4);
        google.charts.setOnLoadCallback(drawAirQ5);
    
        google.charts.setOnLoadCallback(drawSeaQ1);
        google.charts.setOnLoadCallback(drawSeaQ2);
        google.charts.setOnLoadCallback(drawSeaQ3);
        google.charts.setOnLoadCallback(drawSeaQ4);
        google.charts.setOnLoadCallback(drawSeaQ5);
    
        google.charts.setOnLoadCallback(drawGroundQ1);
        google.charts.setOnLoadCallback(drawGroundQ2);
        google.charts.setOnLoadCallback(drawGroundQ3);
        google.charts.setOnLoadCallback(drawGroundQ4);
        google.charts.setOnLoadCallback(drawGroundQ5);
    
        google.charts.setOnLoadCallback(drawSubQ1);
        google.charts.setOnLoadCallback(drawSubQ2);
        google.charts.setOnLoadCallback(drawSubQ3);
        google.charts.setOnLoadCallback(drawSubQ4);

    
    
}


// ************************************ . AIR CHARTS . ***************************************

function drawAirQ1() {
    
    $.each(airResults1, function(index, value){
            if (index == airResults1Guess){
                value[2] = 'point {fill-color: red;}';
                }
            else if (index == airResults1True){
                value[2] = 'point {size: 13; shape-type: star; fill-color: green;}' ;
            }
            else{
                if (index == 0){
                   value[2] = { 'type': 'string', 'role': 'style' }; 
                }
                else{
                    value[2] = 'point {fill-color: black;}' ;
                }
            }
            
            airResults1[index] = value;
            
    }); 
    
        var data = google.visualization.arrayToDataTable(airResults1);
        var options = {
            curveType: '',
            legend: 'none',
            backgroundColor: 'transparent',
            chartArea:{left:30,top:10,width:"100%"},
           // hAxis: {title: '', minValue: 0, maxValue: 1000},
           // vAxis: {title: '', minValue: 0, maxValue: 1000},
            colors: ['orange'],
        };
        var chart = new google.visualization.ScatterChart(document.getElementById('air-chart-1'));
        chart.draw(data, options);
      }

function drawAirQ2() {
    
        var data = google.visualization.arrayToDataTable(airResults2);
        var slices = { [0]: { color: '#FFB6C1' }, [1]: { color: '#FFB6C1' }, [2]: { color: '#FFB6C1' }, [3]: { color: '#FFB6C1' }, [4]: { color: '#FFB6C1' }, [5]: { color: '#FFB6C1' }, [6]: { color: '#FFB6C1' }, [7]: { color: '#FFB6C1' }, [8]: { color: '#FFB6C1' }, [9]: { color: '#FFB6C1' }, [10]: { color: '#FFB6C1' }, [airResults2Guess-1]: { offset: 0.2, color: 'red' }, [airResults2True-1]: { offset: 0.4, color: 'green' }};
        var options = {
          backgroundColor: 'transparent',
            legend: 'none',
            slices: slices,
        };
    
        var chart = new google.visualization.PieChart(document.getElementById('air-chart-2'));
        chart.draw(data, options);
      }

function drawAirQ3() {
    
        $.each(airResults3, function(index, value){
            if (index == airResults3Guess){
                value[2] = 'red';
                }
            else if (index == airResults3True){
                value[2] = 'green' ;
            }
            else{
                if (index == 0){
                   value[2] = { role: 'style' }; 
                }
                else{
                    value[2] = 'black' ;
                }
            }
            
            airResults3[index] = value;
            
    });
    
        var data = google.visualization.arrayToDataTable(airResults3);
        var options = {
            hAxis: {title: 'Deaths Per Year', minValue: 0, maxValue: 10},
            vAxis: {title: 'amount of people guessed', minValue: 0, maxValue: 10},
            curveType: '',
            legend: 'none',
            backgroundColor: 'transparent',
            chartArea:{left:30,top:10,width:"100%"},
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('air-chart-3'));
        chart.draw(data, options);
      }

function drawAirQ4() {
    
        var data = google.visualization.arrayToDataTable(airResults4);
        var slices = { [0]: { color: 'black' }, [1]: { color: 'black' }, [2]: { color: 'black' }, [3]: { color: 'black' }, [4]: { color: 'black' }, [5]: { color: 'black' }, [6]: { color: 'black' }, [7]: { color: 'black' }, [8]: { color: 'black' }, [9]: { color: 'black' }, [10]: { color: 'black' }, [airResults4Guess-1]: { offset: 0.2, color: 'red' }, [airResults4True-1]: { offset: 0.4, color: 'green' }};
        var options = {
          backgroundColor: 'transparent',
            legend: 'none',
            slices: slices,
        };
    
        var chart = new google.visualization.PieChart(document.getElementById('air-chart-4'));
        chart.draw(data, options);
      }

function drawAirQ5() {
    
        $.each(airResults5, function(index, value){
            if (index == airResults5Guess){
                value[2] = 'red';
                }
            else if (index == airResults5True){
                value[2] = 'green' ;
            }
            else{
                if (index == 0){
                   value[2] = { role: 'style' }; 
                }
                else{
                    value[2] = 'black' ;
                }
            }
            
            airResults5[index] = value;
            
    });
    
        var data = google.visualization.arrayToDataTable(airResults5);
        var options = {
            hAxis: {title: 'Percentage of population', minValue: 0, maxValue: 10},
            vAxis: {title: 'amount of people guessed', minValue: 0, maxValue: 10},
            curveType: '',
            legend: 'none',
            backgroundColor: 'transparent',
            chartArea:{left:30,top:10,width:"100%"},
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('air-chart-5'));
        chart.draw(data, options);
      }

// ************************************ . END OF AIR CHARTS . ***************************************

// ************************************ . GROUND CHARTS . ***************************************

function drawGroundQ1() {
    
        $.each(groundResults1, function(index, value){
            if (index == groundResults1Guess){
                value[2] = 'red';
                }
            else if (index == groundResults1True){
                value[2] = 'green' ;
            }
            else{
                if (index == 0){
                   value[2] = { role: 'style' }; 
                }
                else{
                    value[2] = 'black' ;
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
            chartArea:{left:30,top:10,width:"100%"},
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('ground-chart-1'));
        chart.draw(data, options);
      }



function drawGroundQ2() {
    
        var data = google.visualization.arrayToDataTable(groundResults2);

        var slices = { [0]: { color: 'black' }, [1]: { color: 'black' }, [2]: { color: 'black' }, [3]: { color: 'black' }, [4]: { color: 'black' }, [5]: { color: 'black' }, [6]: { color: 'black' }, [7]: { color: 'black' }, [8]: { color: 'black' }, [9]: { color: 'black' }, [10]: { color: 'black' }, [groundResults2Guess-1]: { offset: 0.2, color: 'red' }, [groundResults2True-1]: { offset: 0.4, color: 'green' }};
        if (groundResults2Guess == groundResults2True){
            slices = { [0]: { color: 'black' }, [1]: { color: 'black' }, [2]: { color: 'black' }, [3]: { color: 'black' }, [4]: { color: 'black' }, [5]: { color: 'black' }, [6]: { color: 'black' }, [7]: { color: 'black' }, [8]: { color: 'black' }, [9]: { color: 'black' }, [groundResults2Guess-1]: { offset: 0.2, color: 'yellow' }, [groundResults2True-1]: { offset: 0.4, color: 'yellow' }};
        }
        var options = {
          backgroundColor: 'transparent',
            legend: 'none',
            slices: slices, 
        };
    
        var chart = new google.visualization.PieChart(document.getElementById('ground-chart-2'));
        chart.draw(data, options);
      }



function drawGroundQ3() {
    
    $.each(groundResults3, function(index, value){
            if (index == groundResults3Guess){
                value[2] = 'point {fill-color: red;}';
                }
            else if (index == groundResults3True){
                value[2] = 'point {size: 13; shape-type: star; fill-color: green;}' ;
            }
            else{
                if (index == 0){
                   value[2] = { 'type': 'string', 'role': 'style' }; 
                }
                else{
                    value[2] = 'point {fill-color: black;}' ;
                }
            }
            
            groundResults3[index] = value;
            
    }); 
    
        var data = google.visualization.arrayToDataTable(groundResults3);
        var options = {
            curveType: '',
            legend: 'none',
            backgroundColor: 'transparent',
            chartArea:{left:30,top:10,width:"100%"},
           // hAxis: {title: '', minValue: 0, maxValue: 1000},
           // vAxis: {title: '', minValue: 0, maxValue: 1000},
            colors: ['orange'],
        };
        var chart = new google.visualization.ScatterChart(document.getElementById('ground-chart-3'));
        chart.draw(data, options);
      }


function drawGroundQ4() {
    
        var data = google.visualization.arrayToDataTable(groundResults4);
        var slices = { [0]: { color: 'black' }, [1]: { color: 'black' }, [2]: { color: 'black' }, [3]: { color: 'black' }, [4]: { color: 'black' }, [5]: { color: 'black' }, [6]: { color: 'black' }, [7]: { color: 'black' }, [8]: { color: 'black' }, [9]: { color: 'black' }, [groundResults4Guess-1]: { offset: 0.2, color: 'red' }, [groundResults4True-1]: { offset: 0.4, color: 'green' }};
        if (seaResults1Guess == seaResults1True){
            slices = { [0]: { color: 'black' }, [1]: { color: 'black' }, [2]: { color: 'black' }, [3]: { color: 'black' }, [4]: { color: 'black' }, [5]: { color: 'black' }, [6]: { color: 'black' }, [7]: { color: 'black' }, [8]: { color: 'black' }, [groundResults4Guess-1]: { offset: 0.2, color: 'yellow' }, [groundResults4True-1]: { offset: 0.4, color: 'yellow' }};
        }
        var options = {
          backgroundColor: 'transparent',
            legend: 'none',
            slices: slices,
        };
    
        var chart = new google.visualization.PieChart(document.getElementById('ground-chart-4'));
        chart.draw(data, options);
      }

function drawGroundQ5() {
    
        var data = google.visualization.arrayToDataTable(groundResults5);
        var options = {
            title: 'What country contributes the most ocean pollution each year?',
            backgroundColor: 'transparent',
        };
        var chart = new google.visualization.GeoChart(document.getElementById('ground-chart-5'));
        chart.draw(data, options);
        
      }

// ************************************ . END OF GROUND CHARTS . ***************************************


// ************************************ . SEA CHARTS . ***************************************

function drawSeaQ1() {
    
        var data = google.visualization.arrayToDataTable(seaResults1);

        var slices = { [0]: { color: 'black' }, [1]: { color: 'black' }, [2]: { color: 'black' }, [3]: { color: 'black' }, [4]: { color: 'black' }, [5]: { color: 'black' }, [6]: { color: 'black' }, [7]: { color: 'black' }, [8]: { color: 'black' }, [9]: { color: 'black' }, [seaResults1Guess-1]: { offset: 0.2, color: 'red' }, [seaResults1True-1]: { offset: 0.4, color: 'green' }};
        if (seaResults1Guess == seaResults1True){
            slices = { [0]: { color: 'black' }, [1]: { color: 'black' }, [2]: { color: 'black' }, [3]: { color: 'black' }, [4]: { color: 'black' }, [5]: { color: 'black' }, [6]: { color: 'black' }, [7]: { color: 'black' }, [seaResults1Guess-1]: { offset: 0.2, color: 'yellow' }, [seaResults1True-1]: { offset: 0.4, color: 'yellow' }};
        }
        var options = {
          backgroundColor: 'transparent',
            legend: 'none',
            slices: slices, 
        };
    
        var chart = new google.visualization.PieChart(document.getElementById('sea-chart-1'));
        chart.draw(data, options);
      }


function drawSeaQ2() {
    
    $.each(seaResults2, function(index, value){
            if (index == seaResults2Guess){
                value[2] = 'red';
                }
            else if (index == seaResults2True){
                value[2] = 'green' ;
            }
            else{
                if (index == 0){
                   value[2] = { role: 'style' }; 
                }
                else{
                    value[2] = 'black' ;
                }
            }
            
            seaResults2[index] = value;
            
    });
    
      var data = google.visualization.arrayToDataTable(seaResults2);

      var view = new google.visualization.DataView(data);

      var options = {
        legend: { position: "none" },
          backgroundColor: 'transparent',
      };
      var chart = new google.visualization.BarChart(document.getElementById("sea-chart-2"));
      chart.draw(view, options);
  }


function drawSeaQ3() {
    
        var data = google.visualization.arrayToDataTable(seaResults3);
        var options = {
            title: 'What country contributes the most ocean pollution each year?',
            backgroundColor: 'transparent',
          colorAxis: {colors: ['#00853f', 'black', 'black']},
        };
        var chart = new google.visualization.GeoChart(document.getElementById('world-map-sea'));
        chart.draw(data, options);
        
      }

function drawSeaQ4() {
    
    $.each(seaResults4, function(index, value){
            if (index == seaResults4Guess){
                value[2] = 'point {fill-color: red;}';
                }
            else if (index == seaResults4True){
                value[2] = 'point {size: 13; shape-type: star; fill-color: green;}' ;
            }
            else{
                if (index == 0){
                   value[2] = { 'type': 'string', 'role': 'style' }; 
                }
                else{
                    value[2] = 'point {fill-color: black;}' ;
                }
            }
            
            seaResults4[index] = value;
            
    }); 
    
        var data = google.visualization.arrayToDataTable(seaResults4);
        var options = {
            curveType: '',
            legend: 'none',
            backgroundColor: 'transparent',
            chartArea:{left:30,top:10,width:"100%"},
           // hAxis: {title: '', minValue: 0, maxValue: 1000},
           // vAxis: {title: '', minValue: 0, maxValue: 1000},
            colors: ['orange'],
        };
        var chart = new google.visualization.ScatterChart(document.getElementById('sea-chart-4'));
        chart.draw(data, options);
      }

function drawSeaQ5() {
    
        var data = google.visualization.arrayToDataTable(seaResults5);

        var slices = { [0]: { color: 'black' }, [1]: { color: 'black' }, [2]: { color: 'black' }, [3]: { color: 'black' }, [4]: { color: 'black' }, [5]: { color: 'black' }, [6]: { color: 'black' }, [7]: { color: 'black' }, [8]: { color: 'black' }, [9]: { color: 'black' }, [10]: { color: 'black' }, [seaResults5Guess-1]: { offset: 0.2, color: 'red' }, [seaResults5True-1]: { offset: 0.4, color: 'green' }};
        if (seaResults5Guess == seaResults5True){
            slices = { [0]: { color: 'black' }, [1]: { color: 'black' }, [2]: { color: 'black' }, [3]: { color: 'black' }, [4]: { color: 'black' }, [5]: { color: 'black' }, [6]: { color: 'black' }, [7]: { color: 'black' }, [8]: { color: 'black' }, [9]: { color: 'black' }, [seaResults5Guess-1]: { offset: 0.2, color: 'yellow' }, [seaResults1True-1]: { offset: 0.4, color: 'yellow' }};
        }
        var options = {
          backgroundColor: 'transparent',
            legend: 'none',
            slices: slices, 
        };
    
        var chart = new google.visualization.PieChart(document.getElementById('sea-chart-5'));
        chart.draw(data, options);
      }


// ************************************ . END OF SEA CHARTS . ***************************************


// ************************************ . SUB CHARTS . ***************************************

function drawSubQ1() {
    
    $.each(subResults1, function(index, value){
            if (index == subResults1Guess){
                value[2] = 'point {fill-color: red;}';
                }
            else if (index == subResults1True){
                value[2] = 'point {fill-color: green;}' ;
            }
            else{
                if (index == 0){
                   value[2] = { 'type': 'string', 'role': 'style' }; 
                }
                else{
                    value[2] = 'point {fill-color: black;}' ;
                }
            }
            
            subResults1[index] = value;
            
    }); 
    
        var data = google.visualization.arrayToDataTable(subResults1);
        var options = {
            curveType: '',
            legend: 'none',
            backgroundColor: 'transparent',
            chartArea:{left:30,top:10,width:"100%"},
           // hAxis: {title: '', minValue: 0, maxValue: 1000},
           // vAxis: {title: '', minValue: 0, maxValue: 1000},
            colors: ['orange'],
        };
        var chart = new google.visualization.ScatterChart(document.getElementById('sub-chart-1'));
        chart.draw(data, options);
      }


function drawSubQ2() {
    
        $.each(subResults2, function(index, value){
            if (index == subResults2Guess){
                value[2] = 'red';
                }
            else if (index == subResults2True){
                value[2] = 'green' ;
            }
            else{
                if (index == 0){
                   value[2] = { role: 'style' }; 
                }
                else{
                    value[2] = 'black' ;
                }
            }
            
            subResults2[index] = value;
            
    });
    
        var data = google.visualization.arrayToDataTable(subResults2);
        var options = {
            hAxis: {title: 'amount of sites', minValue: 0, maxValue: 10},
            vAxis: {title: 'amount of people guessed', minValue: 0, maxValue: 10},
            curveType: '',
            legend: 'none',
            backgroundColor: 'transparent',
            chartArea:{left:30,top:10,width:"100%"},
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('sub-chart-2'));
        chart.draw(data, options);
      }

function drawSubQ3() {
    
        var data = google.visualization.arrayToDataTable(subResults3);

        var slices = { [0]: { color: 'black' }, [1]: { color: 'black' }, [2]: { color: 'black' }, [3]: { color: 'black' }, [4]: { color: 'black' }, [5]: { color: 'black' }, [6]: { color: 'black' }, [7]: { color: 'black' }, [8]: { color: 'black' }, [9]: { color: 'black' }, [10]: { color: 'black' }, [subResults3Guess-1]: { offset: 0.2, color: 'red' }, [subResults3True-1]: { offset: 0.4, color: 'green' }};
        if (subResults3Guess == subResults3True){
            slices = { [0]: { color: 'black' }, [1]: { color: 'black' }, [2]: { color: 'black' }, [3]: { color: 'black' }, [4]: { color: 'black' }, [5]: { color: 'black' }, [6]: { color: 'black' }, [7]: { color: 'black' }, [8]: { color: 'black' }, [9]: { color: 'black' }, [subResults3Guess-1]: { offset: 0.2, color: 'yellow' }, [subResults3True-1]: { offset: 0.4, color: 'yellow' }};
        }
        var options = {
          backgroundColor: 'transparent',
            legend: 'none',
            slices: slices, 
        };
    
        var chart = new google.visualization.PieChart(document.getElementById('sub-chart-3'));
        chart.draw(data, options);
      }

function drawSubQ4() {
    
    $.each(subResults4, function(index, value){
            if (index == subResults4Guess){
                value[2] = 'point {fill-color: red;}';
                }
            else if (index == subResults4True){
                value[2] = 'point {fill-color: green;}' ;
            }
            else{
                if (index == 0){
                   value[2] = { 'type': 'string', 'role': 'style' }; 
                }
                else{
                    value[2] = 'point {fill-color: black;}' ;
                }
            }
            
            subResults4[index] = value;
            
    }); 
    
        var data = google.visualization.arrayToDataTable(subResults4);
        var options = {
            curveType: '',
            legend: 'none',
            backgroundColor: 'transparent',
            chartArea:{left:30,top:10,width:"100%"},
           // hAxis: {title: '', minValue: 0, maxValue: 1000},
           // vAxis: {title: '', minValue: 0, maxValue: 1000},
            colors: ['orange'],
        };
        var chart = new google.visualization.ScatterChart(document.getElementById('sub-chart-4'));
        chart.draw(data, options);
      }

// ************************************ . END OF SUB CHARTS . ***************************************