$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



  	/* Return random secret number */

  	function getNumber() {
    	return Math.floor(Math.random() * 100) + 1;
	}

	$number = getNumber();



	/* Return user guess number */

	function getGuess() {
		$( "#guessButton" ).click(function() {
			return $("#userGuess").val();
		});
	}

	$guess = getGuess();



	/* Return difference between secret number and guess */

	function getDifference(number, guess) {
		if (guess > number) {
			return guess - number;
		}
		else {
			return number - guess;
		}
	}

	$difference = getDifference();



	/* Return hint */

	function getRange(difference) {
		if (difference > 50) {
			return "Really Cold";
		}
		else if (difference >30 & <49) {
			return "Cold";
		}
		else if (difference >10 & <29) {
			return "Warm";
		}
		else if (difference >0 & <9 {
			return "Really Warm";
		}
		else {
			return "You Win!";
		}
	})

	$rangeHint = getRange();



	/* print hint to feedback div */

	document.getElementById("feedback").innerHTML = produceMessage() {
		return rangeHint;
	}
});

