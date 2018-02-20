//import 'webpack-hot-middleware/client';
//import './index.html';
import $ from 'jquery';
import 'bootstrap';
import './main.scss';
import pic from './images/beach.jpg';
import tpl from './template.html';
import app from './app.html';
import login from './login.html';

$(() => {
	console.log('jquery is ready');

	let loggedIn = localStorage.getItem('loggedIn');
	if(loggedIn == 1) {
		buildApp();
	}
	else {
		buildLogin();
	}
});

function buildApp() {
	$('body').empty();
	$('body').append(app);

	$('#link-logout').on('click', (e) => {
		localStorage.setItem('loggedIn', 0);
		buildLogin();
	});
}

function buildLogin() {
	$('body').empty();
	$('body').append(login);

	$('#form-login').submit((e) => {
		e.preventDefault();

		localStorage.setItem('loggedIn', 1);
		buildApp();
	});
}