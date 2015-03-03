
$(".intro1").click(toggleCont1);
$(".intro2").click(toggleMore1);
$(".intro3").click(toggleCont2);


$(".cont1").hide();
$(".cont2").hide();
$(".more1").hide();

function toggleCont1() {
	$(".cont1").slideToggle('fast');
}

function toggleMore1() {
	$(".more1").slideToggle('fast');
}	

function toggleCont2() {
	$(".cont2").slideToggle('fast');
}	

