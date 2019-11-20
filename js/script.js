// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    let playerChoice = $("#input").val();
    playerChoice = playerChoice.toLowerCase();
    let randomNum = Math.random();
    randomNum = randomNum * 10;
    $("#userChoice").html(playerChoice);
    let computerChoice = "";
    if(randomNum > 6){
        computerResult = "Rock";
    } else if(randomNum >= 3 && randomNum <= 6){
        computerResult = "Paper";
    } else {
        computerResult = "Scissors";
    }
    $("#computerChoice").html(computerResult);
    if (playerChoice == "rock" && computerResult == "Scissors" || 
        playerChoice == "scissor" && computerResult == "Paper" ||
        playerChoice == "paper" && computerResult == "Rock" ) {

        $("#result").html("User Wins!");
    } else if (playerChoice == "rock" && computerResult == "Paper" || 
                playerChoice == "scissor" && computerResult == "Rock" ||
                playerChoice == "paper" && computerResult == "Scissor") {

        $("#result").html("Computer Wins!");
    } else {
        $("#result").html("Draw!");
    }
})
