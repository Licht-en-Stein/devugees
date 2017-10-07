// please clone
// https://github.com/foobaroo/devugees
// and take a look at ./advancedjs

/*
var john = {
	name: 'john',
	yearOfBirth: 1990,
	job: 'teacher'
};
*/
/*
// function constructor defines the class
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function() {
	console.log( 2017 - this.yearOfBirth );
}

var john = new Person('john', 1990, 'teacher');

// little task,
// create 2 other objects: jane (born 1991 and designer) 
//						   and mark (born 1948 and retired)
// use the function constructor

var jane = new Person( 'Jane', 1991, 'designer' );
var mark = new Person( 'Mark', 1948, 'retired' );

jane.calculateAge();
mark.calculateAge();

Person.prototype.lastName = 'Smith';

// 2nd way
// first create prototype and then instance via Object.create();

var personProto = {
	calculateAge: function() {
		console.log( 2017 - this.yearOfBirth );
	}
}

var sandra = Object.create( personProto );
*/
// primitives VS objects
/*
var a = 23;
var b = a;

b = 46;
console.log('a is ' + a);
console.log('b is ' + b);
*/
// Task:
// 
// Create an object obj1 (without function constructor).
// set the attributes name is "john" and age is 26
// 
// Create another object obj2 and set it to obj1.
// Analyze obj2 in the console.
//
// Now, change the age of obj1 to 30.
// Analyze obj2 again in the console.
//
// What do you see?
/*
var obj1 = {
	name: 'john',
	age: 26
}

var obj2 = obj1;
obj1.age = 30;
*/

/*
	When assigning a primitive A to another primitive B
		(primitive is: string, number, boolean, null, undefined)
	then a clone of B will be made.

	When assigning an object A to an another object B
		(object: everything except a primitive)
	then a reference to B will be made
*/

/*
var age = 32;
var obj = {
	name: 'Jan',
	city: 'Berlin'
}

function change(a, b) {
	a = 30;
	b.city = 'New York';
}

change( age, obj );
console.log( 'age is ' + age );
console.log( 'city is ' + obj.city );
*/

// 
// Functions as arguments/parameters
// 

/*
function sayWhat( fn ) {
	console.log( fn() );
}

function sayHelloWorld() {
	return 'Hallo World';
}

function sayHalloPlanet() {
	return 'Hallo Planet';
}

function sayWhatAgain( times, fn ) {
	for(var i=0; i<times; i++) {
		console.log( fn() + ', i = ' + i);
	}
}

// sayWhatAgain( 10, sayHalloPlanet );

var years = [ 1998, 1965, 1937, 2005, 1998, 1985, 1991 ];
function arrayCalc( arr, fn ) {
	var arrRes = [];

	for(var i=0; i<arr.length; i++) {
		arrRes.push( fn(arr[i]) );
	}

	return arrRes;
}

function calculateAge( yearOfBirth ) {
	return 2017 - yearOfBirth;
}
var ages = arrayCalc( years, calculateAge );

// Task:
//		  Create a function isFullAge that you use
//        in arrayCalc in order to 
// 		  create an array fullAges which consists of
//		  booleans based on the array ages. 
//		  The respective item is true, if the age is 
//        greater or equal to 18 and false otherwise.

function isFullAge( year ) {
	//return year >= 18;

	if( year >= 18 )
		return true;
	else
		return false;
}

var fullAges = arrayCalc( ages, isFullAge );

// task:
// 		  Create a function maxHeartRate() with one parameter
// 		  age. 
// 
// 		  It returns Math.round( 206.9 - (0.67 * age) )
//        if the person's age is between 18 and 81
//        Otherwise, the function returns -1
//
//		  Again, apply this method with arrayCalc(). 
//        Store the resulting array as "rates"

function maxHeartRate(age) {
	if(age > 18 && age < 81)
		return Math.round( 206.9 - (0.67 * age) )
	else 
		return -1
}

var mhr = arrayCalc(ages , maxHeartRate);
*/

/*
var Person = function(name, lastName, job) {
	this.name = name;
	this.lastName = lastName;
	this.job = job;
}

var person = {
	name: null,
	lastName: null,
	job: null
};
*/

/*
function sayWhat( fn ) {
	console.log( fn() );
}

function sayHelloWorld() {
	return 'Hallo World';
}

function sayHalloPlanet() {
	return 'Hallo Planet';
}

function sayWhatAgain( times, fn ) {
	for(var i=0; i<times; i++) {
		console.log( fn() + ', i = ' + i);
	}
}
*/

/* functions as return statements 
function getSayWhat() {
	return function() {
		console.log( 'Hallo World' );
	}
}	
*/
/*
function getSayWhatWhat() {
	return function() {
		return function() {
			console.log( 'Hallo World' );
		}
	}
}	
*/

// var x = getSayWhat();

