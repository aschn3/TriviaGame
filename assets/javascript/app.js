


var answers = [ 'Florida','UCLA', 'Mike Krzyzewski', 'Carmelo Anthony'],   //correct answers
	 data = $('input'),
	 correctAnswer = 0,
	 inCorrectAnswer = 0,
	 empty = 0,
	 counter = 30;

function startGame(){
	$('.data').css('display', 'none');


	for(var i =0; i < data.length; i++){
		if(data[i].checked){
			
			if(answers.indexOf(data[i].value) !== -1){
				correctAnswer++;
		}
			else{
				inCorrectAnswer++;	
			}
			
			}
			
			}

		
	


	var result = correctAnswer + inCorrectAnswer;

	if(result !== 4){
		empty = 4 - result;

	}

	$('.empty').html("You have " + empty + " that you have not selected!");
	$('.correct').html("You have " + correctAnswer + " correct answers!");
	$('.inCorrect').html("You have " + inCorrectAnswer + " incorrect answers!");
	$('.result p').addClass('stylish');

}


$('.start').on('click', function(){
	$('.start').css('display', 'none');
	$('.data').css('display', 'block');

		
	var startCounter = setInterval(function(){
	counter --;

	if(counter > 9){
		$('.counter').html("You have " + "00:" + counter + " remaining!");
	}

	else if(counter <= 9){
		$('.counter').html("You have " + "00:0" + counter + " remaining!");
	}

	if (counter <= 0){
		clearInterval(startCounter);
		startGame();
	}
}, 1000);	


		$('.done').on('click', function(){
			clearInterval(startCounter);
			startGame();
		});
});




	



//var counter = setInterval(function(){
	//count++;

//if(count <=0){
	//learInterval(counter)
////}

//}, 1000)

