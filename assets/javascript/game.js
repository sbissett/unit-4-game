//* Game random number variables set betwenn 19 and 120
//* Crystal numbers variable bewtween 1 to 12
//* 4 crystals so 4 additional variables
//* Game random number set immediately and cleared/changed at each game
//* Player presses random crystal to increase score
//* When player hits a crystal it will update players score
//* Player wins if their score matches random number
//\\* add an event listener for the craystals; then add the logic to what I want to occur.
//* Player looses if their scores goes above random number
//* Wins and Loses tallied throughout game
//* Game restarts when player wins or looses.
//* Game goes to 10 THEN resets

// to tee up jquery with start with the $(document).ready(function() {}

var gems = [

    {
        name: "diamond",
        source: "assets/images/Diamondimage.jpg"
    },

    {
        name: "ruby",
        source: "assets/images/Rubyimage.jpg"
    },

    {
        name: "Sapphire",
        source: "assets/images/Sapphireimage.jpg"
    },

    {
        name: "Sapphire",
        source: "assets/images/Yellowcrystalimage.jpg"
    }
]

var scoreDisplay = $(".score")
var wins = 0;
console.log("wins: " + wins);

var losses = 0;
console.log("losses: " + losses);

var score = 0;
console.log("score: " + score);

var compNumber = Math.floor(Math.random() * 40) + 19; // this is the random computer generated number
console.log("compNumber: " + compNumber);
$(".randomNumber").html(compNumber);

$(document).ready(function () {


    $("#crystalZone").on("click", "img", function (event) {

        console.log("were in here");
        var scoreValue = event.currentTarget.attributes.score.value;
        score = score + parseInt(scoreValue);
        console.log('score', score)
        // console.log("Total Score: " + totalScore);
        // $(".scoreDisplay").html(totalScore);
        scoreDisplay.html(score)
        if(score === compNumber) {
            wins++ ;
            $(".wins").html ("Wins: " + wins);
            reset();

          }

        else if (score > compNumber) {
            losses ++ ;
            $(".losses").html("losses: " + losses);
            reset();
        }  


    });


    //*create and array for computer guess options between 9 and 120
    //where the computer begins it's guesses at 19 and ends at 102
    // I got this concept and tactics

    function gemScore() {

        return Math.floor(Math.random() * 12);

    }

    function makeGems() {
        var crystalZone = $("#crystalZone")
        for (var i = 0; i < 4; i++) {
            var gemImage = $("<img>");

            var currentGem = gems[i];
            gemImage.attr('src', currentGem.source);
            gemImage.addClass("gem");
            gemImage.attr('name', currentGem.name);
            gemImage.attr('score', gemScore())
            crystalZone.append(gemImage)

        }
    }
    makeGems()
});

// var compNumber = Math.floor(Math.random() *102) + 19;
//     console.log("compNumber: " + compNumber);
//     $(".randomNumber").html(compNumber);


// var gemDiamond = Math.floor(Math.random() *12 ) +1;
//     console.log("Gem Diamond: " + gemDiamond);
//     $("#imgDiamond").append("<img src=" + "assets/images/Diamondimage.jpg" + " value=" + gemDiamond + ">");

// var gemRuby = Math.floor(Math.random() *12) + 1;
//     console.log("Gem Ruby: " +gemRuby);
//     $("#imgRuby").append("<img src=" + "assets/images/Rubyimage.jpg" + " value=" + gemRuby + ">");

//  var gemSapphire = Math.floor(Math.random() *12 ) +1;
//      console.log("Gem Sapphire; " + gemSapphire);
//      $("#imgSapphire").append("<img src=" + "assets/images/Sapphireimage.jpg" + " value=" + gemSapphire + ">");


//  var gemYellowcrystal = Math.floor(Math.random () *12 ) +1;
//      console.log("Gem Yellow Crystal; " + gemYellowcrystal);
//     $("#imgYellowcrystal").append("<img src=" + "assets/images/Yellowcrystalimage.jpg" + " value=" + gemYellowcrystal + ">");   

// A few more variables







//Starting with my functions - Full Transparency - Function code pirated from web


function reset() {
    compNumber = Math.floor(Math.random() * 40 + 19);
    score=0;
    console.log("newcompNumber: " + compNumber);

    $(".scoreDisplay").html("");
    $(".randomNumber").html(compNumber);


    // gemDiamond = Math.floor(Math.random() *12) +1;
    //     console.log("gemDiamond: " + gemDiamond);
    //     $("#imgDiamond").html("<img src=" + "assets/images/Diamondimage.jpg" + "value =" + imgDiamond + ">");

    // gemRuby = Math.floor(Math.random() *12) +1;
    //     console.log("gemRuby: " + gemRuby);
    //     $("#imgRuby").html("<img src =" + "assets/images/Rubyimage.jpg" + "value=" + imgRuby + ">");

    // gemSapphire = Math.floor(Math.random() *12) +1;
    //     console.log("gemSapphire: " + gemSapphire);
    //     $("#imgSapphire").html("<img src =" + "assets/images/Sapphireimage.jpg" + "value=" + imgSapphire + ">");


    // gemYellowcrystal = Math.floor(Math.random() *12) +1;
    //     console.log("gemYellowcrystal: " + gemYellowcrystal);
    //     $("#imgYellowcrystal").html("<img src = " + "assets/images/Yellowcrytsalimage.jpg" + "value=" + imgYellowcrystal + ">");   


};

// $('img').on("click", function(){
//     var totalScore = scoreDisplay += parseInt ($(this).attr("value"));
//         console.log("Total Score: " + totalScore);
//     $(".scoreDisplay").html(totalScore); 

//     if(totalScore === compNumber){
//         wins++;
//         $("wins").html("wins: " + wins);
//             console.log("wins: " + wins);
//             reset();

//     }
//     else if (totalScore > compNumber) {
//         losses++ ;
//         $("losses").html("losses: " + losses);
//         reset();

//     }

//   });


