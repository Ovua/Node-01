const http = require('http')

const server = http.createServer((req, res) => {
console.log("request received");

res.statusCode = 200 && // se il codice e' 200 allora va avanti
    res.setHeader("Content-Type", "application/json");  
    const jsonRes = JSON.stringify({ location: 'Mars'})
    res.end(jsonRes)

});

server.listen(3000, () => {
    console.log(`Server running at http://localhost3000`)
});