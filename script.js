
/*global $*/
$(document).ready(function () {
    "use strict";
    var hits = 0;
    var miss = 0;
    var deployed = 0;
    var counter = 0;
    
 
    
// Stylings
    $("td").mouseover(function () {
        $(this).css({ opacity: 0.9 });
        $("td").removeClass("hover");
        $(this).addClass("hover");
        $("#ordinates").text(this.id);
            
    });
    
    $("td").mouseleave(function () {
        $("td").removeClass("hover");
        $(this).css({ opacity:1 });
       
    });
    

    
    
    
    
//mines
    var mines=[];
    var setmine;
    var deemed;
    var doomed;
    var iteration=0;
    
//Actions
    
    $("#welcome-msg").click(function () {
        $(this).hide();
        $("#setter_div").show();
        $("#header_div").show();
        
    
        
    });
    
//Setter table
    
    $("#setter td").click(function () {
        
        $(this).removeClass("preset");
        
        setmine= $.inArray(this.id, mines);
        if(setmine !==-1){
            var index = mines.indexOf(this.id);
            mines.splice(index,1);
            iteration--;    
            $(this).removeClass("set");
            $(this).addClass("unset");
            $(this).empty();
        }
        
        else{
            if(iteration<5){
                $(this).text(this.id);
                mines.push(this.id);
                iteration++;
                $(this).removeClass("unset");   
                $(this).addClass("set");
                
                
            }
            else{
                /* $(this).removeClass("unset");*/
                /*$(this).addClass("exhausted");*/
                console.log("mine setter done ! OK !");
            }
        }
        console.log("Mines planted in [" +mines+ "]");
    });
    
    $("#confirm-mines").click(function () {
     
        
                                                                            //Work in progress .. movement
            
    $( "#setter_div" ).animate({
        opacity: 0.25,
        top: "100"
        /*height: "toggle"*/
        }, 2500, function() {
        // Animation complete.
            });
    
        
        
           $("#setter_div").hide();
        $("#board_div").show();
    
    });
    
//Board table  
    
    $("#board").find('td.fresh').click(function () {
        
        deemed = this.id;
        doomed = $.inArray(deemed, mines);
        
        $("td").removeClass("hover");
        $(this).css({ opacity:1 });
        
        if (doomed !== -1) {
            console.log("pow !");
            $(this).removeClass("fresh");
            $(this).addClass("busted");
            $(this).text(this.id);
            hits++;
            
        }
        else{
            $(this).removeClass("fresh");
            $(this).addClass("busted");
            $(this).addClass("missed");   
            miss++;
            console.log("miss");
        }
        
       
        
        deployed++;
        $(this).off();
        $("#hit_count").text(hits);
        $("#miss_count").text(miss);
        $("#try_count").text(deployed);
        $("#ordinates").text(this.id);
    });
    
    
    
    $("#board").find('td.fresh1').click(function () {
        
        deemed = this.id;
        doomed = $.inArray(deemed, mines);
        
        $("td").removeClass("hover");
        $(this).css({ opacity:1 });
        
        if (doomed !== -1) {
            console.log("pow !");
            $(this).removeClass("fresh1");
            $(this).addClass("busted");
            /*$(this).text(this.id);*/
            hits++;
            
        }
        else{
            $(this).removeClass("fresh1");
            $(this).addClass("busted");
            $(this).addClass("missed1");   
            miss++;
            console.log("miss");
        }
        
       
        
        deployed++;
        $(this).off();
        $("#hit_count").text(hits);
        $("#miss_count").text(miss);
        $("#try_count").text(deployed);
        $("#ordinates").text(this.id);
    });
    

    
    
});















