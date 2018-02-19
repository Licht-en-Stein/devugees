const fs = require('fs');
const randomstring = require('randomstring');

setTimeout(function() {
     console.log('waiting ... ');
     fs.mkdir(__dirname + '/bla', function(err) {    
        if(err) throw err;
            console.log('folder created');
            fs.writeFile(__dirname + '/bla/bla.txt', 'hallo', function(err) {
                if(err) throw err;
                    console.log('file created');

                    fs.writeFile(__dirname + '/bla/bla2.txt', 'hallo', function(err) {
                        if(err) throw err;
                            console.log('file created');

                            fs.writeFile(__dirname + '/bla/bla3.txt', 'hallo', function(err) {
                                if(err) throw err;
                                    console.log('file created');
                            });                            
                    });                    
            });
        });     
}, 1500);
    // here NO blocking
    



