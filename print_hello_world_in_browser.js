var http = require('http') // making an http object

http.createServer(function (req, res) { // creating server using http object
    res.writeHead(200, { // specifying headers
        'Content-Type': 'text/html'
    });
    res.end('Hello world!'); // Specifing Text to print
}).listen(8080) // specifying port number for listening