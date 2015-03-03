//Implement the red light using jQuery. Don't forget to add the script tags.

$('#stopButton').click(turnRed);

function turnRed() {
	$('#stopLight').css('backgroundColor', 'red');
}

function clearLights() 