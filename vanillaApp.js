const http = require("http");
const { readFileSync } = require("fs");

// get all files

const homepage = readFileSync("./navbar-app/index.html");
const styles = readFileSync("./navbar-app/styles.css");
const js = readFileSync("./navbar-app/browser-app.js");
const logo = readFileSync("./navbar-app/logo.svg");


const server = http.createServer((req, res) => {

    console.log(req.url)
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" }); /* mime type */
        res.write(homepage)
    } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" }); /* mime type */
        res.write("<h1>about</h1>")
    }
    else if (req.url === "/styles.css") {
        res.writeHead(200, { "content-type": "text/css" }); /* mime type */
        res.write(styles)
    }
    else if (req.url === "/browser-app.js") {
        res.writeHead(200, { "content-type": "text/javascript" }); /* mime type */
        res.write(js)
    }
    else if (req.url === "/logo.svg") {
        res.writeHead(200, { "content-type": "image/svg+xml" }); /* mime type */
        res.write(logo)
    } else {
        res.writeHead(404, { "content-type": "text/html" }); /* mime type */
        res.write("<h1>404</h1>")
    }

    res.end();
})

server.listen(5000);
