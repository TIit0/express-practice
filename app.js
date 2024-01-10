const http = require("http");

const server = http.createServer((req, res) => {

    console.log(req.url)
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" }); /* mime type */
        res.write("<h1>Home page</h1>")
    } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" }); /* mime type */
        res.write("<h1>about</h1>")
    } else {
        res.writeHead(404, { "content-type": "text/html" }); /* mime type */
        res.write("<h1>404</h1>")
    }

    res.end()
})

server.listen(5000)
