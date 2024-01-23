const express = require("express");
const app = express();
let { people } = require("./data")

app.use(express.static("./methods-public"));

//parse urlencoded
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());


app.get("/api/people", (req, res) => {
    return res.status(201).json({ success: true, data: people })
});

app.post("/api/people", (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: "please insert a name"})
    } else {
        return res.status(201).json({success: true, person: name})
    }
});

app.listen(5000, () => {
    console.log("Listening on port 5000...")
});