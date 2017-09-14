console.log('hallo world');

var storageMyName = localStorage.getItem('myname');
if(storageMyName !== null) {
	var thedateObj = document.getElementById('thedate');
	thedateObj.innerHTML = 'Hallo ' + storageMyName;
}

var greetingObj = document.getElementById('greeting');
greetingObj.innerHTML = 'Hallo World';

var saymynameObj = document.getElementById('saymyname');

saymynameObj.onclick = function() {
	var mynameObj = document.getElementById('myname');
	var thedateObj = document.getElementById('thedate');
	
	thedateObj.innerHTML =    'Hallo ' + mynameObj.value
							+ '.Today is ' + getDayName()[0] + '.'
							+ 'Only ' + getDayName()[1] + ' days left '
							+ 'until the weekend';

	localStorage.setItem('myname', mynameObj.value);
	
	// Replace the inner html of <p>How are you?</p> with 
	// hallo jan, whereas jan is the value of the textbox
	// first, give <p>How are you?</p> a proper id "thedate"
	//
	// 1. give the p an id "thedate"
	// 2. when clicking the button, 
	//    set the inner html "thedate" to "hallo " + value of the textbox
	// 

	function getDayName() {
		var days = [
			'Monday', 'Tuesday', 'Wednesday', 
			'Thursday', 'Friday', 'Saturday', 'Sunday' 
		];

		var date = new Date();
		var day = date.getDay();
		return [ days[day - 1], 5 - day];
	}	



	// 3 .use getDayName() to extend your hello text like this
	//   hallo jan, today is Tuesday, only 3 days until the weekend
}

/*
	Task:

	Add a functionality: When the user presses on the button
						 with id "addgift", a new li-item is
						 added to the ul-list with id "shoppinglist".
						 The item has the value of the textbox
						 with id "gift"

*/

function randomNumber( max ) {
	return Math.round( Math.random() * max, 0);
}

var basket = [];
var addgiftObj = document.getElementById('addgift');
addgiftObj.onclick = function() {
	var giftObj = document.getElementById('gift');
	
	if(giftObj.value.length === 0) {
		alert('No empty items allowed');		
		return false;
	}

	var shoppinglistObj = document.getElementById('shoppinglist');
	var newgiftObj = document.createElement('li');
	newgiftObj.innerHTML = giftObj.value;

	shoppinglistObj.appendChild( newgiftObj );

	var o = { 
			  name: giftObj.value, 
		      price: randomNumber(100) 
		    };
	basket.push(o);			 
    giftObj.value = '';
}

/*
	Task:
			Respectively, consider
				- removing the last item 
				- removing the first item 
				- removing a specific item 

			and modify the basket array!
*/

var showbasketObj = document.getElementById('showbasket');
showbasketObj.onclick = function() {
	var itemsObj = document.querySelectorAll('ul#shoppinglist li');
	if(itemsObj.length === 0) {
			alert('No items in the basket.');
			return;
	}

	var arrayItems = [];
	for(var i = 0; i < itemsObj.length; i++){
		arrayItems.push(itemsObj[i].textContent);
	}

	alert(arrayItems.join(', '));
}

// task: When the user clicks on the button "removelast"
//		 the last item of the shoppinglist will be removed.
//       If the shoppinglist is empty, nothing happens and no
//       error.

var removelastObj = document.getElementById('removelast');
removelastObj.onclick = function() {
	var itemsObj = document.querySelectorAll('ul#shoppinglist li');
	
	if (itemsObj.length === 0)
		return;

	itemsObj[ itemsObj.length - 1 ].remove();
	basket.pop();
}

var removefirstObj = document.getElementById('removefirst');
removefirstObj.onclick = function() {
	var itemsObj = document.querySelectorAll('ul#shoppinglist li');
	
	if (itemsObj.length === 0)
		return;

	itemsObj[0].remove();
	basket.shift();
}

// Task: When the user clicks on the button "removeitem",
//		 the li-item with the innerHTML of the value of gift
//		 will be removed out of the shoppinglist
//
//		 If the item cannot be found, the user will be alerted
//       with "Item " + innerHTML of item + " was not found"
//       "Apple was not found"
//       If the textbox gift is empty, an error will occcur.
//       After the item has been removed, the textbox will 
//       be emptied.

var removeitemObj = document.getElementById('removeitem');
removeitemObj.onclick = function() {
	var giftObj = document.getElementById('gift');
	var gift = giftObj.value;

	var itemsObj = document.querySelectorAll('ul#shoppinglist li');
	for(var i=0; i<itemsObj.length; i++) {
		if( gift === itemsObj[i].innerHTML ) {
			itemsObj[i].remove();
			basket.splice(i, 1);
			break;
		}
	}
	if(i === itemsObj.length)
		alert('No item ' + gift + ' found');
}

// 
// Task
//       create an event for the button basketvalue
//       that alerts the total basket value to the
//		 user.
//	     Apple, 20
//       Banana, 40
//       => 60
//
// 		 "The total basket value is 60 €"
/*

*/

var basketvalueObj = document.getElementById('basketvalue');
basketvalueObj.onclick = function() {
		var sum = 0;
		for ( var i=0 ; i<basket.length ; i++) {
			sum += basket[i].price;
		}
 alert ('The total basket value is ' + sum +' €');
}





/*
function generateZeroTable( rows, columns ) {
	var tableObj = document.createElement('table');

	for(var i=0; i<rows; i++) {
		var rowObj = document.createElement('tr');

		for(var j=0; j<columns; j++) {
			var tdObj = document.createElement('td');
			tdObj.innerHTML = "0";
			rowObj.appendChild( tdObj );			
		}

		tableObj.appendChild( rowObj );
	}

	return tableObj;
}

var bodyObj = document.getElementsByTagName('body')[0];
bodyObj.appendChild( generateZeroTable(3, 4) );

statistic = [
	['2016-01-01', '2016-01-02', '2016-01-03', '2016-01-04', '2016-01-05', '2016-01-06', '2016-01-07', '2016-01-08', '2016-01-09'],
	[ 1304, 1604, 1483, 1903, 1712, 2034, 1515, 1812, 1020 ]
];

function generateDataTable( array ) {
	var tableObj = document.createElement('table');

	if(array[0].length !== array[1].length)
		return tableObj;

	for(var i=0; i<array.length; i++) {
		var rowObj = document.createElement('tr');

		for(var j=0; j<array[0].length; j++) {
			var tdObj = document.createElement('td');
			tdObj.innerHTML = array[i][j];
			rowObj.appendChild( tdObj );			
		}

		tableObj.appendChild( rowObj );
	}

	return tableObj;
}

bodyObj.appendChild( generateDataTable(statistic) );
*/

// https://jsonplaceholder.typicode.com/users
// http://jsonviewer.stack.hu/