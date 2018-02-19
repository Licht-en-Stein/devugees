const fs = require('fs');
const mysql = require('mysql');
const randomstring = require('randomstring');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'foobar',
    database: 'ioops'
});

con.query('select * from users where username = ?', ['tom'], 
function(err, rows) {
    if(err)
        throw err;

    if(rows.length > 0) {
        console.log('tom exists');
    }

    fs.exists(__dirname + '/tom', function(exists) {
        var folderExists = false;
        if(exists) {
            console.log('the folder exists');
            createFile();
        }
        else {
            console.log('folder does not exist');
            fs.mkdir(__dirname + '/tom', function(err) {
                if(err) {
                    throw err;
                }

                createFile();
            })
        }        
    });
})

function createFile() {
    const s = randomstring.generate(20);
    fs.writeFile(__dirname + '/tom/tom.json', s, function(err) {
        if(err) throw err;

        con.query('update users set folderexists = 1 where username = ?', ['tom'],
        function(err, rows) {
            if(err)
                throw err;
        });
    });
}