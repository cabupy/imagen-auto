/*
  Autor: Carlos Vallejos <carlos@vamyal.com>
  Fecha: Abril, 2016
*/

var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res) {
  if (req.url==='/'){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
    console.log(req.url,'send index.html')
  }
  if (req.url==='/image'){
     var img = fs.readFileSync('carton.png')
     res.writeHead(200, {'Content-Type': 'image/png' })
     res.end(img, 'binary')
     console.log(req.url,'send carton.png')
  }
  
});

server.listen(8080)
console.log("Server is listening on port 8080")
