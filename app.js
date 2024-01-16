const express = require("express");
const app = express();
const logger = require("./logger")

app.use("/about", logger)

app.get("/" ,(req, res) => {

    return res.status(200).send("<h1>Home</h1>")
})

app.get("/about", (req, res) => {
    return res.status(200).send("<h1>About</h1>")
})

app.get("/about/team", (req, res) => {
    return res.status(200).send("<h1>About</h1>")
})

app.get("/product" ,(req, res) => {

    return res.status(200).send("<h1>products</h1>")
})

app.get("/items", (req, res) => {
    return res.status(200).send("<h1>items</h1>")
})




app.listen(5000, () => {
    console.log("Listening on port 5000...")
})