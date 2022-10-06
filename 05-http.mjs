const http = require('http')

const server = http.createServer((req, res) => {

    res.statusCode == 200 
<<<<<<< HEAD
        ? (res.setHeader("Content-Type", "text/html"),
           req.url == '/' && res.end('Welcome'), 
                 req.url == '/about' && res.end('This is my profile')) 
        : emit ('error', new Error("Error"), console.log(res.statusCode)) 
=======
    res.setHeader("Content-Type", "text/html"),
    req.url == '/' && res.end('Welcome'), 
    req.url == '/about' && res.end('This is my profile')) 
    res.end(
    "<html><body><h1>This is my page!</h1></body></html>"
  );
>>>>>>> e31e066a9e7e010bab29575f6280df9bf4227d3c
    }
)

server.listen(3000)
