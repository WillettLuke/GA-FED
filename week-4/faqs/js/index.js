//Implement the red light using jQuery. Don't forget to add the script tags.
//console.log($);

$('#questionOne').click(toggleAnswerOne);
$('#questionTwo').click(toggleAnswerTwo);
$('#questionThree').click(toggleAnswerThree);
$('#closeAll').click(hideAll);
$('#closeAll').click(showAll);

$('#answerOne').hide();
$('#answerTwo').hide();
$('#answerThree').hide();

function toggleAnswerOne() {
	$('#answerOne').slideToggle('slow');
}

function toggleAnswerTwo() {
	$('#answerTwo').slideToggle('slow');
}

function toggleAnswerThree() {
	$('#answerThree').slideToggle('slow');
}

function hideAll() {
	$('p').hide('fast');
}

