$(document).ready(function(){
  
  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  function generateRandomTargetNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  /* Return user guess number */
  function getGuess() {
    ( "#guessButton" ).click(function() {
      return ("#userGuess").val();
    });
  }

  /* Return difference between secret number and guess */
  function getDifference(target, guess) {
    return(abs(target - guess));
  }


  /* Return hint */
  function getRange(difference) {
    if (difference > 50) {
      return "Really Cold";
    }
    else if (difference > 30 & difference < 49) {
      return "Cold";
    }
    else if (difference > 10 & difference < 29) {
      return "Warm";
    }
    else if (difference > 0 & difference < 9 {
      return "Really Warm";
    }
    else {
      return "You Win!";
    }
  })


  rangeHint = getRange();
  target = generateRandomTargetNumber();    
  guess = getGuess();
  difference = getDifference();
  /* print hint to feedback div */

  document.getElementById("feedback").innerHTML = produceMessage() {
    return rangeHint;
  }
});

