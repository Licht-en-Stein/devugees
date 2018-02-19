const fs = require('fs');

/*

function createFile(filename) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(__dirname + '/' + filename, 'hallo', function(err) {
            if(err) {
                console.log('err: ' + err);
                reject();
            }

            resolve(); 
        });
    });
} 
  
createFile('test1.txt') 
.then( () => { return createFile('test2.txt')}, () => {console.log('smth went wrong ...')} )  
.then( () => { return createFile('test3.txt')}, () => {console.log('smth went wrong ...')} )  
.then( () => { return createFile('test4.txt')}, () => {console.log('smth went wrong ...')} )  
.then( () => { return createFile('test5.txt')}, () => {console.log('smth went wrong ...')} ); 
 
*/

function createFile(x, filename) {
    console.log('x is:' + x);
    return new Promise(function(resolve, reject) {
        fs.writeFile(__dirname + '/' + filename, 'hallo', function(err) {
            if(err) {
                console.log('err: ' + err);
                reject();
            }

            resolve(x+1); 
        });
    });
}

createFile(0, 'test1.txt')
.then( (x) => { return createFile(x, 'test2.txt')}, () => {console.log('smth went wrong ...')} )
.then( (x) => { return createFile(x, 'test3.txt')}, () => {console.log('smth went wrong ...')} )
.then( (x) => { return createFile(x, 'test4.txt')}, () => {console.log('smth went wrong ...')} )
.then( (x) => { return createFile(x, 'test5.txt')}, () => {console.log('smth went wrong ...')} );