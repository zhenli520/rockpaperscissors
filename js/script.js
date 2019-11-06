// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    let playerChoice = $("#input").val();
    let options = ["rock", "scissors", "paper"];
    let randomChoice = options.random();
    $("#userChoice").html(playerChoice);

})
