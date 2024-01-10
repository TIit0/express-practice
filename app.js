const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/html"}); /* mime type */
    res.write("<h1>you did it</h1>")
    res.end()
})

server.listen(5000)
