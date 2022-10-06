const http = require('http')

export function CreateApp() {
const server = http.createServer((req, res) => {
 res.statusCode == 200 
    res.setHeader("Content-Type", "text/html"
        res.end('Jest Test')
    }
)}

