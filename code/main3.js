/*

var hallo = 'foo';

function sayHello() {
	console.log('Hallo World');
}

function countThe7( array ) {
	var numSevens = 0;
	for(var i=0; i<array.length; i++) {
		if( array[i] === 7 ) {
			numSevens++;
		}
	}

	return numSevens;
}

sayHello();
console.log( countThe7([1,4,7,3,7,1,7,0,-1,7]) );

//
//
//

var fruits = ['Apple', 'Banana', 'Mango', 'Grapefruit'];

fruits[0] = 'Lemon';
fruits[1] = 'Melon';

for(var i=0; i<10; i++) {
	fruits[i] = 'Pickle';
}

var fullrandom = {
	123: 456,
	hallo: 'world',
	cars: ['bmw', 'porsche', 'tesla', 'peugeot']
}

fullrandom['123'] = 789;
var key = 'halloooooo';
fullrandom[key] = ('wooooorld');;
*/
//////////////
//////////////
//////////////
/*
var yearsBorn = [1999, 1985, 2008, 2001];
var emptyArray = [];

for(var i=0; i<yearsBorn.length; i++) {
	var age = 2017 - yearsBorn[i];
	emptyArray.push(age);
}

console.log(emptyArray);
for(var i=0;i<emptyArray.length;i++) {
	if(emptyArray[i] < 18) {
		console.log('Age is ' 
			+ emptyArray[i] + '.'
			+ ' The person is minor.');
	}
	else {
		console.log('Age is ' 
			+ emptyArray[i] + '.'
			+ ' The person is adult.');		
	}
}

function printFullAge(arrayYears) {
	var returnArray = [];

	for(var i=0;i < arrayYears.length; i++) {
		returnArray.push(2017 - arrayYears[i]);
	}

	for(var i=0;i<returnArray.length;i++) {
		if(returnArray[i] < 18) {
			returnArray[i] = false;
		}
		else {
			returnArray[i] = true;
		}
	}	

	return returnArray;
}

var full_1 = printFullAge([1965, 2008, 1992]);
console.log(full_1);

var full_2 = printFullAge([1985, 1986, 1987]);

*/
//
//
/*

function numberTable(rows, columns) {
	var returnArray = [];
	var k = 1;

	for(var i=0; i<rows; i++) {
		var subArray = [];
		for(var j=0; j<columns; j++) {
			subArray.push(k);
			k++;
		}
		returnArray.push( subArray );
	}

	return returnArray;
}

console.log( numberTable(3, 4) );
*/

// indexOf: first index
// lastIndexOf: last index
/*
function q(p) { 
	console.log(p); 
}

var txt1 = "Apple, Banana, Kiwi";
var result1 = txt1.slice(15, 19);

//q(result1);
var result2 = txt1.slice(-4);
q(result2);

var result3 = txt1.substr(7, 6);
q(result3);

var result4 = txt1.replace('Kiwi', 'Orange');
q(result4);

var result5 = txt1.toUpperCase();
q(result5);

var result6 = txt1.toLowerCase();
q(result6);

var firstName = "Aemal";
var lastName = "Sayer";

var result7 = "Hello ".concat(" ", "World");
q(result7);

var result8 = firstName + " " + lastName;
q(result8);

var result9 = "Hallo".concat(":", "bla", "foo");
q(result9);

var str1 = "Hallo world";
var result10 = str1.charAt(0);

console.log(result10);

var str2 = "a,b,c,d,e";

var strArray = str2.split(",");
q(strArray);

var str3 = "s, d, g, j, a, d, e, c";

var strArray2 = str3.split(",").sort();
//strArray2.sort();

q(strArray2);
*/
// Create a function named countWords which takes
// two parameters; string, searchTerm and returns 
// the total occurencies of the given searchTerm

