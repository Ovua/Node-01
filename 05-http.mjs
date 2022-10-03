const http = require('http')

const server = http.createServer((req, res) => {

    res.statusCode == 200 
    res.setHeader("Content-Type", "text/html"),
    req.url == '/' && res.end('Welcome'), 
    req.url == '/about' && res.end('This is my profile')) 
    res.end(
    "<html><body><h1>This is my page!</h1></body></html>"
  );
    }
)

server.listen(3000)
