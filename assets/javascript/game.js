$(document).ready(function(){

    someNum = 0
    
    $("body").on("click", "#start", function(){
        var someNum = Math.floor(Math.random() + 120) + 1;
        $(".randomNumber").text("Your random number is: " + someNum)
    })

    var wins  = 0

    var losses = 0

    currentNumber = 0

    // click on gem
    $("body").on("click", ".purpleGem", function(){
        var randomNum1 = currentNumber + Math.floor(Math.random() + 2) + 1;
        $(".currentNumber").text("Your current number is: " + randomNum1);
    })
    // each gem has a random number when click
    $("body").on("click", ".blueGem", function(){
        var randomNum2 = currentNumber + Math.floor(Math.random() + 4) + 1;
        $(".currentNumber").text("Your current number is: " + randomNum2);
    })

    $("body").on("click", ".orangeGem", function(){
        var randomNum3 = currentNumber + Math.floor(Math.random() + 6) + 1;
        $(".currentNumber").text("Your current number is: " + randomNum3);
    })

    $("body").on("click", ".darkblueGem", function(){
        var randomNum4 = currentNumber + Math.floor(Math.random() + 10) + 1;
        $(".currentNumber").text("Your current number is: " + randomNum4);
    })
    // if current is equal to random number increment wins, alert you won, reset game

    if (currentNumber == someNum) {
        wins++
        $(".wins").text("Wins: " + wins);
        alert("You WON!")
        someNum = 0
    }
    
    if (currentNumber > someNum) {
        losses++
        $("losses").text("Losses: " + losses);
        alert("You lost!")
        someNum = 0
    }
    //if current number is not equal to random number increment losses, alert you lost, reset game

    //
});
