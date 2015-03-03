// console.log('Hellow World');

var count= 0;

// Attach function to form submit event
$("#toDoInput").submit(addListItem); //give the function the name addListItem

//declare function to deal with the submit

function addListItem (event) {
event.preventDefault()

	var newListItemEntry = $("#listInput").val();

 	// console.log(newListItemEntry);

	$("#toDoListEntry").append("<li>" + newListItemEntry + "</li>");



	// return false - used to stop 
}

//create a function which updates the total when new item submited:

var updateCounter 

$("")



function updateCounter (event) {
	event.preventDefault()







	// When an item gets clicked, mark as complete or incomplete
	// $('#todoList').on('click', 'li', function(){
	// toggleTaskAsDone();
	// });
