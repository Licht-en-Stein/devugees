const fs = require('fs');
const mysql = require('mysql');
const randomstring = require('randomstring');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'foobar',
    database: 'ioops'
});

getDB('hallo')
.then(function(name) { return folderExists(name) })
.then(function(name) { return createFile(name) });

function getDB(name) {
    return new Promise(function(resolve, reject) {
        con.query('select * from users where username = ?', [name], 
        function(err, rows) {
            if(err) {
                throw err;
                reject();
            }
        
            if(rows.length > 0) {
                console.log(name + ' exists');
            }

            resolve(name);
        });
    });
}

function folderExists(name) {
    return new Promise(function(resolve, reject) {    
        fs.exists(__dirname + '/' + name, function(exists) {
            var folderExists = false;
            if(exists) {
                console.log('the folder exists');
                resolve();
            }
            else {
                console.log('folder does not exist');
                fs.mkdir(__dirname + '/' + name, function(err) {
                    if(err) {
                        throw err;
                        reject();
                    }

                    resolve(name);
                })
            }        
        });
    });
}

function createFile(name) {
    return new Promise(function(resolve, reject) {    
        const s = randomstring.generate(20);
        fs.writeFile(__dirname + '/' + name + '/' + name + '.json', s, function(err) {
            if(err) {
                throw err;
                reject();
            }

            con.query('update users set folderexists = 1 where username = ?', [name],
            function(err, rows) {
                if(err) {
                    throw err;
                    reject();
                }

                resolve();
            });
        });
    });
}