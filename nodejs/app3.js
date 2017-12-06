var fs = require('fs');

var buffer = fs.readFileSync('./halloworld.txt', 'utf8');
console.log( buffer );
var str1 = 'Hallo World to a new file\n';
fs.writeFileSync('newfile.txt', str1);
var str2 = 'This overwrites newfile.txt\n 123';
fs.writeFileSync('newfile.txt', str2);
var str3 = 'This will be appended to the file.\n';
fs.appendFileSync('newfile.txt', str3);

try {
	var objFromFile = JSON.parse(fs.readFileSync('./object2.json', 'utf8'));
	console.log( objFromFile.name );
} catch(e) {
	console.log('Something went wrong: ' + e);
}

var objFromFile2 = require('./object.json');

console.log('using require: ' + objFromFile2.name);