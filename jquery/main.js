$(document).ready( function() {	
	console.log('Document is loaded.');
				
	$('h3').addClass('red-color');

	// task:
	//
	// elements with the id firstpara blue
	// and
	// elements with the class para-class green

	$('#firstpara').addClass('blue-color');
	// also works: $(firstpara).addClass('blue-color');
	$('.para-class').addClass('green-color');

	// tasks:
	// 	
	// 1. make all list items with the name "theking" red	

	// also works: $('[name=theking]').addClass('red-color');
	$('li[name=theking]').addClass('red-color');
	// 2. make all list items of class company and of class ceo underline
	$('.company,.ceo').addClass('underline');
	// 3. give all li items that are direct children of the element with id
	//    "companies" a border
	$('#companies > *').addClass('border');
	// 4. highlight all list items of class "company", if they have an index 
	//    greater than 0
	$('li.company:gt(0)').addClass('highlight');
	// 5. make all list items which are children of uls of class flagship 
	//    blue
	$('ul.flagship').addClass('blue-color');
	

	// https://github.com/foobaroo/devugees/tree/master/course
	// download jsadvanced_2.pdf
	
	// Tasks:
	// (1) Make all rows with an even index aliceblue
	// (2) Make the rest yellow
	// (3) Make the TDs inside the TRs with an even index aliceblue
	// (4) Make the TDs inside the TRs with an odd index yellow
	// (5) Highlight all TDs that contain 'Hagrid' (highlight-2)
	// (6) Highlight all non-humans with index = 1
	// (7) Highlight all non-humans with index > 1
	// (8) Highlight all non-humans with index < 1
	
	
	
	
});

