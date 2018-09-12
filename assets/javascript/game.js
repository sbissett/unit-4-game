//* Game random number variables set betwenn 19 and 120
//* Crystal numbers variable bewtween 1 to 12
//* 4 crystals so 4 additional variables
//* Game random number set immediately and cleared/changed at each game
//* Player presses random crystal to increase score
//* When player hits a crystal it will update players score
//* Player wins if their score matches random number
//* Player looses if their scores goes above random number
//* Wins and Loses tallied throughout game
//* Game restarts when player wins or looses.
//* Game goes to 10 THEN resets

// to tee up jquery with start with the $(document).ready(function() {}

$(document).ready(function() { 

//*create and array for computer guess options between 9 and 120
//where the computer begins it's guesses at 19 and ends at 102


var compNumber = Math.floor(Math.random() *102) + 19;
    console.log("compNumber: " + compNumber);
    $(".randomNumber").html(compNumber);


var diamondCrystal = Math.floor(Math.random() *12) + 1;
    console.log("Diamond: " + diamondCrystal);
    $("#img").html("img src=" + "assets/iamges/Diamondimage.jpb" + " value")
    


});


});