const http = require('http')

const server = http.createServer((req, res) => {

    res.statusCode == 200 
        ? (res.setHeader("Content-Type", "text/html"),
            req.url == '/' && res.end('Welcome'), 
                 req.url == '/about' && res.end('This is my profile')) 
        : emit ('error', new Error("Error"), console.log(res.statusCode)) 
    }
)

server.listen(3000)