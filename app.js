const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.status(200)
        .send("Home page");
});

app.get("/about", (req, res) => {
    res.status(200)
        .send("about")
});

/* cover all http methods, useful for 404 */

app.all("*", (req, res) => {

    res.status(404)
        .send("<h1>404 Resource not Found</h1>")
})

app.listen(5000, () => {
    console.log("server listening on port 5000")
})