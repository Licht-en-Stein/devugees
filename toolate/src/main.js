//import 'webpack-hot-middleware/client';
//import './index.html';
import sum from './sum';
import $ from 'jquery';
import 'bootstrap';
import './main.scss';
import pic from './images/beach.jpg';
import tpl from './template.html';
import index from './index.html';
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
	$('body').append(index);
}

function buildLogin() {
	$('body').empty();
	$('body').append(login);
}