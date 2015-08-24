var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var http = require('http');

var port = process.env.PORT || 7001;

var serve = serveStatic("dist", {'index': ['index.html']});

var server = http.createServer(function(req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
});

server.listen(port);

console.log('Now listening on port: ' + port + '...');
console.log('\r');
