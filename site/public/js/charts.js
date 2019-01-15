window.onload = function(){
    loadJSON();
}

function loadJSON(){
    var userID = localStorage.getItem("user_id");
}

var seaQuestions1 = [
          ['country', 'percentage of vote'],
          ['USA',     11],
          ['italy',      2],
          ['france',  2],
          ['ireland', 2],
          ['japan',    7]
        ];
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

var seaQestion3 = [
          ['Country', 'percentage of vote'],
          ['japan', 300],
          ['ireland', 400],
          ['england', 500],
          ['australia', 600],
          ['china', 700]
        ];


      google.charts.load("current", {
                                     'packages':['corechart', 'geochart', 'line'],
                                     'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
                                    });
      google.charts.setOnLoadCallback(drawSeaQ1);
      google.charts.setOnLoadCallback(drawSeaQ2);
      google.charts.setOnLoadCallback(drawSeaQ21);

      google.charts.setOnLoadCallback(drawSeaQ22);
      google.charts.setOnLoadCallback(drawSeaQ3);




      function drawSeaQ1() {
        var data = google.visualization.arrayToDataTable(seaQestion1);

        var options = {
          pieHole: 0.4,
          
        };
        var chart = new google.visualization.PieChart(document.getElementById('sea-chart-1'));
        chart.draw(data, options);
      }





function drawSeaQ1() {
    
        var data = google.visualization.arrayToDataTable(seaQuestions1);
        var options = {
          backgroundColor: 'transparent',
            legend: 'none',
            slices: {  0: {offset: 0.1, color: '#19a319'},
                     1: {offset: 0, color: '#cceacc'},
                     2: {offset: 0.2, color: '#009900'},
                     3: {offset: 0.3, color: '#99d699'},
                     4: {offset: 0.1, color: '#66c166'},
          },
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
    
        var data = google.visualization.arrayToDataTable(seaQestion3);
        var options = {
            title: 'What country contributes the most ocean pollution each year?',
            backgroundColor: 'transparent',
        };
        var chart = new google.visualization.GeoChart(document.getElementById('world-map-sea'));
        chart.draw(data, options);
        
      }
