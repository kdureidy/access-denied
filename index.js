var http = require('http');
http.createServer(function (req, res) {
  res.write('<html><head><title>Access Denied</title></head><body><p>Access Denied!</p></body></html>');
}).listen(8080);
