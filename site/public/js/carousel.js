$(document).ready(function() {
    
    $('#air-1').show();
    var whatBox = 1;
    $('.car-leftButton').click(function(){
        var whichID = this.id.split('-'); 
        var buttonClicked = '#' + whichID[0] + '-leftButton';
        
        if (buttonClicked == '#air-leftButton'){
            whatBox = whatBox - 1;
            if (whatBox > 5){
                whatBox = 1;
            }
            if (whatBox < 1){
                whatBox = 5;
            }
            $('.air-graphs').hide();
            $('#air-' + whatBox).show();
            }
    });
    $('.car-rightButton').click(function(){
        var whichID = this.id.split('-'); 
        var buttonClicked = '#' + whichID[0] + '-rightButton';
        
        if (buttonClicked == '#air-rightButton'){
            whatBox = whatBox + 1;
            if (whatBox > 5){
                whatBox = 1;
            }
            if (whatBox < 1){
                whatBox = 5;
            }
            $('.air-graphs').hide();
            $('#air-' + whatBox).show();
            }
    });
});