var str4 = "Devugees is a good learning institute" 
+"where we lwarn good stuff,"
+"such as HTML, CSS and Javascript.";
/*
function countWords(s, searchTerm) {
	var count = 0;
	var arrayS = s.split(" ");
	for(var i=0; i<arrayS.length; i++) {
		if(arrayS[i] === searchTerm)
			count++;
	}

	return count;
}

//var x = countWords(str4, "good");

var e = "12%3@devugees.org";
function validateEmailAddress_(email) {
	var emailParts = email.split('@');

	if(emailParts.length !== 2) {
		console.log('There is no @');
		return false;
	}

	if(emailParts[0].length > 32 || emailParts[0].length < 8) {
		console.log('first part is invalid');
		return false;
	}

	var firstPart = emailParts[0];
	var lastPart = emailParts[1];

	var numNumbers = 0;
	for(var i=0; i < firstPart.length; i++) {
		var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];		
		var numberFound = false;

		for(var j=0; j<numbers.length; j++) {
			if(firstPart.charAt(i) == numbers[j]) {
				numNumbers++;
				numberFound = true;
				break;
			}
		}	
	}

	console.log('numbers found: ' + numNumbers);
	if(firstPart.length === numNumbers) {
		console.log('The first part is a number.');
		return false;
	}

	if(firstPart.indexOf('%') > 0 || firstPart.indexOf('$') > 0) {
		console.log('% and $ are not allowed in the first part');
		return false;
	}

	var domainParts = lastPart.split('.');
	if(domainParts.length !== 2) {
		console.log('Domain name is invalid.');
		return false;
	}

	if(		domainParts[1] !== 'com' 
		 && domainParts[1] !== 'org'
		 && domainParts[1] !== 'de'
		 ) {
		console.log('Domain ending invalid.')
		return false;
	}

	if( domainParts[0].length > 16 || domainParts[0].length < 5) {
		console.log('Domain name is invalid.');
		return false;
	}

	return true;
}
console.log(validateEmailAddress(e)_);

function cWords(st, word) {
	var x = 0;
	var counter = 0;

	for(var i=0; i <= st.length - word.length; i++) {
		x = st.slice(i, i+word.length);
		console.log('x='+x);
		if(x == word) {
			counter++;
		}
	}

	return counter;
}

console.log( cWords('hallo wie gehts hallo hallo', 'hallo'));
*/
//    1.
//    Create an array of 3 user objects.
//    Each user has an username, an email, an account_balance and
//    an activation code.
//
//    users:
//	  John, john@gmail.com,   0, 2w3e4r5t
//	  Mary, mary@hotmail.com, 0, 90ungnvx
//    Bob, bob@gmail.com, 	  0, 7fnkd9xj

// 	  2.
//    Create a function attachMailTexts() that accepts one
//	  parameter users which looks like 1.
//    attachMailTexts() returns an array of user objects
//    with a new key mailText whose value is based on the 
//    following template string:
//    https://codeshare.io/5w4Brx

var mailTemplate = 
	  "Hallo $USERNAME, \n"
    + "Thank you for your registration at MyService.com! \n"
    + "Your Account Balance is $ACCOUNT_BALANCE. \n"
    + "Please hit the activation link in order to \n"
    + "complete your registration: \n"
    + "https://myservice.com/activation/$ACTIVATIONCODE \n"
    + "\n"
    + "MyService.com - Team";
//   Construct a mailtext 

var firstReplacement = mailTemplate.replace( '$USERNAME', 'John' );
var secondReplacement = firstReplacement.replace('$ACCOUNT_BALANCE', '0');
var thirdReplacement = secondReplacement.replace('$ACTIVATIONCODE', '7fnkd9xj');

console.log(thirdReplacement);

// is the same as ...
// function chaining
console.log(  mailTemplate.replace('$USERNAME', 'John')
			 			  .replace('$ACCOUNT_BALANCE', '0')
			 			  .replace('$ACTIVATIONCODE', '7fnkd9xj')
		    );



/*
var bob = {
	username: 'Bob',
	email: 'bob@gmail.com',
	account_balance: 0,
	activation_code: '7fnkd9xj'
};

console.log(bob);
bob.mailText = 'blabla';
console.log(bob);
*/