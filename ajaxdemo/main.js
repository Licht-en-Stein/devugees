
var userlinkObj = document.getElementById('userlink');
var commentslinkObj = document.getElementById('commentslink');
var mainObj = document.getElementById('main');
var adduserlinkObj = document.getElementById('adduserlink');
var addcommentlinkObj = document.getElementById('addcommentlink');
var adduserObj = document.getElementById('adduser');
var addcommentObj = document.getElementById('addcomment');

// Homework: 
// 			 When clicking on the "Users"-link a table
//           needs to be created with the data of the
//			 https://jsonplaceholder.typicode.com/users
//           Only use the first 4 attributes. The columns
//			 stand for the keys and rows for the values.
//
// 			 Respectively, do the same for the "Comments"-Link
//           and the data of 
//			 https://jsonplaceholder.typicode.com/comments
//			 

function createUserTable( userArray ) {
	var tableObj = document.createElement('table');

	for(var i=0; i<userArray.length;i++) {
		var tableRowObj = document.createElement('tr');

		var j=1;
		for(key in userArray[i]) {
			var tableCellObj = document.createElement('td');
			tableCellObj.textContent = userArray[i][key];
			tableRowObj.appendChild( tableCellObj );

			if(j === 4)
				break;

			j++;
		}
		tableObj.appendChild( tableRowObj );
	}
	return tableObj;
}

function createCommentTable( commentArray ) {
	var tableObj = document.createElement('table');

	for(var i=0; i<commentArray.length;i++) {
		var tableRowObj = document.createElement('tr');

		for(key in commentArray[i]) {
			var tableCellObj = document.createElement('td');
			tableCellObj.textContent = commentArray[i][key];
			tableRowObj.appendChild( tableCellObj );
		}
		tableObj.appendChild( tableRowObj );
	}
	return tableObj;
}

userlinkObj.onclick = function() {
	mainObj.innerHTML = '';

	var xhr = new XMLHttpRequest();
	// define the destination and the HTTP method
	xhr.open('GET', 'http://172.16.50.184:3050/users');	
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log('success, status code is: ' + xhr.status);
			var response = xhr.responseText;			
			// console.log(response);

			// task: print out the first 4 key/value pairs
			//       of the received ajax JSON string of each
			//       user object. print it out in the console.		

			var userObj = JSON.parse( response );
			var userTable = createUserTable( userObj );
			console.log(userTable);
			mainObj.appendChild( userTable );			

			adduserObj.style.display = 'none';
			addcommentObj.style.display = 'none';
		}
		else {
			console.log('error, status code is: ' + xhr.status);
		}
	}

	xhr.send();

}

commentslinkObj.onclick = function() {
	mainObj.innerHTML = '';

	var xhr = new XMLHttpRequest();
	// define the destination and the HTTP method
	xhr.open('GET', 'http://172.16.50.184:3050/comments');	
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log('success, status code is: ' + xhr.status);
			var response = xhr.responseText;			
			// console.log(response);

			var commentObj = JSON.parse( response );
			var commentTable = createCommentTable( commentObj );
			mainObj.appendChild( commentTable );

			adduserObj.style.display = 'none';
			addcommentObj.style.display = 'none';
		}
		else {
			console.log('error, status code is: ' + xhr.status);
		}
	}

	xhr.send();
}

adduserlinkObj.onclick = function() {

	mainObj.innerHTML = '';
	adduserObj.style.display = 'block';
	addcommentObj.style.display = 'none';

	/*
	var xhr = new XMLHttpRequest();
	xhr.open( 'POST', 'http://172.16.50.184:3050/users' );
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		if( xhr.status === 200 ) {
			console.log( 'response successfull: ' + xhr.reponseText );
			var responseObj = JSON.parse(xhr.responseText);
			console.log(responseObj);

		}
		else {
			console.log( 'error: ' + xhr.status );
		}
	}
	
	var params = {
		name: 'King Kong',
		username: 'kingkong2017',
		email: 'kingkong2@gmail.com'
	};

	xhr.send( JSON.stringify(params) );
	*/
}

addcommentlinkObj.onclick = function() {
	mainObj.innerHTML = '';
	adduserObj.style.display = 'none';
	addcommentObj.style.display = 'block';
}

// task:
//  		when clicking on the adduserlink anchor, only show adduser div
//			when clicking on the addcommentlink anchor, only show addcomment div
//			respectively.
//
//			in both cases, clear the main div
//

/*
	var xhr = new XMLHttpRequest();
	// define the destination and the HTTP method
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log('success, status code is: ' + xhr.status);
			var response = xhr.responseText;			
			// console.log(response);

			// task: print out the first 4 key/value pairs
			//       of the received ajax JSON string of each
			//       user object. print it out in the console.

			var userObj = JSON.parse( response );
			for(var i=0; i<userObj.length; i++) {

				var j=1;
				for(var key in userObj[i]) {
					console.log('key = ' + key + ', value = ' + userObj[i][key]);

					if(j === 4) {
						break;
					}

					j++;
				}
			}
		}
		else {
			console.log('error, status code is: ' + xhr.status);
		}
	}

	xhr.send();
*/