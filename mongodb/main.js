var mongoose = require('mongoose');
var Student = require('./studentmodel');

mongoose.connect('mongodb://localhost/test');

// task:
// Create a CRUD api for creating, updating, deleting and reading student info.
// POST - create
// PUT - update
// DELETE - delete
// GET - read
//
// PUT, DELETE and GET expect a student ID

// create statement
var chris = new Student({
	name: 'chris',
	age: 30,
	subjects: ['math', 'sport', 'history'],
	gender: 'male',
});

chris.save(function(err) {
	if(err) throw err;

	console.log('user chris has been saved successfully');
});


// read statement
Student.findById('5a673e4f5c373a19d4f19ed0', function(err, student) {
	console.log(student);
});


// update statement
Student.findById('5a673e4f5c373a19d4f19ed0', function(err, student) {
	student.address = {street: 'Bahnhofstr. 1', postal: '12345', city: 'Berlin'};

	student.save(function(err) {
		if(err) throw err;

		console.log('student updated');
	});
});

// delete statement
Student.findById('5a673e4f5c373a19d4f19ed0', function(err, student) {
	student.remove(function(err) {
		if(err) throw err;

		console.log('student deleted');
	});
});


