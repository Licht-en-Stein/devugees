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

var basketvalueObj = document.getElementById('basketvalue');
basketvalueObj.onclick = function() {
		var sum = 0;
		for ( var i=0 ; i<basket.length ; i++) {
			sum += basket[i].price;
		}
 		alert ('The total basket value is ' + sum +' €');
}
