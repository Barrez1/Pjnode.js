var http = require('http');

http.createServer(function(req, res){

    res.end("Ola");
    
}).listen(8081);


console.log("O servidor esta rodando!");

