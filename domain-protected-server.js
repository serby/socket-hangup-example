var http = require('http')
  , domain = require('domain')
  , serverDomain = domain.create()

// Domain for the server
serverDomain.run(function () {

  http.createServer(function (req, res) {


    var reqd = domain.create()
    reqd.add(req)
    reqd.add(res)

    // On error dispose of the domain
    reqd.on('error', function (error) {
      console.error('Error', error, req.url)
      reqd.dispose()
    })

    // Wait 5 seconds before responding
    setTimeout(function () {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end('Hello World\n')
    }, 5000)

  }).listen(1337, '127.0.0.1')

})


setInterval(function () {
  console.log(process.memoryUsage().rss)
  if (typeof gc === 'function') {
    gc()
  }
}, 2000)

console.log('Server running at http://127.0.0.1:1337/')