// Task:
// 			Create a function interviewQuestion with one 
// 		    parameter job.
// 
//			interviewQuestion can return 3 functions.			
//
//          If job is 'designer', then interviewQuestion
//			returns a function that console.logs out 
//          "Can you please explain, what UX-Design is?"
//
//			If job is 'teacher', interviewQuestion returns
//			a function that console.logs out
//			"What subject do you teach?"
//          
//			Otherwise, interviewQuestion returns a function
//			that console.logs out "What do you do?"

/*
function interviewQuestion( job ) {
	// Closure makes it possible, to access ty after interviewQuestion has returned
	var ty = ' Thank You.';
	if( job === 'designer' ) {
		return function( name ) {
			console.log(name + ', can you please explain, what UX-Design is?' + ty);
		}
	}
	else if( job === 'teacher' ) {
		return function( name ) {
			console.log(name + ', what subject do you teach?' + ty);
		}
	}
	else {
		return function( name ) {
			console.log(name + ', what do you do?' + ty);
		}
	}
}
var interviewDesigner = interviewQuestion('designer');
var interviewTeacher = interviewQuestion('teacher');
var interviewMechanic = interviewQuestion('mechanic');
interviewDesigner('John');
interviewTeacher('Mike');
interviewQuestion('teacher')('Jonathan');


function getSayWhat() {
	var ty = ' Thank You.';
	return function() {		
		ty += '.';
		console.log( 'Hallo World.' + ty );
	}
}

var hw = getSayWhat();

// Task: Create a function score that has a local variable s
// 		 Initially, s is 0.
// 		 score returns an anonymous function that increments s
//       by 1 and returns s.
//
//       Create another function keepScore() that is the resulting
//       function of score
//
//       call keepScore() 5 times and check if s is equal to 5.
//       we repeat this local context each time we call keepScore();

function score() {
	var s = 0;
	return function() {
		s++;
		return s;
	}
}

function keepScore() {
	return score();
}

var ks = keepScore();
*/

// IIFE
// Immediately Invoked Function Expressions
// 

/*
function game() {
	var score = Math.random() * 10;
	if( score >= 5 )
		console.log('You win.')
	else
		console.log('You lose.')
}
*/

/*
(function() {
	var score = Math.random() * 10;
	if( score >= 5 )
		console.log('You win.')
	else
		console.log('You lose.')	
});
*

/*
// Task:
// 
// 		Take a look at the IIFE above. Please add a parameter
// 		goodLuck to it. goodLuck is a number and should increase
//      your chance of winning.
//
//		I.e. if goodLuck is 2, then your score needs to be higher
//			 than 3 in order to win.
//
//           Call the IIFE with goodLuck = 5

(function( goodLuck ) {
	var score = Math.random() * 10;
	if( score >= 5 - goodLuck )
		console.log('You win.')
	else
		console.log('You lose.')	
})( 5 );


(function () {
	console.log(' hallo world ');
})();
*/


/*
(function() {

	var Question = function( question, answers, correctAnswer ) {
		this.question = question;
		this.answers = answers; 
		this.correctAnswer = correctAnswer;

		this.showPossibleAnswers = function() {
			console.log( this.question + '\n');
			for(var i=0; i<this.answers.length; i++) {
				console.log(i + ' : ' + this.answers[i]);
			}
		}

		this.checkAnswer = function( answer ) {
			// "2" == 2 => true
			// "2" === 2 => false
			if(answer == this.answers[correctAnswer])
				return true;

			return false;
		}
	}


	var q1 = new Question( 'Is the beamer from Epson?', ['Yes', 'No'], 0 );
	var q2 = new Question( 'Is it hot in Germany right now?', ['Yes', 'No'], 1 );
	var q3 = new Question( 'What is the distance between the earth and the moon', 
							['384.000 km', '149.000.000 km', '2.000.000.000 km'], 0 );

	var questions = [ q1, q2, q3 ];
	var randomNumber = Math.floor(Math.random() * questions.length);

	questions[randomNumber].showPossibleAnswers();

	var answer = prompt( questions[randomNumber].question );

	if (questions[randomNumber].checkAnswer(answer)) {
		console.log('yes you are right')
	}
	else 
		console.log('Nope try again ')
})();
*/

var objHallo = {
	hallo: '',
	sayHallo: function(p) {
		this.hallo = p
	}
};

var objPlanet = {
	hallo: ''
}

var objSun = {};

objHallo.sayHallo( 'world' );
// method borrowing
objHallo.sayHallo.call( objPlanet, 'planet' );
objHallo.sayHallo.call( objSun, 'sun' );
objHallo.sayHallo.call( this, 'globe' );


var john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function( style, timeOfDay ) {
		if(style === 'formal') {
			console.log(  'Good ' + timeOfDay + ', Ladies and Gentlemen.'
						+ 'My name is ' + this.name + '. I am ' + this.age + ' years old.'
						+ 'I work as a ' + this.job);
		}
		else if (style === 'friendly') {
			console.log(  'Hey whats up. I am ' + this.name + '. I am ' + this.age + ' years old.' 
						+ 'I work as a '+ this.job + ' . Have a great ' + timeOfDay);
		}
	}
}

john.presentation('formal', 'morning');

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
};

john.presentation.call( emily, 'formal', 'afternoon' );


