var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser());

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'online_shop'
});

app.get('/', function(req, res) {
	res.json( {"shop-backend":"1.0"} );
});

app.get('/products', function(req, res) {
	con.query('select * from products', function(err, rows) {
		if(err)
			throw res.json( err );

		console.log( rows );
		res.json( rows );
	});
});

app.get('/categories', function(req, res) {
	con.query('select * from product_categories', function(err, rows) {
		if(err)
			throw res.json( err );

		console.log( rows );
		res.json( rows );
	});
});

app.get('/customers', function(req, res) {
	con.query('select * from customers', function(err, rows) {
		if(err)
			throw res.json( err );

		console.log( rows );
		res.json( rows );
	});
});

app.put('/rename', function(req, res) {
	console.log('received a put on /rename ...');
	res.json({'hallo':'world'});
});


app.listen(port);