var http = require('http')

http.createServer(function (req, res) {

  // Wait 5 seconds before responding
  setTimeout(function () {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World\n')
  }, 5000)

}).listen(1337, '127.0.0.1')

setInterval(function () {
  console.log(process.memoryUsage().rss)
}, 2000)

console.log('Server running at http://127.0.0.1:1337/')