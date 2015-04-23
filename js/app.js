$(document).ready(function(){
  
  var target = generateRandomTargetNumber();
  console.log('target = ', target);

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

  $('#guessButton').click(function(e) {
    e.preventDefault();
    getGuess();
  });

  /* Return user guess number */
  function getGuess() {
      var guess = $("#userGuess").val();
      console.log('guess = ', guess);

      var difference = getDifference(target, guess);
      console.log('difference = ', difference);

      var rangeHint = getRange(difference);
      console.log('rangeHint = ', rangeHint);

      $('#feedback').text(rangeHint);

      $('#guessList').append('<li class="list-item">' + $('#userGuess').val() + '</li>');
  }

  /* Return difference between secret number and guess */
  function getDifference(target, guess) {
    return(Math.abs(target - guess));
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
    else if (difference > 0 & difference < 9) {
      return "Really Warm";
    }
    else {
      return "You Win!";
    }
  }



  // rangeHint = getRange();
  // target = generateRandomTargetNumber();    
  // guess = getGuess();
  // difference = getDifference();
  /* print hint to feedback div */

  // document.getElementById("feedback").innerHTML = produceMessage() {
  //   return rangeHint;
  // }
});

