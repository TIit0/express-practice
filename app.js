const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
let {people} = require("./data")

app.get("/", logger,(req, res) => {
    return res.status(200).send("<h1>Home page</h1>")
});

app.get("/api/people", (req, res) => {
    return res.status(201).json({status: "sucess", data: people})
})

app.listen(5000, () => {
    console.log("Listening on port 5000...")
})