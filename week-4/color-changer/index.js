document.getElementById('grayButton').onclick = switchGrey;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('greyButton').onclick = transitionGrey;


function switchGrey() {

	document.body.style.backgroundColor = 'grey';
	document.body.style.color = 'white';

}

function switchWhite() {

document.body.style.backgroundColor = 'white';
document.body.style.color = 'gray';

}

function transitionGrey() {}

/* example of how this would be written with jQuery

$(#grayButton)click(swichGrey)
$(#whiteButton)click(swichWhite)

function switchGrey() {
	$('body').css('backgroundColor', 'gray');
	$('body').css('color', 'white');
}
