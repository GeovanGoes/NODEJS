var http = require('http');

var server = http.createServer(function (req, res){
    res.end(); 
});
server.listen(3000);

console.log("Servidor disponível");