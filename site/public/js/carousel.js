$(document).ready(function() {
    
    $('#air-1').show();
    $('#ground-1').show();
    $('#sea-1').show();
    $('#sub-1').show();
    
    var airBox = 1;
    var groundBox = 1;
    var seaBox = 1;
    var subBox = 1;
    
    $('.car-leftButton').click(function(){
        var whichID = this.id.split('-'); 
        var buttonClicked = '#' + whichID[0] + '-leftButton';
        
        if (buttonClicked == '#air-leftButton'){
            airBox = airBox - 1;
            if (airBox > 5){
                airBox = 1;
            }
            if (airBox < 1){
                airBox = 5;
            }
            $('.air-graphs').hide();
            $('#air-' + airBox).show();
            }
        if (buttonClicked == '#ground-leftButton'){
            groundBox = groundBox - 1;
            if (groundBox > 5){
                groundBox = 1;
            }
            if (groundBox < 1){
                groundBox = 5;
            }
            $('.ground-graphs').hide();
            $('#ground-' + groundBox).show();
            }
        if (buttonClicked == '#sea-leftButton'){
            seaBox = seaBox - 1;
            if (seaBox > 5){
                seaBox = 1;
            }
            if (seaBox < 1){
                seaBox = 5;
            }
            $('.sea-graphs').hide();
            $('#sea-' + seaBox).show();
            }
        if (buttonClicked == '#sub-leftButton'){
            subBox = subBox - 1;
            if (subBox > 4){
                subBox = 1;
            }
            if (subBox < 1){
                subBox = 4;
            }
            $('.sub-graphs').hide();
            $('#sub-' + subBox).show();
            }
        
        drawAirQ1();
        drawAirQ2();
        drawAirQ3();
        drawAirQ4();
        drawAirQ5();
        
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
    $('.car-rightButton').click(function(){
        var whichID = this.id.split('-'); 
        var buttonClicked = '#' + whichID[0] + '-rightButton';
        
        if (buttonClicked == '#air-rightButton'){
            airBox = airBox + 1;
            if (airBox > 5){
                airBox = 1;
            }
            if (airBox < 1){
                airBox = 5;
            }
            $('.air-graphs').hide();
            $('#air-' + airBox).show();
            }
        if (buttonClicked == '#ground-rightButton'){
            groundBox = groundBox + 1;
            if (groundBox > 5){
                groundBox = 1;
            }
            if (groundBox < 1){
                groundBox = 5;
            }
            $('.ground-graphs').hide();
            $('#ground-' + groundBox).show();
            }
        if (buttonClicked == '#sea-rightButton'){
            seaBox = seaBox + 1;
            if (seaBox > 5){
                seaBox = 1;
            }
            if (seaBox < 1){
                seaBox = 5;
            }
            $('.sea-graphs').hide();
            $('#sea-' + seaBox).show();
            }
        if (buttonClicked == '#sub-rightButton'){
            subBox = subBox + 1;
            if (subBox > 4){
                subBox = 1;
            }
            if (subBox < 1){
                subBox = 4;
            }
            $('.sub-graphs').hide();
            $('#sub-' + subBox).show();
            }
        
        drawAirQ1();
        drawAirQ2();
        drawAirQ3();
        drawAirQ4();
        drawAirQ5();
        
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