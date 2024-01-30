const express = require("express");
const app = express();
const peopleRouter = require("./routes/people")

app.use(express.static("./methods-public"));

//parse urlencoded
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/people", peopleRouter)


app.post("/login/", (req, res) => {
    const { name } = req.body;

    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    } else {
        return res.status(401).send("unathorized")
    }
})




app.listen(5000, () => {
    console.log("Listening on port 5000...")
});
