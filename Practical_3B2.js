var http = require('http');
var dt = require('./Practical_3A1');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>The date and time are currently: " + dt.myDate() + "</h1>");
  res.write(`<br><h1>Addition: ` + dt.add(10, 2) + "</h1>");
  res.write(`<br><h1>Subtraction: ` + dt.subtract(10, 2) + "</h1>");
  res.write(`<br><h1>Multiplication: ` + dt.multiply(10, 2) + "</h1>");
  res.write(`<br><h1>Division: ` + dt.division(10, 2) + "</h1>");
  res.end();
}).listen(8888);