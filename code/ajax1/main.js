
var userlinkObj = document.getElementById('userlink');
var commentslinkObj = document.getElementById('commentslink');
var mainObj = document.getElementById('main');

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

userlinkObj.onclick = function() {
	mainObj.innerHTML = 'users';

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
	
	
}

commentslinkObj.onclick = function() {
	mainObj.innerHTML = 'comments';
}


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