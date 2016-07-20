http = require('http')
fs = require('fs')

server = http.createServer( function(req, res) {

    console.log('Method: ' + req.method)
    console.log('URL: ' + req.url)
    var body = ''
    req.on('data', function (data) {
      body += data
    })
    req.on('end', function () {
      console.log("Body: " + body)
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end()
      console.log("======================")
    })

});

port = process.argv[3] || 3000
host = process.argv[2] || 'localhost'
server.listen(port, host)
console.log('Listening at http://' + host + ':' + port)
console.log('(Usage: node console-out-server.js <host> <port>)')
