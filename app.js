const express = require("express");
const app = express();

app.use(express.static("./methods-public"))
app.use("/login", express.urlencoded({}))

app.get("/", (req, res) => {
    return res.status(200).send("Home")
});

app.post("/login", (req, res) => {
    const { name } = req.body;

    if (name) {
        return res.status(201).send(`<h1>Welcome: ${name}</h1>`)
    }
    return res.status(401).send("Empty field / Unathorized")
})

app.listen(5000, () => {
    console.log("Listening on post 5000...")
});